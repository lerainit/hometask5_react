import { setProducts } from "./actions";

const initialValue = {
    value:[],
}


const productsReducer = (state = initialValue,action) =>{

switch (action.type){


case setProducts: {
return {value:JSON.parse(localStorage.getItem('products'))}
}
default:{
    return state
}


}


}

export default productsReducer