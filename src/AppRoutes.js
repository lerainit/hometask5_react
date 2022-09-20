import React from 'react'
import {Routes, Route} from 'react-router-dom'
import FavoritesPage from './pages/favoritespage/favorites';
import CartPage from './pages/cart/cart';
import ProductPage from './pages/productpage/productPage';
import NotFoundPage from './pages/notfoundpage/notfoundpage';

const AppRoutes = () => {
    return (
     
        <Routes>
            <Route path='/' element={   <ProductPage  /> } />
           <Route path='/favorites' element={<FavoritesPage />} />
         
           <Route path='/cart' element={<CartPage />}/>
           <Route path='*' element={<NotFoundPage />} />
         </Routes>

        
    )
}
export default AppRoutes;
