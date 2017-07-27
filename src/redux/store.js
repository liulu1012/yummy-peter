import {createStore} from 'redux'

let defaultAppState = {
  showAlert : false,
  alertMsg:'测试'
}

function appReducer(state=defaultAppState,action){
  switch(action.type){
    case 'SHOW_ALERT':
      console.log(action)
      return {...state,showAlert:true,alertMsg:action.msg}
    case 'HIDE_ALERT':
      return {...state,showAlert:false,alertMsg:''}
    default :
      return state
  }
}

const store = createStore(appReducer)

export default store
