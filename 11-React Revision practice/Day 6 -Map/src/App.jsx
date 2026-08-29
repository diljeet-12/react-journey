// import React from 'react'

// function App() {
//   const products = [
//     { id: 1, name: "Laptop", price: 50000, inStock: true },
//     { id: 2, name: "Phone", price: 20000, inStock: false },
//     { id: 3, name: "Mouse", price: 1000, inStock: true }
//   ];


//   return (
//     <div>
//       {products.map((product) => {
//         return (
//           <h2 key={product.id}>
//             {product.name} - {product.price}
//             <br />
//             {product.inStock ? "✅ In Stock" : "❌ Out of Stock"}
//             <br />
//             <button
//               className='border border-black'
//               onClick={() => {
//                 if (product.inStock) {
//                   alert(`You selected ${product.name}`);
//                 }
//               }}
              
//             >
//               {product.inStock ? "Buy Now" : "Not Available"}
//             </button>
//           </h2>
//         )
//       })}
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'


function App() {
  const products = [
    { id: 1, name: "Laptop", price: 50000, inStock: true },
    { id: 2, name: "Phone", price: 20000, inStock: false },
    { id: 3, name: "Mouse", price: 1000, inStock: true }
  ];
    const [selectedProduct, setSelectedProduct] = useState("");

  return (
    <div>
      {products.map((product) => {
        return (
          <h2 key={product.id}>
            {product.name} - {product.price}
            <br />
            {product.inStock ? "✅ In Stock" : "❌ Out of Stock"}
            <br />
            <button
              className='border border-black'
              onClick={() => {
                if (product.inStock) {
                  setSelectedProduct(product.name)
                }
                
              }}
            >
              {product.inStock ? "Buy Now" : "Not Available"}
            </button>
          </h2>
          
        )
      })}
    <h2>
    {selectedProduct? `Selected: ${selectedProduct}`  : "No product selected"}
    </h2>
    </div>
  )
}

export default App

  