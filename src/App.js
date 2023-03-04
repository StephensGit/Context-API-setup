import React from 'react';
import ShopState from './context/ShopState';
import Shops from './components/Shops';

const App = () => {
  return (
    <ShopState>
      <div>
        <h1>Context API template</h1>
        <Shops />
      </div>
    </ShopState>
  );
};

export default App;
