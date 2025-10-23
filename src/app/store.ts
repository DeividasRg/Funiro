import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/FilterSlice";
import paginationReducer from "./slices/PaginationSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    pagination: paginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
