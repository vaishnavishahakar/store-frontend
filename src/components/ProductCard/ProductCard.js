import React from 'react';
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function ProductCard({item, price, quantity}) {
  const navigate = useNavigate();

  const deleteProduct = async(item)=>{
    const response =  await axios.delete(`https://store-backend-f2ej.onrender.com/products/${item}`);
    window.location.reload();
  }

  return (
      <div className='Product-card' onClick={(e)=>{
        navigate(`/detail/${item}`);
      }}> 

        <h3 className='Product-item'>{item}</h3>
        <div>
          <span className='Product-price'>Price: {price}/-</span>
          <span className='Product-quantity'>Quantity: {quantity}</span>
        </div>

        <span className='btn-delete' 
          onClick={(e) => {
          e.stopPropagation();
          deleteProduct(item);
          }}
          >
            Delete
        </span>

        <span className='btn-edit' 
          onClick={(e) => {
          e.stopPropagation();
          navigate(`/edit/${item}`);
          }}
          >
            Edit
        </span>
      </div>
  );
}

export default ProductCard;
