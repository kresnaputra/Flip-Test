import {IError, IGetDataResponseItem} from './responseApi';

export interface IHomeState {
  loading: boolean;
  data: IGetDataResponseItem[];
  error: Partial<IError>;
}
