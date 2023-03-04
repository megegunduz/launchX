import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../Redux';
import { HomeState, Launch } from '../Types';

const initialState: HomeState = {
  launches: [],
  page: 1,
}

export const HomeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    fetchLaunches: () => { },
    setLaunches: (state: HomeState, action: PayloadAction<Launch[]>) => {
      state.launches = action.payload;
    },
    increasePage: (state: HomeState) => {
      state.page += 1;
    },
  },
});

export const HomeSelectors = {
  launches: (state: RootState): Launch[] => state[HomeSlice.name].launches,
  page: (state: RootState): number => state[HomeSlice.name].page,
};
