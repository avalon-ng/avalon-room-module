const NEEDED_KNIGHTS_LIST: number[][] = [
  [2,3,2,3,3],
  [2,3,2,3,3],
  [2,3,2,3,3],
  [2,3,2,3,3],
  [2,3,2,3,3],
  [2,3,2,3,3],
  [2,3,4,3,4],
  [2,3,3,4,4],
  [3,4,4,5,5],
  [3,4,4,5,5],
  [3,4,4,5,5]
]

// should be outsude of fsm
// const ROLE_LIST = [0,1,2,3,4,
//   ["梅林","好人","好人","刺客","壞人"],
//   ["梅林","好人","好人","好人","刺客","壞人"],
//   ["梅林","好人","好人","好人","刺客","壞人","壞人"],
//   ["梅林","好人","好人","好人","好人","刺客","壞人","壞人"],
//   ["梅林","好人","好人","好人","好人","好人","刺客","壞人","壞人"],
//   ["梅林","好人","好人","好人","好人","好人","刺客","壞人","壞人","壞人"]
// ]

const NEEDED_FAILED_LIST: number[][] = [
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,1,2,1],
  [1,1,1,2,1],
  [1,1,1,2,1],
  [1,1,1,2,1]
]

const STATUS_BEFORE_INIT: string = 'BEFORE_INIT';
const STATUS_INIT: string = 'INIT';
const STATUS_TEAM_BUILD: string = 'TEAM_BUILD';
const STATUS_TEAM_VOTING: string = 'TEAM_VOTING';
const STATUS_TEAM_VOTED: string = 'TEAM_VOTED';
const STATUS_MISSION: string = 'MISSION';
const STATUS_MISSION_FINISHED: string = 'MISSION_FINISHED';
const STATUS_GAMEOVER_SUCCESS: string = 'GAMEOVER_SUCCESS';
const STATUS_GAMEOVER_FAIL: string = 'GAMEOVER_FAIL';
const STATUS_ASSASSIN: string = 'ASSASSIN';
const ACTION_INIT_GAME: string = 'INIT_GAME';
const ACTION_START_ROUND: string = 'START_ROUND';
const ACTION_BUILD_TEAM: string = 'BUILD_TEAM';
const ACTION_VOTE: string = 'VOTE';
const ACTION_DRAW_VOTES_RESULT: string = 'DRAW_VOTES_RESULT';
const ACTION_EXECUTE_MISSION: string = 'EXECUTE_MISSION';
const ACTION_DRAW_MISSIONS_RESULT: string = 'DRAW_MISSIONS_RESULT';
const ACTION_ASSASSINATE: string = 'ASSASSINATE';

const ROLE_MERLIN: string = 'ROLE_MERLIN';
const ROLE_OBERON: string = 'ROLE_OBERON';

const STATUS_GODDESS: string = 'GODDESS';
const STATUS_GODDESS_FINISHED: string = 'GODDESS_FINISHED';
const ACTION_DRAW_GODDESS_RESULT: string = 'DRAW_GODDESS_RESULT';
const ACTION_EXECUTE_GODDESS: string = 'EXECUTE_GODDESS';

const DEFAULT_VALUE: Value = {
  users: [],
  knights: [],
  votes: [],
  votesResult: false,
  failedVotes: 0,
  missions: [],
  missionResults: [],
  captain: -1,
  goddessResults: [],
  assassinated: -1,
  neededKnights: [],
  neededFails: []
};

const DEFAULT_STATE: State = {
  status: 'STATUS_BEFORE_INIT',
  value: DEFAULT_VALUE
};

export {
  NEEDED_FAILED_LIST,
  NEEDED_KNIGHTS_LIST,
  STATUS_BEFORE_INIT,
  STATUS_INIT,
  STATUS_TEAM_BUILD,
  STATUS_TEAM_VOTING,
  STATUS_TEAM_VOTED,
  STATUS_MISSION,
  STATUS_MISSION_FINISHED,
  STATUS_GAMEOVER_SUCCESS,
  STATUS_GAMEOVER_FAIL,
  STATUS_ASSASSIN,
  ACTION_INIT_GAME,
  ACTION_START_ROUND,
  ACTION_BUILD_TEAM,
  ACTION_VOTE,
  ACTION_DRAW_VOTES_RESULT,
  ACTION_EXECUTE_MISSION,
  ACTION_DRAW_MISSIONS_RESULT,
  ACTION_ASSASSINATE,
  ROLE_MERLIN,
  ROLE_OBERON,
  STATUS_GODDESS,
  STATUS_GODDESS_FINISHED,
  ACTION_DRAW_GODDESS_RESULT,
  ACTION_EXECUTE_GODDESS,
  DEFAULT_VALUE,
  DEFAULT_STATE
}