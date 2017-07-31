import {combineReducers} from 'redux'

import account from './accountReducer'
import app from './appReducer'
import dish from './dish'
const rootReducer = combineReducers({
  account,
  app,
  dish
})

export default rootReducer
