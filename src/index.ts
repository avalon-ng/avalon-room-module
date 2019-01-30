import { DEFAULT_STATE } from 'fsm-avalon-ts/build//main/config';
import { RoomModuleType, RoomReducerModule } from 'room-module-types';
import { getFSM } from 'fsm-avalon-ts';

const defaultState = { ...DEFAULT_STATE };
const dependencies = [RoomModuleType.Players];
const { reducer, validate } = getFSM();
const reducerForRoomModule = (state: any, action: any) => {
  return reducer(state, action);
}
const validateForRoomModule = (state: any, action: any) => {
  validate(state, action);
  return null;
};
const roomModule: RoomReducerModule = {
  defaultState,
  dependencies,
  reducer: reducerForRoomModule,
  validate: validateForRoomModule
};

export default roomModule