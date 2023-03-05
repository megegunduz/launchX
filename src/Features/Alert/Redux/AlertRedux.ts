import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerNames, RootState } from '../../../Redux';
import { AlertState, ErrorAlert } from '../Types'

const initialState: AlertState = {
  errors: [],
};

export const AlertSlice = createSlice({
  name: ReducerNames.ALERT,
  initialState,
  reducers: {
    addToErrors: (state: AlertState, action: PayloadAction<ErrorAlert>) => {
      state.errors.push(action.payload);
    },
    removeFromErrors: (state: AlertState, action: PayloadAction<ErrorAlert>) => {
      const indexOfError = state.errors.findIndex(error => {
        return error.uniqueId === action.payload.uniqueId;
      });
      if (indexOfError > - 1) {
        state.errors.splice(indexOfError, 1);
      }
    },
  },
});

export const AlertSelectors = {
  errors: (state: RootState): AlertState['errors'] => state[AlertSlice.name].errors,
};