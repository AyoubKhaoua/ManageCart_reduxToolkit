import { createSelector } from "@reduxjs/toolkit";

export const produits = (state) => state.produits.produits || [];

export const produitsLength = createSelector(produits, (produits) => {
  return produits.length;
});

export const produitsPriceTotal = createSelector(produits, (produits) => {
  return produits.reduce((total, produit) => total + produit.prix, 0);
});

export const produitsByCategory = (category) => {
  return createSelector(produits, (produits) => {
    return produits.filter((produit) => produit.categorie === category);
  });
};
