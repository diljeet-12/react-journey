// import React from 'react'

// function ProductCard(props) {
//   return (
//     <div>
//       {prroducts.map((product)=>{
//           return(
//             <h1 key={product.id}>
//               {product.name}-{product.price}
//             </h1>
//           )
//       })}
//     </div>
//   )
// }

// export default ProductCard

// import React from 'react'

// function ProductCard({ name, price,category, instock }) {
//   return (
//     <div>
//       <h1>
//         {name} {price} {category} {instock ? "In Stock" : "Out of Stock"}
//       </h1>
      
//     </div>  

//   )
// }

// export default ProductCard

import React from 'react'

function ProductCard({ onBuy ,name}) {
  
  return (
    <div>
      <button onClick={() => onBuy(name)}>
      Buy Now
    </button>
    </div>
  )
}

export default ProductCard
