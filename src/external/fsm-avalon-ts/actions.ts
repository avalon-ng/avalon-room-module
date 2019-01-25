import { 
  ACTION_ASSASSINATE,
  ACTION_BUILD_TEAM,
  ACTION_DRAW_GODDESS_RESULT,
  ACTION_DRAW_MISSIONS_RESULT,
  ACTION_DRAW_VOTES_RESULT,
  ACTION_EXECUTE_GODDESS,
  ACTION_EXECUTE_MISSION,
  ACTION_INIT_GAME,
  ACTION_START_ROUND,
  ACTION_VOTE,
} from './config';

const initGame = ({ users, isSetGoddess = false }: Payload_Init_Game) => {
  return {
    type : ACTION_INIT_GAME,
    users,
    isSetGoddess
  }
}

const startRound = (_: Payload_Start_Round = {}) => {
  return {
    type : ACTION_START_ROUND
  }
}

const buildTeam = ({ knights }: Payload_Build_Team) => {
  return {
    type : ACTION_BUILD_TEAM,
    knights 
  }
}

const vote = ({ index , vote }: Payload_Vote) => {
  return {
    type : ACTION_VOTE,
    index,
    vote
  }
}

const drawVotesResult = (_: Payload_Draw_Votes_Result = {}) => {
  return {
    type : ACTION_DRAW_VOTES_RESULT
  }
}

const executeMission = ({ index, mission }: Payload_Execute_Mission) => {
  return {
    type : ACTION_EXECUTE_MISSION,
    index,
    mission
  }
}

const drawMissionsResult = (_: Payload_Draw_Missions_Result = {}) => {
  return {
    type : ACTION_DRAW_MISSIONS_RESULT
  }
}

const assassinate = ({ index }: Payload_Assassinate ) => {
  return {
    type : ACTION_ASSASSINATE,
    index
  }
}

const executeGoddess = ({ index }: Payload_Execute_Goddess) => {
  return {
    type : ACTION_EXECUTE_GODDESS,
    index
  }
}

const drawGoddessResult = (_: Payload_Draw_Goddess_Result = {}) => {
  return {
    type : ACTION_DRAW_GODDESS_RESULT
  }
}

export {
  initGame,
  startRound,
  buildTeam,
  vote,
  drawVotesResult,
  executeMission,
  drawMissionsResult,
  assassinate,
  executeGoddess,
  drawGoddessResult
}