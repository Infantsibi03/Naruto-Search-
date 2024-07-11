import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResult: null,
  searchNaruto: "",
  searchClicked: false,
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setSearchResult(state, action) {
      state.searchResult = action.payload;
    },
    setSearchNaruto(state, action) {
      state.searchNaruto = action.payload;
    },
    setSearchClicked(state, action) {
      state.searchClicked = action.payload;
    },
  },
});

export const { setSearchResult, setSearchNaruto, setSearchClicked } =
  characterSlice.actions;

export default characterSlice.reducer;
