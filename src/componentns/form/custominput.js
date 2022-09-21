import { useField } from "formik"
import React from "react";

const CustomInput = (props) => {
    const [field, meta] = useField(props);
    const {type, placeholder} = props;
    return(
        <>
            <input
            type={type}
            placeholder={placeholder}
            {...field}
            />
            {!!meta.error && meta.touched && <span className="error">{meta.error}</span>}
        </>
    )

}

export default CustomInput;
