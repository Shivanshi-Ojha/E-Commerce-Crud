const Products = ({ elm, addToCart }) => {
  const { title, description, thumbnail, price, category } = elm;

  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100 shadow-sm">

        <div className="card-body d-flex flex-column text-center">

          <h5 className="card-title text-truncate">
            {title}
          </h5>

          <img
            src={thumbnail}
            className="product-img mx-auto"
            style={{ width: "30vh", height: "20vh", objectFit: "cover" }}
            alt={title}
          />

          <h3 className="text-secondary mt-2">
            Category: {category}
          </h3>

          <h5 className="fw-bold text-primary">$ {price}</h5>

          <p className="card-text description">
            {description}
          </p>

          {/* ✅ BUTTON AREA */}
          <div className="mt-auto d-flex justify-content-between gap-2">

            <button
              className="btn btn-outline-secondary w-100"
              onClick={() => addToCart(elm)}
            >
              🛒 Add to Cart
            </button>
             <button
              className="btn btn-outline-secondary w-100"
              onClick={() => buy(elm)}
            >
              🛒 Buy
            </button>
             
          </div>

        </div>
      </div>
    </div>
  );
};

export default Products;
