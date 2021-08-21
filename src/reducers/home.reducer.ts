import {
  ActionHomeType,
  GET_DATA_FAILURE,
  GET_DATA_STARTED,
  GET_DATA_SUCCESS,
} from '../actions/home.action';
import {IHomeState} from '../types/home';

export const initialState: IHomeState = {
  loading: false,
  data: [],
  error: {},
};

export default (state = initialState, action: ActionHomeType): IHomeState => {
  switch (action.type) {
    case GET_DATA_STARTED: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    }

    case GET_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    default:
      return state;
  }
};
