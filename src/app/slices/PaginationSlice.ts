import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TShortProduct } from "@/utils/schema";

type PaginationState = {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  startIndex: number;
  paginatedData: TShortProduct[];
};

const initialState: PaginationState = {
  currentPage: 1,
  pageSize: 8,
  totalPages: 1,
  startIndex: 0,
  paginatedData: [],
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    updatePagination: (
      state,
      action: PayloadAction<{ data: TShortProduct[] }>
    ) => {
      const { data } = action.payload;
      state.totalPages = Math.ceil(data.length / state.pageSize);
      state.startIndex = (state.currentPage - 1) * state.pageSize;
      state.paginatedData = data.slice(
        state.startIndex,
        state.startIndex + state.pageSize
      );
    },
    resetPagination: (state) => {
      state.currentPage = 1;
      state.startIndex = 0;
    },
  },
});

export const {
  setCurrentPage,
  setPageSize,
  updatePagination,
  resetPagination,
} = paginationSlice.actions;
export const selectPaginationState = (state: RootState) => state.pagination;
export default paginationSlice.reducer;
