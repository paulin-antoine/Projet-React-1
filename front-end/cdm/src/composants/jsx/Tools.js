import React from "react";
import "../style/Tools.css";
import meuleuse from "../../images/meuleuse.jpg";
import data from "../../Data.js";

function Tools() {
  return (
    <div className="row-center">
      {data.products.map((product) => (
        <div className="card">
          <a href="product.html">
            <img src={meuleuse} alt="productss"></img>
          </a>
          <div className="card-body">
            <a href="product.html">
              <h2>Meuleuse d'angle Bosh</h2>
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
              <div className="price">0€</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tools;
