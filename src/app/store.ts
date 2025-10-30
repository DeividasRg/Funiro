import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/FilterSlice";
import paginationReducer from "./slices/PaginationSlice";
import { supabaseApi } from "./slices/SupabaseApi";

export const store = configureStore({
  reducer: {
    [supabaseApi.reducerPath]: supabaseApi.reducer,
    filter: filterReducer,
    pagination: paginationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(supabaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
