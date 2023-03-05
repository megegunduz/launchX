import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../Redux';
import { SearchState } from '../Types';

const initialState: SearchState = {
  launches: null,
  isLoading: false,
  error: null,
};

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchLaunches: (state: SearchState, action: PayloadAction<string>) => {},
    setLaunches: (state: SearchState, action: PayloadAction<SearchState['launches']>) => {
      state.launches = action.payload;
    },
    setLoading: (state: SearchState, action: PayloadAction<SearchState['isLoading']>) => {
      state.isLoading = action.payload;
    },
    setError: (state: SearchState, action: PayloadAction<SearchState['error']>) => {
      state.error = action.payload;
    },
  },
});

export const SearchSelectors = {
  launches: (state: RootState): SearchState['launches'] => state[SearchSlice.name].launches,
  isLoading: (state: RootState): SearchState['isLoading'] => state[SearchSlice.name].isLoading,
  error: (state: RootState): SearchState['error'] => state[SearchSlice.name].error,
}