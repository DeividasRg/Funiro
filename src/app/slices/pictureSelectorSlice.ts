import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  images: [
    { id: 1, url: "https://picsum.photos/id/237/300/200", title: "First" },
    { id: 2, url: "https://picsum.photos/id/238/300/200", title: "Second" },
    { id: 3, url: "https://picsum.photos/id/239/300/200", title: "Third" },
  ],
};

const pictureSlice = createSlice({
  name: "pictures",
  initialState,
  reducers: {},
});

export const selectPictures = (state: RootState) => state.pictures.images;
export default pictureSlice.reducer;
