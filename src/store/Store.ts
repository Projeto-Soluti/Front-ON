import { legacy_createStore as createStore } from 'redux'
import { tokenReducer } from './token/TokenReducer'


export const store = createStore(tokenReducer)

