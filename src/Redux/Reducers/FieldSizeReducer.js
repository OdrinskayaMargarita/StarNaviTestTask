import { GET_FIELD_SIZE_LIST, SAVE_LIST_HOVER_SQUARES, CLEAR_LIST_HOVER_SQUARES } from '../Constants/Constants';

const initialState = {
  fieldSizeList: [],
  listHoveredSquares: []
}

export const FieldSizeReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_FIELD_SIZE_LIST : {
      return {...state, fieldSizeList: action.data}
    }
    case SAVE_LIST_HOVER_SQUARES : {
      return {
        ...state,
        listHoveredSquares: state.listHoveredSquares.length > 10 ? [action.data, ...state.listHoveredSquares.slice(0,9)] : [action.data, ...state.listHoveredSquares] }
    }
    case CLEAR_LIST_HOVER_SQUARES : {
      return {...state, listHoveredSquares: []}
    }
    default:
      return state;
  }
}