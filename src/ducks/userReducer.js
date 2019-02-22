const HANDLE_AUTH_RES = "HANDLE_AUTH_RES"

let initialState = {
  authenticated: false,
  user: {}
}

export function auth( state = initialState, action ) {
  switch ( action.type ) {
    case HANDLE_AUTH_RES:
    const {user, authenticated} = action.payload
    return {...state, authenticated, user}
  default:
  return state
  }
}

