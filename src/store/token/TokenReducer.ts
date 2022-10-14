import { Action } from "./Action"


export interface TokenState {
  token: string,
  id: string
}

const initialState = {
  token: '',
  id: ''
}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {
  switch(action.type){
    case "ADD_TOKEN": {
      return {token: action.payload, id: state.id}
    };
  }
}