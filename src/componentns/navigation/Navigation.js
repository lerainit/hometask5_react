import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'
import { useSelector } from 'react-redux'
import BackButton from '../backbutton/backbutton'


const Navigation = () => {
    const addCart = useSelector(store => store.Cart.value)
    const addFavorites = useSelector(store => store.addFavorites.value)
    const addCartLength = addCart.length
    const addFavoritesLength = addFavorites.length
    return (
        <header className={styles.header}>
            <NavLink className={styles.logo} to='/' ><h2 >Fashion store</h2 ></NavLink><BackButton/>
            <div className={styles.container}><NavLink className={styles.cart_link} to="/cart"><img className={styles.cart} src="https://toppng.com/uploads/preview/shopping-cart-11530997216xsrc2jr32q.png" alt="cart" /><h2> CART:{addCartLength}</h2></NavLink>
                <NavLink className={styles.fav_link} to="/favorites"><img className={styles.favorite_img} src="./star.png" alt="" /> <h2>FAVORITES:{addFavoritesLength}</h2></NavLink>


            </div></header>)
}
export default Navigation