

import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ShopCard from '../components/ShopCard';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const ShopList =() => {
  
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
    const response = await axios.get("https://foodfellow.onrender.com/main/shops");
    console.log(response.data.shopsList);
    setShops(response.data.shopsList);
    }
    fetchShops();
  }, []);

    return (
        <>
        <Header />
      <div className="mx-auto px-10 py-8 bg-red-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {shops.map((shop, index) => (
            <Link to={"/shop/"+shop._id} key={index}>
              <ShopCard key={index} {...shop} />
            </Link>
          ))}
        </div>
      </div>
      </>
    );
  };
  
  export default ShopList;