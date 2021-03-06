export interface IError {
  error: any;
}

export interface IGetDataResponseItem {
  id: string;
  amount: string;
  unique_code: number;
  status: 'SUCCESS' | 'PENDING';
  sender_bank: string;
  account_number: string;
  beneficiary_name: string;
  beneficiary_bank: string;
  remark: string;
  created_at: string;
  completed_at: string;
  fee: number;
}

export interface IGetDataResponse {
  [key: string]: IGetDataResponseItem;
}
