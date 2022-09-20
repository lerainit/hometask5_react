import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../../componentns/cartitem/cartItem'
import { shallowEqual } from 'react-redux'
import CheckoutForm from '../../componentns/form/form'



const CartPage = () =>{

    const addCart = useSelector(store =>store.Cart.value,shallowEqual)
    if(addCart.length === 0 ){
        return(<>
   
        
         <h1>No items have been added</h1></>)
    }
    else{
return(

<>
   <CheckoutForm/>
{addCart.map(({id,name,price,art,url},index) =><CartItem key={index}  id ={id}  name= {name} price ={price} art ={art} url={url}  index={index}  ></CartItem>)}

</>

)
    }
}
export default CartPage


