import React from 'react'

const Card = (props) => {
   const {children ,key ,variant,img} = props
  return (
    <div className={` border ${variant} `} key={key}>
      <img src={img} alt="" className='w-full' />
      {children}
    </div>
  )
}

export default Card
