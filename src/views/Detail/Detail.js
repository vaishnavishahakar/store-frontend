import React, { useEffect, useState } from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const [product, setProduct] = useState()

  const { item } = useParams();

  const loadProductDetail = async (item) => {
    const response = await axios.get(`http://localhost:5001/products/${item}`);
    setProduct(response.data.data);
  };

  useEffect(() => {
    loadProductDetail(item);
  }, [item]);

  return (
    <div>
      <h1 className="header">Product Details</h1>
      <div className="product-detail-card">
        <h3>Item: {product?.item}</h3>
        <h4>Price: {product?.price}/-</h4>
        <h4>Qauntity: {product?.quantity}</h4>
      </div>
     
    </div>
  );
}

export default Detail;
