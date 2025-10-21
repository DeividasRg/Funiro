import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type FilterState = {
  showExtra: boolean;
  showDiscountedOnly: boolean;
};

const initialState: FilterState = {
  showExtra: false,
  showDiscountedOnly: false,
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
  },
});

export const { toggleShowExtra, setShowDiscountedOnly } = filterSlice.actions;
export const selectFilterState = (state: RootState) => state.filter;
export default filterSlice.reducer;
