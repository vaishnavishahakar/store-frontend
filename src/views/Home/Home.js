import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import "./Home.css";
import IconAddItem from "./../../assets/add-product.png"
import { Link } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);


  const loadProducts = async() => {
    const response = await axios.get("http://localhost:5001/products");
    setProducts(response.data.data);
  };

  useEffect(()=>{
    loadProducts()
  }, []);

  return (
    <div>
      <h1 className='app-heading'>Grocery Store</h1>

    <div className='product-container'>
      {
        products.map((product, i)=>{
          const { item, price, quantity} = product;
          return <ProductCard key={i} item={item} price={price} quantity={quantity}/>
        })
      }
      </div>

      {
        products.length === 0 && <h2 className='error-message'>No Products Found</h2>
      }

      <Link to="/add">
        <img src={IconAddItem} className='icon-add-item'/>
      </Link>
    </div>
  );
}

export default App;
