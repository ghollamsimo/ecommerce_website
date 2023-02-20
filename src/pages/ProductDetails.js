import React, {useContext} from 'react';
// useparams
import { useParams } from 'react-router-dom';
// cart context
import {CartContext} from'../contexts/CartContext'
// produtc context
import {PorductContext, ProductContext} from'../contexts/ProductContext'
import '../index.css'

const ProductDetails = () => {
  const {id} =useParams()
  const {products} = useContext(ProductContext)
  const {addToCart} = useContext(CartContext)

  const product = products.find((item) => {
    return item.id === parseInt(id)
  })

  // if product not found 
  if (!product) {
    return <section className='h-screen flex justify-center items-center'>Loading...</section>
  }


  const {title , price, description,image } = product
  return <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
    <div className='container mx-auto'>
      {/* image text wrapper */}
      <div className='flex flex-col lg:flex-row items-center'>
         {/* image */}
         <div className='flex flex-col justify-center items-center mb-4 '>
          <img className='max-w-[180px] lg:max-w-sm' src={image} alt="" />
         </div>
         {/* text */}
         <div className='flex-1 text-center lg:text-left mb-20'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
            <div className='text-xl  text-red-500 font-medium mb-6'>${price}</div>
            
              <p className='mb-8'>{description}</p>
              <button onClick={() => addToCart(product, product.id)} className='btn41-43 btn-41 py-4 px-8 '>Add to Cart</button>
            
         </div>
      </div>

    </div>
  </section>;
};

export default ProductDetails;
