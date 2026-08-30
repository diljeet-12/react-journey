import React from 'react'
import ProductCard from './components/ProductCard'

function App() {
    function handleBuy(name) {
    alert(`Product bought: ${name}`);
  }
  return (
    <div>
      {/* <ProductCard name="Laptop" price={50000} instock={true} category="Electronics" onBuy={handleBuy} />
      <ProductCard name="Phone" price={20000} instock={true} category="Electronics" onBuy={handleBuy}/> */}
      <ProductCard name="Mouse" price={1000} instock={false} category="Electronics" onBuy={handleBuy}/>
    </div>
  )
}

export default App