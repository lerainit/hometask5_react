import { SET_VALUE_MODAL } from "./actions";


const initialValue = {
    value: 'Are  you sure you want to add this product to cart?',
  }
  
  const modalTextReducer = (state = initialValue, action) => {
    switch (action.type) {
       
  
        case SET_VALUE_MODAL: {
          return { value: action.payload }
        }
  
        default: {
          return state;
        }
    }
  };

  export default modalTextReducer;
