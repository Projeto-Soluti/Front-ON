import { createStore } from 'redux'
import { tokenReducer } from './token/TokenReducer'

export const store = createStore(tokenReducer)

