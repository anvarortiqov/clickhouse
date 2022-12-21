import React from 'react'

function FormC({type, name, plName}) {
  return (
    <div className="form__item">
        <label className='p__14 gray__800' htmlFor={type}>{name}</label>
        <input className='p__14 gray__600' type={type}  placeholder={plName}/>
    </div>
  )
}

export default FormC;