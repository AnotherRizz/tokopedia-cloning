import React from 'react'
import Input from './Input'
import Label from './Label'

const InputForm = (props) => {
   const {label,name,type,placeholder,variant}=props;
  return (
    <div className={`mb-6 w-full `}>
      <Label htmlfor={name} variant={variant}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder}/>
    </div>
  )
}

export default InputForm;
