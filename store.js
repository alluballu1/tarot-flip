import { useMemo } from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ThunkMiddleware from "redux-thunk";
import tarotReducer from "./reducers/tarotReducer";

let store;

const combined = combineReducers({
  tarot: tarotReducer,
});

function initStore(initialState) {
  return createStore(
    combined,
    initialState,
    composeWithDevTools(applyMiddleware(ThunkMiddleware))
  );
}

export const initializeStore = (preloadState) => {
  let _store = store ?? initStore(preloadState);

  if (preloadState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadState,
    });

    store = undefined;
  }
  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
