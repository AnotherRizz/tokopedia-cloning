const Input =(props)=>{
  const {type,placeholder,name} =props;
return(
  <input
  type={type}
  className=" text-sm rounded-lg border w-full py-3 px-2 placeholder:opacity-50"
  placeholder={placeholder}
  name={name}
  id={name}
  />
  
)
}

export default Input;