import React, { useState, useEffect } from "react";
import View from "./View";
import axios from "axios";

const All = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://okukus.com/api_call/get_books.php");
      setProducts(result.data);
    };
    fetchData();
  }, []);

  let content = products.map(
    ({ unique_id, unit_price, product_name, cover_photo_url }) => (
      <View
        key={unique_id}
        id={unique_id}
        unit_price={unit_price}
        cover_photo_url={cover_photo_url}
        product_name={product_name}
      />
    )
  );

  let view;

  if (content.length === 0) {
    view = <div>Loading.....</div>;
  } else {
    view = <> {content}</>;
  }

  return (
    <div className="p-1 body-background">
      <div>{view}</div>
    </div>
  );
};

export default All;