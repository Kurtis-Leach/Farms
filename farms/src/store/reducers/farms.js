import * as actions from "../actions"

const initialState = {
    farms: []
}

const farms = (state, action) => {
    const { farms } = action
    return farms
}

const handlers = {
    [actions.FARMS_DATA_RECIEVED]: farms
}

export default (state = initialState, action) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") return state;
    return handler(state, action);
  };