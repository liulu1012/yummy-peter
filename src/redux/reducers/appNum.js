let defaultAccountState = {num:0 }

export default function appNum(state=defaultAccountState,action){
  switch(action.type){
    case 'ADD_NUM' :
      return state
    default :
      return state
  }
}
