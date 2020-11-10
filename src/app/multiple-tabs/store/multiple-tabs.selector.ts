import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MultipleTabsState } from './multiple-tabs.state';

export const multipleTabsIdentifier = 'multipleTabs';

const multipleTabsState = createFeatureSelector<MultipleTabsState>(multipleTabsIdentifier);

export const multipleTabsSelector = {
  groups: createSelector(multipleTabsState, (status: MultipleTabsState) => status.groups),
  phones: createSelector(multipleTabsState, (status: MultipleTabsState) => status.phones),
  users: createSelector(multipleTabsState, (status: MultipleTabsState) => status.users),
};
