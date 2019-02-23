


let initialState = {
  authenticated: false,
  user: {}
}


const HANDLE_AUTH_RES = 'HANDLE_AUTH_RES'


export default function auth( state = initialState, action ) {
  switch ( action.type ) {
    case HANDLE_AUTH_RES:
    const {user, authenticated} = action.payload
    return {...state, authenticated, user}
    default:
    return state
  }
}


export function handleAuthRes( authRes ){
  return {
    type: HANDLE_AUTH_RES,
    payload: authRes
  }
}