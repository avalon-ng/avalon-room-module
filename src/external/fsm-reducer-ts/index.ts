type Error = string | null;
type FSM_Option = {
  prefix?: string;
  validateMap?: any;
};

const makeFSM = (stateMap: any, actionMap: any, opts: FSM_Option = {}) => {
  const { prefix = '', validateMap = {} } = opts;
  const initState = {
    status: stateMap.start.status,
    value: stateMap.start.value
  };

  let currentStatus = stateMap.start.status;
  let validateError: Error = null;

  function getHandler(handles: any, handlerName: any): any {
    const actionParts = handlerName.split('.');
    if (actionParts.length === 1) {
      return handles[handlerName];
    }
    return getHandler(handles[actionParts[0]], actionParts.slice(1).join('.'));
  }

  function transit(state: any, action: any): any {
    let nextStatus = '';
    if (typeof action === 'function') {
      nextStatus = action(state);
    } else if (typeof action === 'string') {
      nextStatus = action;
    }
    if (!stateMap.states[nextStatus]) {
      const msg = `cannot transit to status ${nextStatus} from ${currentStatus}`;
      validateError = msg;
      nextStatus = currentStatus;
    }
    return nextStatus;
  }

  const reducer = (state: any = initState, actionObj: any): object => {
    const { type } = actionObj;
    const actionName = (type || '').replace(new RegExp('^' + prefix), '');
    if (!actionName) {
      return state;
    }

    const { status, value } = state;

    const availableActions = stateMap.states[status];

    if (!availableActions[actionName]) {
      const msg = `action ${actionName} is not available for status ${status}`;
      validateError = msg;
      return state;
    }

    const action = getHandler(actionMap, actionName);
    const validate = getHandler(validateMap, actionName);

    if (validate) {
      validateError = validate(value, actionObj);
      if (validateError) {
        return state;
      }
    }

    // alow action to be no operation
    const nextValue = action(value, actionObj) || value;
    const nextStatus = transit(nextValue, availableActions[actionName]);
    currentStatus = nextStatus;

    return {
      status: nextStatus,
      value: nextValue
    };
  };

  const getActions = () => {
    return Object.keys(stateMap.states[currentStatus]);
  };

  const getValidateError = () => {
    return validateError;
  };

  const validate = (state: any, actionObj: any) => {
    const { type } = actionObj;
    const { value } = state;
    const actionName = (type || '').replace(new RegExp('^' + prefix), '');
    const handler = getHandler(validateMap, actionName);
    if (handler) {
      return handler(value, actionObj);
    }
    return null;
  };

  return {
    reducer,
    getActions,
    getValidateError,
    validate
  };
};

export default makeFSM;
