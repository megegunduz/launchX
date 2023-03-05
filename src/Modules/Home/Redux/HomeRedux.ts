import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../Redux';
import { HomeState } from '../Types';
import { Launch } from '../../../Types';

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
  launches: (state: RootState): HomeState['launches'] => state[HomeSlice.name].launches,
  page: (state: RootState): HomeState['page'] => state[HomeSlice.name].page,
};
