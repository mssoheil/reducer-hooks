
import * as React from "react";
import { initialState, Action } from "./index.reducer";

// context creation
export const MapStateContext = React.createContext(initialState);
export const MapDispatchContext = React.createContext((() => {}) as React.Dispatch<Action>);
// context usage
export const useGlobalState = () => React.useContext(MapStateContext);
export const useGlobalDispatch = () => React.useContext(MapDispatchContext);