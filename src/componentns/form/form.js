import React,{useEffect} from "react";
import { Field, Formik ,FormikProps,Form,ErrorMessage} from "formik";
import { useDispatch } from "react-redux";
import { clearCartAC } from "../../store/addCards/actionCreators"; 
import * as yup from 'yup'
import './form.scss'
if(!localStorage.getItem('values')){
  localStorage.setItem('values',JSON.stringify({}))
}

const CheckoutForm = () =>{
  const dispatch = useDispatch()
  
let initialValues = {
  name:'' ,
  surname:'',
  age:'',
  adress:'',
  tel:'+38'
}
window.onload=()=>{
  let reload = true
  localStorage.setItem('reload',JSON.stringify(reload))
  
}

if(JSON.parse(localStorage.getItem('reload')) ){
 initialValues = JSON.parse(localStorage.getItem('values'))
}


const validationSchema = yup.object().shape({
name:yup.string()
.min(3, 'Min 3 symbols')
.max(12,'Max 12 symbols')
.required('Name is required'),
surname:yup.string()
.min(3, 'Min 3 symbols')
.max(12,'Max 12 symbols')
.required('Surname is required'),
age:yup.number('age must be number')
.required('Age is required')
})

return(

<Formik
initialValues ={initialValues}

validationSchema ={validationSchema}
onSubmit = {(values,FormikProps) =>{
    console.log(values)
    console.log(FormikProps)
  
    console.log(JSON.parse(localStorage.getItem('addCards')))
  dispatch(clearCartAC())
}}

>
{ ({dirty,isValid,values}) =>{


if(JSON.parse(localStorage.getItem('reload'))){

  localStorage.setItem('values',JSON.stringify(values))


}
let Values = JSON.parse(localStorage.getItem('values'))
let include = Values
  return(
<Form>

<Field
type='text'
name ='name'
placeholder = 'Name'

/>
<ErrorMessage name="name">{msg => <span className='error'>{msg}</span>}</ErrorMessage>
<Field
type='text'
name ='surname'
placeholder = 'Surname'

/>
<ErrorMessage name="surname">{msg => <span className='error'>{msg}</span>}</ErrorMessage>
<Field
type='text'
name ='age'
placeholder = 'Age'

/>
<ErrorMessage name="age">{msg => <span className='error'>{msg}</span>}</ErrorMessage>
<Field
type='text'
name ='adress'
placeholder = 'Adress'
/>

<Field
type='text'
name ='tel'
placeholder = 'Tel'
/>

<button disabled={!dirty && !localStorage.getItem('values') && JSON.parse(localStorage.getItem('values')).includes('') || !isValid}  type="submit">Submit</button>

</Form>





)
}
}
</Formik>
)

}
export default CheckoutForm