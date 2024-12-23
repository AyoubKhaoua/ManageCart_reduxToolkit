import { useDispatch, useSelector } from "react-redux";
import { addProduit, deleteProduit } from "./redux/Reducer";
import {
  produits,
  produitsByCategory,
  produitsLength,
  produitsPriceTotal,
} from "./redux/Selectors";
import { useEffect, useState } from "react";

const App = () => {
  const [produitsStock, setProduitsStock] = useState([]);

  useEffect(() => {
    fetch("produits.json")
      .then((response) => response.json())
      .then((data) => setProduitsStock(data));
  });

  const dispatch = useDispatch();

  const allProduits = useSelector(produits);
  const produitsCount = useSelector(produitsLength);
  const produitsTotal = useSelector(produitsPriceTotal);
  const AllproduitsByCategory = useSelector(produitsByCategory("Electronics"));

  return (
    <div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantite</th>
            <th>Categorie</th>
            <th>Check</th>
          </tr>
        </thead>
        <tbody>
          {produitsStock.map((produit) => (
            <tr key={produit.id}>
              <td>{produit.id}</td>
              <td>{produit.nom}</td>
              <td>{produit.prix}</td>
              <td>{produit.quantite}</td>
              <td>{produit.categorie}</td>
              <td>
                <input
                  type="checkbox"
                  value={produit.id}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(addProduit(produit));
                    } else {
                      dispatch(deleteProduit(produit.id));
                    }
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="cart-section">Panier ({produitsCount})</h3>
      {allProduits.map((produit) => (
        <div key={produit.id} className="cart-item">
          <p>
            {produit.id} - {produit.nom} - {produit.prix} - {produit.quantite} -{" "}
            {produit.categorie}
          </p>
        </div>
      ))}

      <h4>Total: {produitsTotal} $</h4>

      <h3 className="category-section">Produits Electronics</h3>
      {AllproduitsByCategory.map((produit) => (
        <div key={produit.id} className="category-item">
          <p>
            {produit.id} - {produit.nom} - {produit.prix} - {produit.quantite} -{" "}
            {produit.categorie}
          </p>
        </div>
      ))}
    </div>
  );
};
export default App;
