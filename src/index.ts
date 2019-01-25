import { DEFAULT_VALUE } from './external/fsm-avalon-ts/config';
import { RoomModuleType, RoomReducerModule } from 'room-module-types';
import { getFSM } from './external/fsm-avalon-ts';

const defaultState = { ...DEFAULT_VALUE };
const dependencies = [RoomModuleType.Players];
const { reducer, validate } = getFSM();
const validateForRoomModule = (state: any, action: any) => {
  validate(state, action);
  return null;
};
const transformState = () => ({});
const roomModule: RoomReducerModule = {
  defaultState,
  dependencies,
  reducer,
  validate: validateForRoomModule,
  transformState,
};

export default roomModule