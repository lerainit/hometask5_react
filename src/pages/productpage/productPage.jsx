import React from 'react'
import Card from '../../componentns/card/productCard'
import { useSelector } from 'react-redux'
import { shallowEqual } from 'react-redux'



const ProductPage = () => {

     const products = useSelector(store => store.products.value, shallowEqual)

     return (
          <>
               {products.map(({ id, name, price, art, url, addFavorites }, index) => <Card key={index} id={id} name={name} price={price} art={art} url={url} fill={addFavorites === true ? '#FFFF00' : '#fff'} index={index} products={products} ></Card>)}

          </>
     )

}
export default ProductPage
