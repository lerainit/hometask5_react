import React from 'react'
import FavItem from '../../componentns/favitem/FavItem'
import { useSelector } from 'react-redux'
import { shallowEqual } from 'react-redux'

const FavoritesPage = () =>{
    const addFavorites = useSelector(store =>store.addFavorites.value,shallowEqual)
    if(addFavorites.length === 0){
        return(<>
       <h1>No items have been added</h1> 
        </>)
    }
    else{
return(
  
 <>

{addFavorites.map(({id,name,price,art,url},index) =><FavItem key={id}  id ={id}  name= {name} price ={price} fill={ '#FFFF00'}  art ={art} url={url} ></FavItem>)}

</>   
    
)
    }

}

export default FavoritesPage