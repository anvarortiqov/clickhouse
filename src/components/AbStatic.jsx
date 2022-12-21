import React from 'react'

function AbStatic({icon, num, text}) {
  return (
    <div className="abStatic__bit">
        <div className="abStatic-icon"><img src={icon} alt="" /></div>
        <h1 className="primary">{num}</h1>
        <p className="p__14 gray__900">{text}</p>
    </div>
  )
}

export default AbStatic