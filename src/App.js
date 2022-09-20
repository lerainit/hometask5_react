
import './App.scss';
import React, { useEffect} from 'react'
import Modal from './componentns/modal/modal'
import DeleteModal from './componentns/modal/deletemodal';
import Navigation from './componentns/navigation/Navigation';
import AppRoutes from './AppRoutes';
import initLocalStorage from './initLocalStorage';
import {useSelector} from 'react-redux'
import{useDispatch} from 'react-redux'
import { setProductsAC } from './store/products/actionCreator';
import CheckoutForm from './componentns/form/form'


initLocalStorage()


const App = () => {
  const dispatch = useDispatch()
  const modal = useSelector(store =>store.modal.value)
  const deleteModal = useSelector(store => store.modal.deleteModalvalue)
 

  useEffect(() => {

 dispatch(setProductsAC())

    
  }, [])


return (
    <>
  
   <div className='App'>

        <Navigation />

        <AppRoutes  />

      </div>
 { modal &&
       <Modal ></Modal >}
     { deleteModal &&
        <DeleteModal  ></DeleteModal >}
    </>
  );
}


export default App

