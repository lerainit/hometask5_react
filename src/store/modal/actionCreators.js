import {openModal,closeModal,openDeleteModal,closeDeleteModal} from './actions'

export const openModalAC = ()=>({type:openModal})
export const closeModalAC =() =>({type:closeModal})
export const openDeleteModalAC =() =>({type:openDeleteModal})
export const closeDeleteModalAC = () =>({type:closeDeleteModal})