import {combineReducers} from 'redux'

import accountReducer from './accountReducer'
import appReducer from './appReducer'
import appNum from './appNum.js'

const rootReducer = combineReducers({
  account:accountReducer,
  app:appReducer,
  num:appNum
})

export default rootReducer
