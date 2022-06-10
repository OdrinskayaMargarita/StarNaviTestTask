import {api} from "../../api/api"
import {GET_FIELD_SIZE_LIST, SAVE_LIST_HOVER_SQUARES, CLEAR_LIST_HOVER_SQUARES} from '../Constants/Constants';


export const getFieldSizeList = (data) => ({
  type: GET_FIELD_SIZE_LIST,
  data: data
})
export const asyncGetFieldSizeList = () => async (dispatch) => {
  await api.getCharacterList().then(res => {
    dispatch(getFieldSizeList(res.data))
  }).catch(err => {
    return false
  });
};


export const saveListHoveredSquares = (data) => ({
  type: SAVE_LIST_HOVER_SQUARES,
  data: data
})
export const asyncClearListHoveredSquares = () => ({
  type: CLEAR_LIST_HOVER_SQUARES,
})