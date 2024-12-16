import React, { useState, useEffect } from "react";
import "./Update.css";
import IconHome from "./../../assets/home.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Add() {
  const [product, setProduct] = useState({
    item: "",
    price: "",
    quantity: "",
  });

  const { item } = useParams();

  const loadProductDetail = async (item) => {
    const response = await axios.get(`http://localhost:5001/products/${item}`);
    setProduct(response.data.data);
  };

  useEffect(() => {
    loadProductDetail(item);
  }, [item]);

  const updateItem = async () => {
    try {
      const response = await axios.patch(`http://localhost:5001/products/${item}`, {
        quantity: product.quantity,
      });

      toast.success(response?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <h1 className="header">Update Item</h1>

      <div className="product-list">
        <input
          type="text"
          placeholder="Item"
          className="item-input"
          value={product.item}
          onChange={(e) => setProduct({
            ...product,
            item: e.target.value
          })}
          disabled
        />
        <input
          type="text"
          placeholder="Price"
          className="item-input"
          value={product.price}
          onChange={(e) => setProduct({
            ...product,
            price: e.target.value
          })}
          disabled
        />
        <input
          type="text"
          placeholder="Quantity"
          className="item-input"
          value={product.quantity}
          onChange={(e) => setProduct({
            ...product,
            quantity: e.target.value
          })}
        />
      </div>
      <button
        type="button"
        className="btn-add-item"
        onClick={() => {
          updateItem();
        }}
      >
        Update Item
      </button>

      <Link to="/">
        <img src={IconHome} alt="Home" className="home-icon" />
      </Link>

      <Toaster/>
    </div>
  );
}

export default Add;
