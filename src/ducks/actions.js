const HANDLE_AUTH_RES = 'HANDLE_AUTH_RES'

export function handleAuthRes( authRes ){
  return {
    type: HANDLE_AUTH_RES,
    payload: authRes
  }
}