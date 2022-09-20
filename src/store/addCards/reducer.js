import { addCart,deleteCard ,clearCart} from "./actions";



const initialValue = {
    value:JSON.parse(localStorage.getItem('addCards')),
  }
  
  const CartReducer = (state = initialValue, action) => {

  switch (action.type) {
       
  
        case addCart: {

          let addCardsArr = state.value
          addCardsArr.push(action.payload.products[action.payload.index]) 
          
          localStorage.setItem('addCards', JSON.stringify(addCardsArr))
          
          addCardsArr=JSON.parse(localStorage.getItem('addCards'))
                    return { value:addCardsArr}
       
        }

        
        case deleteCard:{

          let addCardsArr = state.value
          let newAddCardsArr = addCardsArr.filter((el, index) => action.payload.index !== index)

          localStorage.setItem('addCards', JSON.stringify(newAddCardsArr))
          addCardsArr=JSON.parse(localStorage.getItem('addCards'))
          return { value:addCardsArr}

        }
        case clearCart:{
          localStorage.setItem('addCards',JSON.stringify([]))
        return{ value:[]}
        }

      default: {
          return state;
        }
    }

  };

  export default CartReducer;