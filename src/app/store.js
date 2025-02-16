import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/themeSlice";
import numberSlice from "../features/numberSlice";

export default configureStore({
  reducer: {
    theme: themeSlice,
    number: numberSlice,
  },
});
