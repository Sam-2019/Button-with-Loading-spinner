import React from "react";

const View = ({ product_name, unit_price }) => {
  return (
    <div className=" product">
      <div className=" text-center"></div>

      <div className="product-name">{product_name}</div>

      <div className="buy_button">
        <button className="price">₵{unit_price}</button>
      </div>
    </div>
  );
};

export default View;
