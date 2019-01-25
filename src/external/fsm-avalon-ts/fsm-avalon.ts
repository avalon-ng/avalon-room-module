import {
  NEEDED_FAILED_LIST,
  NEEDED_KNIGHTS_LIST,
  STATUS_BEFORE_INIT,
  DEFAULT_VALUE
} from './config';

const checkAssassinate: StateFunction = (state) => {
  const { assassinated, users } = state;
  const isCorrect = users[assassinated] === 'MERLIN';
  return isCorrect ? 'GAMEOVER_FAIL' : 'GAMEOVER_SUCCESS';
};

const checkEndGame: StateFunction = (state) => {
  if (state.failedVotes >= 5) {
    return 'GAMEOVER_FAIL';
  }
  const failedMissionsAmount = state.missionResults.filter(
    el => el.result === false
  ).length;
  const succeedMissionsAmount = state.missionResults.filter(
    el => el.result === true
  ).length;
  if (failedMissionsAmount >= 3) {
    return 'GAMEOVER_FAIL';
  }
  if (succeedMissionsAmount >= 3) {
    return 'ASSASSIN';
  }
  return 'TEAM_BUILD';
};

const ACTIONS: ActionMap = {
  INIT_GAME: (state, { users, isSetGoddess = false }) => {
    const userAmount = users.length;
    return {
      ...state,
      config: {
        isSetGoddess
      },
      goddessResults: [users.length - 1],
      users: [...users],
      neededKnights: [...NEEDED_KNIGHTS_LIST[userAmount]],
      neededFails: [...NEEDED_FAILED_LIST[userAmount]],
      failVotes: 0,
      captain: -1
    };
  },
  START_ROUND: state => {
    const userAmount = state.users.length;
    const votes = new Array<Vote>(userAmount).fill('WAIT');
    const missions = new Array<MissionStatus>(userAmount).fill('NO');
    return {
      ...state,
      votes,
      missions,
      captain: (state.captain + 1) % userAmount
    };
  },
  BUILD_TEAM: (state, { knights }) => {
    return {
      ...state,
      knights
    };
  },
  VOTE: (state, { index, vote }) => {
    const votes = [...state.votes];
    votes[index] = vote;
    return {
      ...state,
      votes
    };
  },
  DRAW_VOTES_RESULT: state => {
    const { failedVotes, knights, users, votes } = state;
    const successVotesCount = votes.filter(e => e === 'APPROVE').length;
    const failedVotesCount = votes.filter(e => e === "REJECT").length;
    const votesResult = successVotesCount > failedVotesCount;
    const userAmount = users.length;
    const missions = new Array<MissionStatus>(userAmount).fill('NO').map((_, i) => {
      return knights.indexOf(i) >= 0 ? 'WAIT' : 'NO';
    });
    return {
      ...state,
      failedVotes: votesResult ? 0 : failedVotes + 1,
      votesResult,
      missions
    };
  },
  EXECUTE_MISSION: (state, { index, mission }) => {
    const missions = [ ...state.missions];
    missions[index] = mission;
    return {
      ...state,
      missions
    };
  },
  DRAW_MISSIONS_RESULT: state => {
    const round = state.missionResults.length;
    const neededFailAmount = state.neededFails[round];
    const failAmount = state.missions
      .filter(el => el === 'FAIL')
      .length;
    const successAmount = state.missions
      .filter(el => el === 'SUCCESS')
      .length;
    const missionResults = [
      ...state.missionResults,
      {
        failAmount,
        successAmount,
        result: neededFailAmount > failAmount
      }
    ];
    return {
      ...state,
      missionResults
    };
  },
  ASSASSINATE: (state, { index }) => {
    return {
      ...state,
      assassinated: index
    };
  },
  DRAW_GODDESS_RESULT: (state, {}) => {
    return {
      ...state
    };
  },
  EXECUTE_GODDESS: (state, {}) => {
    return {
      ...state
    };
  }
};

