import React from "react";
import Products from "./Products";
import { data } from "./ProductsData";
import { useOutletContext } from "react-router-dom";

const ProductsContainer = () => {

  const { searchValue } = useOutletContext();

  const filteredProducts = data.filter((elm) =>
    elm.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="container mt-3">
      <div className="row">

        {filteredProducts.length === 0 ? (
          <h4 className="text-center">No products found</h4>
        ) : (
          filteredProducts.map((elm) => (
            <Products key={elm.id} elm={elm} />
          ))
        )}

      </div>
    </div>
  );
};

export default ProductsContainer;
