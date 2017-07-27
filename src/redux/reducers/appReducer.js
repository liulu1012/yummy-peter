let defaultAppState = {
  showAlert : false,
  alertMsg :'测试'
}

export default function appReducer(state=defaultAppState,action){
  switch(action.type){
    case 'SHOW_ALERT' :
      console.log('SHOW_ALERT',action)
      return state
    case 'HIDE_ALERT':
      console.log('HIDE_ALERT',action)
      return state
    default :
      return state

  }
}