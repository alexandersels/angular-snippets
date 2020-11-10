import { initialMultipleTabsState, MultipleTabsState } from './multiple-tabs.state';
import { multipleTabsActions } from './multiple-tabs.actions';
import { MultipleTabsActionTypes } from '../enums/multiple-tabs.action.types';

export function multipleTabsReducer(state: MultipleTabsState = initialMultipleTabsState, action: multipleTabsActions): MultipleTabsState {
  switch (action.type) {
    case MultipleTabsActionTypes.FETCH_GROUPS: {
      return {
        ...state,
        groups: action.groups,
      };
    }
    case MultipleTabsActionTypes.CLEAR_GROUPS: {
      return {
        ...state,
        groups: null,
      };
    }
    case MultipleTabsActionTypes.FETCH_PHONES: {
      return {
        ...state,
        phones: action.phones,
      };
    }
    case MultipleTabsActionTypes.CLEAR_PHONES: {
      return {
        ...state,
        phones: null,
      };
    }
    case MultipleTabsActionTypes.FETCH_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case MultipleTabsActionTypes.CLEAR_USERS: {
      return {
        ...state,
        users: null,
      };
    }
    default: {
      return state;
    }
  }
}
