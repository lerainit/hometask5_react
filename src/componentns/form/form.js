import React,{useEffect} from "react";
import { Field, Formik ,FormikProps,Form,ErrorMessage} from "formik";
import { useDispatch } from "react-redux";
import { clearCartAC } from "../../store/addCards/actionCreators"; 
import CustomInput from "./custominput";
import * as yup from 'yup'
import './form.scss'

const CheckoutForm = () =>{
  const dispatch = useDispatch()
  
let initialValues = {
  name:'' ,
  surname:'',
  age:'',
  adress:'',
  tel:'+38'
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
age:yup.number()
.integer('Age must be integer')
.positive('Age must be positive')
.required('Age is required'),
adress:yup.string()
.required('Adress is required'),
tel:yup.number()
.required('Number is required')
.min(7,'Min 7 digits')

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
{ ({dirty,isValid}) =>{




  return(
<Form>

<Field
type='text'
name ='name'
placeholder = 'Name'

/>
<ErrorMessage name="name">{msg => <span className='error'>{msg}</span>}</ErrorMessage>


<CustomInput name='surname' type='text' placeholder='Surname' />



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
<ErrorMessage name="adress">{msg => <span className='error'>{msg}</span>}</ErrorMessage>
<Field
type='text'
name ='tel'
placeholder = 'Tel'
/>
<ErrorMessage name="tel">{msg => <span className='error'>{msg}</span>}</ErrorMessage>
<button disabled={!dirty  || !isValid}  type="submit">Submit</button>

</Form>

)
}
}
</Formik>
)

}
export default CheckoutForm

