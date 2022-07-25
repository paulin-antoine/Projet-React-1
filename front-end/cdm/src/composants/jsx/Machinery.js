import React from "react";
import "../style/ProductsList.css";
import data from "../../data/Machinery.js";

function Machinery() {
  return (
    <div className="row-center">
      {data.products.map((product) => (
        <div key={product._id} className="card">
          <a href={`/machines/${product._id}`}>
            <img src={product.image} alt={product.name}></img>
          </a>
          <div className="card-body">
            <a href="product.html">
              <h2>{product.name}</h2>
            </a>
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
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <div className="price">{product.price.toFixed(2)} €</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Machinery;
