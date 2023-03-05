import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerNames, RootState } from '../../../Redux';
import { HomeState } from '../Types';
import { Launch } from '../../../Types';

const initialState: HomeState = {
  launches: [],
  page: 1,
  error: null,
}

export const HomeSlice = createSlice({
  name: ReducerNames.HOME,
  initialState,
  reducers: {
    fetchLaunches: () => { },
    setLaunches: (state: HomeState, action: PayloadAction<Launch[]>) => {
      state.launches = action.payload;
    },
    increasePage: (state: HomeState) => {
      state.page += 1;
    },
    setError: (state: HomeState, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
  },
});

export const HomeSelectors = {
  launches: (state: RootState): HomeState['launches'] => state[HomeSlice.name].launches,
  page: (state: RootState): HomeState['page'] => state[HomeSlice.name].page,
};
