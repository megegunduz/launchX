import { store } from './Store';

export type RootState = ReturnType<typeof store.getState>
export { store };

export enum ReducerNames {
  HOME = 'home',
  SEARCH = 'search',
  ALERT = 'alert',
}