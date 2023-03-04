import React, { useContext, useEffect } from 'react';
import ShopContext from '../context/shopContext';

const Shops = () => {
  const shopContext = useContext(ShopContext);
  const { coffeeShops, getCoffeeShops, loading } = shopContext;

  useEffect(() => {
    getCoffeeShops();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {coffeeShops?.map((shop) => (
        <div key={shop._id}>
          <h3>{shop.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Shops;
