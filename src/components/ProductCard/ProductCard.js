import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import IconEdit from "./../../assets/edit.png"
import IconDelete from "./../../assets/delete.png"

function ProductCard({ item, price, quantity }) {
  const navigate = useNavigate();

  const deleteProduct = async (item) => {
    const response = await axios.delete(
      `https://store-backend-f2ej.onrender.com/products/${item}`
    );
    window.location.reload();
  };

  return (
    <div
      className="Product-card"
      onClick={(e) => {
        navigate(`/detail/${item}`);
      }}
    >
      <h3 className="Product-item">{item}</h3>
      <div>
        <span className="Product-price">Price: {price}/-</span>
        <span className="Product-quantity">Quantity: {quantity}</span>
      </div>

      <span
        onClick={(e) => {
          e.stopPropagation();
          deleteProduct(item);
        }}
      >
        <img src={IconDelete} alt="Delete" className="btn-delete"/>
      </span>

      <span
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/edit/${item}`);
        }}
      >
        <img src={IconEdit} alt="Edit"  className="btn-edit"/>
      </span>
    </div>
  );
}

export default ProductCard;
