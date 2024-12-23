import { configureStore } from "@reduxjs/toolkit";
import ProduitsSlice from "../redux/Reducer";

export const store = configureStore({
  reducer: {
    produits: ProduitsSlice,
  },
});

export default store;
