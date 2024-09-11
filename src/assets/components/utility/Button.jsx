

const Button = (props) => {
   const {children , variant,type} = props;
  return (
    <div>
      <button className={`${variant}`} type={type}>
          {children}
        </button>
    </div>
  )
}

export default Button;
