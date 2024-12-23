import { createSlice } from "@reduxjs/toolkit";

export const produitSlice = createSlice({
  name: "produits",
  initialState: {
    produits: [],
  },
  reducers: {
    addProduit: (state, action) => {
      state.produits.push(action.payload);
    },
    deleteProduit: (state, action) => {
      state.produits = state.produits.filter(
        (produit) => produit.id !== action.payload
      );
    },
  },
});

export const { addProduit, deleteProduit } = produitSlice.actions;

export default produitSlice.reducer;
