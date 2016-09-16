import * as types from '../actions/actionTypes';

const initialState = {
  textContent: 'helloWorld @helloWorld http://www.csdn.net',
  atUser:[]
};

export function showTextReducers(state = initialState, action = {}) {

  // alert(JSON.stringify(state)+' : '+JSON.stringify(action));

  switch (action.type) {
    case types.SHOWMORETEXT:
      return {
        ...state,
        textContent:action.textContent
      };
    case types.SHOWLESSTEXT:
      return {
        ...state,
       textContent:action.textContent
      };
    default:
      return state;
  }
}
