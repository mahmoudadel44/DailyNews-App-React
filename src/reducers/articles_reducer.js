import {
  GET_LATEST_NEWS,
  GET_OTHER_NEWS,
  GET_LATEST_GALLERY,
  GET_SELECTED_NEWS,
  CLEAR_SELECTED_NEWS
} from "../actions/types";
export default function(state = {}, action) {
  switch (action.type) {
    case GET_LATEST_NEWS:
      return { ...state, latest: action.payload };
    case GET_OTHER_NEWS:
      return { ...state, other: action.payload };
    case GET_LATEST_GALLERY:
      return { ...state, gallery: action.payload };
    case GET_SELECTED_NEWS:
      return { ...state, selected: action.payload };
    case CLEAR_SELECTED_NEWS:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}
