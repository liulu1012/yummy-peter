let dish = {
  all:{

  }
}

export default function dishReducer(state=dish,action){
  switch(action.type){
    case 'LOAD_DISH' :
      return {...state,all:action.dishes}
    default :
      return state
  }
}