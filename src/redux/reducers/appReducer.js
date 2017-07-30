let defaultAppState = {
  showAlert : false,
  alertMsg :'',
  num:0
}

export default function appReducer(state=defaultAppState,action){
  switch(action.type){
    case 'SHOW_ALERT' :
      console.log('SHOW_ALERT',action)
      return {...state,showAlert:true,alertMsg:action.msg}
    case 'HIDE_ALERT':
      console.log('HIDE_ALERT',action)
      return {...state,showAlert:false,alertMsg:''}
    default :
      return state

  }
}
