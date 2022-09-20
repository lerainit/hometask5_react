import { addFavorites } from "./actions";


const initialValue = {
    value:JSON.parse(localStorage.getItem('addFavorites')),
  }
  
  const addFavoritesReducer = (state = initialValue, action) => {

 switch (action.type) {
       
   case addFavorites: {

            let addFavoritesArr = state.value

if (action.payload.products[action.payload.index].addFavorites === false) {
    action.payload.products[action.payload.index].addFavorites = true
    addFavoritesArr.push(action.payload.products[action.payload.index])

    localStorage.setItem('products', JSON.stringify(action.payload.products))
    localStorage.setItem('addFavorites', JSON.stringify(addFavoritesArr))

  } else {
  
    action.payload.products[action.payload.index].addFavorites = false
    let newAddFavoritesArr = addFavoritesArr.filter(({id}) => id !== action.payload.id)
 
    localStorage.setItem('products', JSON.stringify(action.payload.products))
    localStorage.setItem('addFavorites', JSON.stringify(newAddFavoritesArr))

  }
   addFavoritesArr =JSON.parse(localStorage.getItem('addFavorites'))
          return { value:addFavoritesArr}
        }
  
        default: {
          return state;
        }
    }
  };

  export default addFavoritesReducer;