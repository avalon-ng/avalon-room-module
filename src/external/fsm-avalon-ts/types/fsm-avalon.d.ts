interface IFSMOption {
  validateMap?: object;
}

type MissionResult = {
  failAmount: number
  successAmount: number
  result: boolean
}

type MissionStatus = 'NO' | 'WAIT' | 'FAIL' | 'SUCCESS';
type Role = 'MERLIN' | 'OBERON' | 'MORDRED' | 'PERCIVAL' | 'MORGANA' | 'GOOD' | 'BAD'
type Vote = 'APPROVE' | 'REJECT' | 'WAIT'

type Value = {
  users: Role[];
  knights: number[];
  votes: Vote[];
  votesResult: boolean;
  failedVotes: number;
  missions: MissionStatus[];
  missionResults: MissionResult[]; 
  captain: number;
  goddessResults: number[];
  assassinated: number;
  neededKnights: number[];
  neededFails: number[];
}

type ActionMap = {
  [key in keyof Actions]: ActionFunction<Actions[key]> | string
}

type State = {
  status: string,
  value: Value
}

type StateMap = {
  start: State;
  states: {
    [key in keyof States]: {
      [actionKey in keyof States[key]]: StateFunction | keyof States
    };
  };
}

type GetActions = () => string[];
type ValidateError = string | null;
type ActionFunction<Payload> = (state: Value, action: Payload ) => Value;
type StateFunction = (state: Value) => keyof States;
// type HandlerFunction = (handles: object, handleName: string) => ActionFunction | ValidateFunction

// type Actions =
//   | { type: 'INIT_GAME'; payload: { isSetGoddess: boolean, users: number[] } }
//   | { type: 'START_ROUND'; payload: { a: number } }
//   | { type: 'BUILD_TEAM'; payload: {} }
//   | { type: 'VOTE'; payload: {} }
//   | { type: 'DRAW_VOTES_RESULT'; payload: {} }
//   | { type: 'EXECUTE_MISSION'; payload: {} }
//   | { type: 'DRAW_MISSIONS_RESULT'; payload: {} }
//   | { type: 'ASSASSINATE'; payload: {} }
//   | { type: 'DRAW_GODDESS_RESULT'; payload: {} }
//   | { type: 'EXECUTE_GODDESS'; payload: {} };
type States = {
  BEFORE_INIT: {
    INIT_GAME: {}
  }
  INIT: {
    START_ROUND: {}
  },
  TEAM_BUILD: {
    BUILD_TEAM: {}
  },
  TEAM_VOTING: {
    VOTE: {}
  },
  TEAM_VOTED: {
    DRAW_VOTES_RESULT: {}
  },
  MISSION: {
    EXECUTE_MISSION: {}
  },
  MISSION_FINISHED: {
    DRAW_MISSIONS_RESULT: {}
  },
  GODDESS: {
    GODDESS: {}
  },
  GODDESS_FINISHED: {
    DRAW_GODDESS_RESULT: {}
  },
  ASSASSIN: {
    ASSASSINATE: {}
  }
  GAMEOVER_SUCCESS: {}
  GAMEOVER_FAIL: {}
}

type ValidateFunction<Payload> = (state: Value, action: Payload ) => string | null

type ValidateMap = {
  [key in keyof Actions]?: ValidateFunction<Actions[key]>
}

declare module "fsm-reducer";