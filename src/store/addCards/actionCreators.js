
import { addCart,deleteCard,clearCart } from "./actions";


export const addCartAC =  (payload) =>({type:addCart,payload})

export const deleteCardAC = (payload) => ({type:deleteCard,payload})
export const clearCartAC =() =>({type:clearCart})


