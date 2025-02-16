import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/themeSlice";
import numberSlice from "../features/numberSlice";
import modalCartSlice from "../features/modalCartSlice";

export default configureStore({
  reducer: {
    theme: themeSlice,
    number: numberSlice,
    isShowModalCart: modalCartSlice,
  },
});
