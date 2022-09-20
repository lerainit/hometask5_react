
import React from 'react'
import styles from './modal.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addCartAC } from '../../store/addCards/actionCreators'
import { closeModalAC } from '../../store/modal/actionCreators'




const Modal = () => {

  const dispatch = useDispatch()

  const modalText = useSelector(store => store.modalText.value);
  const index = useSelector(store => store.cardIndex.value)

  const products = useSelector(store => store.products.value)

  return (


    <div className={styles.modal}>
      <div className={styles.outer_container} onClick={() => { dispatch(closeModalAC()) }}></div>
      <div className={styles.modal_main_container} >

        <button className={styles.close_btn} onClick={() => { dispatch(closeModalAC()) }}>X</button>

        <p>{modalText}</p>
        <button className={styles.modal_btn} onClick={() => {
          dispatch(addCartAC({ index: index, products: products }))
          dispatch(closeModalAC())
        }} >Add to cart</button>
      </div>
    </div>



  )

}


export default Modal