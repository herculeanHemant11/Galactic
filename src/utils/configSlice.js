import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
    themeMode: "light",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
    setThemeMode: (state, action) => {
      state.themeMode = action.payload;
    },
  },
});

export const { changeLanguage, setThemeMode } = configSlice.actions;
export default configSlice.reducer;
