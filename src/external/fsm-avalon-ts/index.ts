import { STATE_MAP, ACTIONS, VALIDATE_MAP } from './fsm-avalon';
import * as actionCreators from './actions';
import makeFSM from '../fsm-reducer-ts';

const getFSM = () => {
  const { reducer, getValidateError, getActions, validate } = makeFSM(
    STATE_MAP,
    ACTIONS,
    {
      validateMap: VALIDATE_MAP
    }
  );
  return {
    reducer,
    getValidateError,
    getActions,
    validate
  };
};

export { getFSM, actionCreators };
