import axios from 'axios'
import { GET_ALL, GET_ONE, LOADING, ERROR } from '../types'
import { API } from '../../config'

export const getAll = entity => async (dispatch) => {
  dispatch({
    type: LOADING(entity)
  })
  try {
    const response = await axios.get(`${API}/${entity}`)
    dispatch({
      type: GET_ALL(entity),
      payload: response.data
    })
  } catch (error) {
    console.error(error)
    dispatch({
      type: ERROR(entity),
      error: { message: error.message }
    })
  }
}

export const getOne = (entity, id) => async (dispatch) => {
  dispatch({
    type: LOADING(entity)
  })
  try {
    const response = await axios.get(`${API}/${entity}/${id}`)
    dispatch({
      type: GET_ONE(entity),
      payload: response.data
    })
  } catch (error) {
    console.error(error)
    dispatch({
      type: ERROR(entity),
      error: { message: error.message }
    })
  }
}

export default {
  getAll,
  getOne
}
