import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uniqueId } from 'lodash'
import { ErrorAlert, useAlertParams } from '../Types';
import { AlertSlice } from '../Redux/AlertRedux';
import { RootState } from '../../../Redux';

export const useAlert = ({ message, reducerName }: useAlertParams): void => {
  const dispatch = useDispatch();
  const _uniqueId = useRef(uniqueId()).current;
  const reduxError: Error | null = useSelector(reducerName ? (state: RootState) => state[reducerName].error : null );
  const _message: ErrorAlert['message'] = reduxError ? reduxError.message : message;
  const formattedError: ErrorAlert | null = _message ? { message: _message, uniqueId: _uniqueId } : null;

  useEffect(() => {
    if (formattedError) {
      dispatch(AlertSlice.actions.addToErrors(formattedError));
    }
  }, [formattedError, dispatch]);

  useEffect(() => {
    return () => {
      if (formattedError) {
        dispatch(AlertSlice.actions.removeFromErrors(formattedError))
      }
    }
  }, []);
};
