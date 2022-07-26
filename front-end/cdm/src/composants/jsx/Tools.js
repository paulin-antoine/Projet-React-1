import React from "react";
import "../style/ProductsList.css";
import data from "../../data/Tools.js";

function Tools() {
  return (
    <div className="row-center">
      {data.products.map((product) => (
        <div key={product._id} className="card">
          <a href={`/outils/${product._id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="img-product"
            ></img>
          </a>
          <div className="card-body">
            <a href="product.html">
              <h2 className="product-title">{product.name}</h2>
            </a>
            <div className="price">{product.price.toFixed(2)} €</div>
            <div className="rating">
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star fa-1x"></i>
              </span>
              <span>
                <i className="fa fa-star fa-1x"></i>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tools;
