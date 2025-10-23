import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type FilterState = {
  showExtra: boolean;
  showDiscountedOnly: boolean;
  sort: "asc" | "desc" | "default";
  customFilter: string;
};

const initialState: FilterState = {
  showExtra: false,
  showDiscountedOnly: false,
  sort: "default",
  customFilter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleShowExtra(state) {
      state.showExtra = !state.showExtra;
    },
    setShowDiscountedOnly(state) {
      state.showDiscountedOnly = !state.showDiscountedOnly;
    },
    setNewSort(state, action: PayloadAction<"asc" | "desc" | "default">) {
      state.sort = action.payload;
    },
    addKeywordToCustomFilter(state, action: PayloadAction<string>) {
      if (state.customFilter === "") {
        state.customFilter = action.payload;
      }
    },
    removeKeywordFromCustomFilter(state) {
      state.customFilter = "";
    },
  },
});

export const {
  toggleShowExtra,
  setShowDiscountedOnly,
  setNewSort,
  addKeywordToCustomFilter,
  removeKeywordFromCustomFilter,
} = filterSlice.actions;
export const selectFilterState = (state: RootState) => state.filter;
export default filterSlice.reducer;
