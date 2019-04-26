import {RECIEVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions'

const _nullSession = {
  currentUser: null,
  errors: []
}

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECIEVE_CURRENT_USER:
      return Object.assign({}, action.currentUser)
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, _nullSession)
    default:
      return state
  }
}

export default sessionReducer;