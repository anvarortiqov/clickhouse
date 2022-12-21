import React from 'react'

function HserCard({icon, title}) {
  return (
        <div className="hser__card center">
            <div className="hser__icon"><img src={icon} alt="" /></div>
            <h5>{title}</h5>
        </div>
    )
}

export default HserCard;