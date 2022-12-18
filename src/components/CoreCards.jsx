import React from 'react'

function CoreCards({icon, title, text}) {
  return (
    <div className="core__card">
        <div className="core__icon"><img src={icon} alt="" /></div>
        <h5 className='gray__900'>{title}</h5>
        <p className="gray__700 p__16">{text}</p>
    </div>
  )
}

export default CoreCards;