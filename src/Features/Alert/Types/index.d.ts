import { ReducerNames } from '../../../Redux';

export type ErrorAlert = {
  message?: string,
  uniqueId: string,
};

export type AlertState = {
  errors: ErrorAlert[],
};

export type useAlertParams = {
  message?: string,
  reducerName: ReducerNames,
};