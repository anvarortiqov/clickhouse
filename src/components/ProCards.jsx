import React from 'react'
import Button from './Button'

function ProCards({title, text}) {
  return (
    <div className="pro__card">
        <div className="pro__footer">
            <h5>{title}</h5>
            <p className="p__14">{text}</p>
            <div className="pro__btn">
                <Button className="btn__reg btn-outline-primary" text="View Project"/>
            </div>
        </div>
    </div>
  )
}

export default ProCards