import React from 'react'
import ProductCard from './components/ProductCard'

function App() {
    function handleDelete(id) {
    alert(`Deleted Product: ${id}`);
  }
  return (
    <div>
      {/* <ProductCard name="Laptop" price={50000} instock={true} category="Electronics" onBuy={handleBuy} />
      <ProductCard name="Phone" price={20000} instock={true} category="Electronics" onBuy={handleBuy}/> */}
      {/* <ProductCard name="Mouse" price={1000} instock={false} category="Electronics" onDelete={handleDelete} id={5}/> */}
      <ProductCard name="Mouse" onDelete={handleDelete} id={5}/>
      <ProductCard name="phone" onDelete={handleDelete} id={10}/>
    </div>
  )
}

export default App