import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import axios from 'axios';

import {
  IError,
  IGetDataResponse,
  IGetDataResponseItem,
} from '../types/responseApi';
import {BASE_URL} from '../constants/api';

export const GET_DATA_STARTED = 'GET_DATA_STARTED';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';

export const getDataAction = (
  onSucces: (data: IGetDataResponseItem[]) => void,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(getDataStarted());

    axios
      .get<IGetDataResponse>(BASE_URL)
      .then(res => {
        let dataConvert: IGetDataResponseItem[] = [];

        //convert data from object list to array
        for (const property in res.data) {
          const data = res.data[property];
          dataConvert = [
            ...dataConvert,
            {
              id: data.id,
              account_number: data.account_number,
              amount: data.amount,
              beneficiary_bank: data.beneficiary_bank,
              beneficiary_name: data.beneficiary_name,
              completed_at: data.completed_at,
              created_at: data.created_at,
              fee: data.fee,
              remark: data.remark,
              sender_bank: data.sender_bank,
              status: data.status,
              unique_code: data.unique_code,
            },
          ];
        }

        onSucces(dataConvert);
        dispatch(getDataSuccess(dataConvert));
      })
      .catch(err => {
        if (__DEV__) {
          console.log('Error GET data', err.response);
        }
        dispatch(getDataFailure(err));
      });
  };
};

const getDataStarted = () => ({
  type: GET_DATA_STARTED as typeof GET_DATA_STARTED,
});

const getDataSuccess = (data: IGetDataResponseItem[]) => ({
  type: GET_DATA_SUCCESS as typeof GET_DATA_SUCCESS,
  payload: {
    data,
  },
});

const getDataFailure = (error: IError) => ({
  type: GET_DATA_FAILURE as typeof GET_DATA_FAILURE,
  payload: {
    error,
  },
});

export type ActionHomeType = ReturnType<
  typeof getDataStarted | typeof getDataSuccess | typeof getDataFailure
>;
