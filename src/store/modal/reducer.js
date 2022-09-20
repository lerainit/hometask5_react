import { openModal } from "./actions";
import { closeModal } from "./actions";
import {openDeleteModal,closeDeleteModal} from './actions'

const initialValue = {
    value: false,
    deleteModalvalue:false,
  }
  
  const modalReducer = (state = initialValue, action) => {
    switch (action.type) {
        case openModal: {
          return {...state, value: true}
        }
  
      
  
        case closeModal : {
          return {...state, value: false}
        }
        case openDeleteModal: {
          return {...state, deleteModalvalue: true}
        }
  
      
  
        case closeDeleteModal : {
          return { ...state,deleteModalvalue: false}
        }
  
        default: {
          return state;
        }
    }
  };

  export default modalReducer;