const STATE_MAP: StateMap = {
  start: {
    status: STATUS_BEFORE_INIT,
    value: DEFAULT_VALUE
  },
  states: {
    BEFORE_INIT: {
      INIT_GAME: 'INIT'
    },
    INIT: {
      START_ROUND: checkEndGame
    },
    TEAM_BUILD: {
      BUILD_TEAM: 'TEAM_VOTING'
    },
    TEAM_VOTING: {
      VOTE: state => {
        const finished = state.votes.find(e => e === 'WAIT') === undefined;
        if (!finished) {
          return 'TEAM_VOTING';
        }
        return 'TEAM_VOTED';
      }
    },
    TEAM_VOTED: {
      DRAW_VOTES_RESULT: state => {
        if (state.votesResult === true) {
          return 'MISSION';
        }
        return 'INIT';
      }
    },
    MISSION: {
      EXECUTE_MISSION: state => {
        const finished = state.missions.indexOf('WAIT') < 0;
        if (!finished) {
          return 'MISSION';
        }
        return 'MISSION_FINISHED';
      }
    },
    MISSION_FINISHED: {
      DRAW_MISSIONS_RESULT: 'INIT'
    },
    GODDESS: {
      GODDESS: 'GODDESS_FINISHED'
    },
    GODDESS_FINISHED: {
      DRAW_GODDESS_RESULT: 'TEAM_BUILD'
    },
    ASSASSIN: {
      ASSASSINATE: checkAssassinate
    },
    GAMEOVER_SUCCESS: {},
    GAMEOVER_FAIL: {}
  }
};

const VALIDATE_MAP: ValidateMap = {
  INIT_GAME: (_, { users }) => {
    const usersAmount = users.length;
    if (usersAmount < 5) {
      return 'users should be greater or qual to 5.';
    } else if (usersAmount > 10) {
      return 'users should be less or qual to 10';
    }

    return null;
  },
  BUILD_TEAM: (state, { knights }) => {
    const { neededKnights, missionResults, users } = state;
    const userAmount = users.length;
    const round = missionResults.length;
    const neededKnight = neededKnights[round];
    if (knights.length !== neededKnight) {
      return 'error amount of knights';
    }
    if (new Set(knights).size !== knights.length) {
      return 'cannot have same index';
    }
    if (knights.filter(el => el < 0 || el > userAmount - 1).length !== 0) {
      return 'error index';
    }

    return null;
  },
  VOTE: (state, { index, vote }) => {
    const { users, votes } = state;
    if (vote !== 'APPROVE' && vote !== 'REJECT') {
      return 'vote should be APPROVE or REJECT';
    }
    if (index < 0 || index > users.length - 1) {
      return 'index out of bound';
    }
    if (votes[index] !== 'WAIT') {
      return 'the index of vote already exist';
    }
    return null;
  },
  EXECUTE_MISSION: (state, { index, mission }) => {
    const { users, missions } = state;
    if (mission !== 'FAIL' && mission !== 'SUCCESS') {
      return 'mission should be FAIL or SUCCESS';
    }
    if (index < 0 || index > users.length - 1) {
      return 'index out of bound';
    }
    if (missions[index] === 'FAIL' || missions[index] === 'SUCCESS') {
      return 'the index of mission already exist';
    }
    if (missions[index] === 'NO') {
      return 'the index is not knight';
    }
    return null;
  },
  ASSASSINATE: (state, { index }) => {
    const { users } = state;
    if (index < 0 || index > users.length - 1) {
      return 'index out of bound';
    }
    if (users[index] === 'BAD' || users[index] === 'MORDRED' || users[index] === 'MORGANA') {
      return 'cannot assassinate bad guys except Oberon';
    }
    return null;
  }
};

export {
  STATE_MAP,
  ACTIONS,
  VALIDATE_MAP
};
