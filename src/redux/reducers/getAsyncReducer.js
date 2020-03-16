import { GET_ALL, GET_ONE, POST_ONE, PUT_ONE, DELETE_ONE, LOADING, ERROR } from '../types'

const INITIAL_STATE = {
  data: [],
  item: {},
  loading: true,
  error: false
}

const getAsyncReducer = entity => (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL(entity):
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: {}
      }
    case GET_ONE(entity):
      return {
        ...state,
        item: action.payload,
        loading: false,
        error: {}
      }
    case POST_ONE(entity):
      return {
        ...state,
        item: action.payload,
        loading: false,
        error: {}
      }
    case PUT_ONE(entity):
      return {
        ...state,
        item: action.payload,
        loading: false,
        error: {}
      }
    case DELETE_ONE(entity):
      return {
        ...state,
        item: action.payload,
        loading: false,
        error: {}
      }
    case LOADING(entity):
      return {
        ...state,
        loading: action.payload || true
      }
    case ERROR(entity):
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default getAsyncReducer
