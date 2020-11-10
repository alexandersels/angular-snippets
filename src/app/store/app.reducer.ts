import { MultipleTabsState } from '../multiple-tabs/store/multiple-tabs.state';
import { ActionReducerMap } from '@ngrx/store';
import { multipleTabsReducer } from '../multiple-tabs/store/multiple-tabs.reducers';

export interface AppState {
  multipleTabs: MultipleTabsState;
}

export const appReducer: ActionReducerMap<AppState> = {
  multipleTabs: multipleTabsReducer,
};
