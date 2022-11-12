import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  slides: [],
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImagesSlides: (state, action) => {
      state.slides.push(action.payload.slides);
    },
    removeImagesSlides: (state, _action) => {
      state.slides = [];
    },
  },
});

export const { setImagesSlides, removeImagesSlides } = imagesSlice.actions;
export default imagesSlice.reducer;
