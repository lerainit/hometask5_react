const initLocalStorage = () =>{
 
    let addCardsArr =[]
   
   if(!localStorage.getItem('addCards')){
   localStorage.setItem('addCards',JSON.stringify(addCardsArr))
   }
   if(!localStorage.getItem('addFavorites')){
     localStorage.setItem('addFavorites',JSON.stringify([]))
     }}

     export default initLocalStorage