import {
  CommonActionTypes,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  HIDE_MESSAGE,
  SHOW_MESSAGE,
  TOGGLE_APP_DRAWER,
} from "../types/actions/Common.actions";
import { create } from "zustand";

const initialCommon: {
  error: string;
  loading: boolean;
  isAppDrawerOpen: boolean;
  updatingContent: boolean;
  message: string;
} = {
  error: "",
  loading: false,
  isAppDrawerOpen: false,
  updatingContent: false,
  message: "",
};

const CommonReducers = (state = initialCommon, action: CommonActionTypes) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        error: "",
        message: "",
        loading: true,
      };
    case FETCH_SUCCESS: {
      return {
        ...state,
        error: "",
        message: "",
        loading: false,
        updatingContent: false,
      };
    }
    case SHOW_MESSAGE: {
      return {
        ...state,
        error: "",
        message: action.message,
        loading: false,
        updatingContent: false,
      };
    }
    case FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
        message: "",
        updatingContent: false,
      };
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
        loading: false,
        error: "",
        message: "",
        updatingContent: false,
      };
    }
    case TOGGLE_APP_DRAWER: {
      return {
        ...state,
        isAppDrawerOpen: !state.isAppDrawerOpen,
      };
    }
    default:
      return state;
  }
};

interface ICommonStore {
  error: string;
  loading: boolean;
  isAppDrawerOpen: boolean;
  updatingContent: boolean;
  message: string;
  fetchStart: () => void;
  fetchSuccess: () => void;
  fetchError: (error: string) => void;
  showMessage: (message: string) => void;
  hideMessage: () => void;
  onToggleAppDrawer: () => void;
}

const useCommonStore = create<ICommonStore>((set) => ({
  ...initialCommon,
  fetchStart: () =>
    set((state) => CommonReducers(state, { type: FETCH_START })),
  fetchSuccess: () =>
    set((state) => CommonReducers(state, { type: FETCH_SUCCESS })),
  fetchError: (args) =>
    set((state) => CommonReducers(state, { type: FETCH_ERROR, error: args })),
  showMessage: (args) =>
    set((state) =>
      CommonReducers(state, { type: SHOW_MESSAGE, message: args })
    ),
  hideMessage: () =>
    set((state) => CommonReducers(state, { type: HIDE_MESSAGE })),
  onToggleAppDrawer: () =>
    set((state) => CommonReducers(state, { type: TOGGLE_APP_DRAWER })),
}));

export default useCommonStore;
