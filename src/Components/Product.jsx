import React, { useState, useEffect } from 'react';
import Card from './Card';

const Product = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div style={{ marginTop: '75px' }} className='d-flex flex-wrap gap-3 mt-6'> {/* Adjust margin as needed */}
        {
          products.map((product) => (
            <Card key={product.id} product={product} /> 
          ))
        }
      </div>
    </>
  );
}

export default Product;
