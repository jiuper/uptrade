import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootReducer } from "./store";

export const useHookDispatch = () => useDispatch<AppDispatch>();
export const useHookSelector: TypedUseSelectorHook<RootReducer> = useSelector;
