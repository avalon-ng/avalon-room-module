type Payload_Init_Game = {
  users: Role[],
  isSetGoddess?: boolean
}


type Payload_Start_Round = {

}

type Payload_Build_Team = {
  knights: number[]
}

type Payload_Vote = {
  index: number
  vote: Vote
}

type Payload_Draw_Votes_Result = {

}

type Payload_Execute_Mission = {
  index: number
  mission: MissionStatus
}

type Payload_Draw_Missions_Result = {

}

type Payload_Assassinate = {
  index: number
}

type Payload_Draw_Goddess_Result = {

}

type Payload_Execute_Goddess = {
  index: number
}

type Actions = {
  INIT_GAME: Payload_Init_Game
  START_ROUND: Payload_Start_Round,
  BUILD_TEAM: Payload_Build_Team,
  VOTE: Payload_Vote,
  DRAW_VOTES_RESULT: Payload_Draw_Votes_Result,
  EXECUTE_MISSION: Payload_Execute_Mission,
  DRAW_MISSIONS_RESULT: Payload_Draw_Missions_Result,
  ASSASSINATE: Payload_Assassinate,
  DRAW_GODDESS_RESULT: Payload_Draw_Goddess_Result,
  EXECUTE_GODDESS: Payload_Execute_Goddess
}