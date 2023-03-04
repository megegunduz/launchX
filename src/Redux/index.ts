import { store } from './Store';

export type RootState = ReturnType<typeof store.getState>
export { store };
