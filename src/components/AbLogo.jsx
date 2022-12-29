import React from 'react'

function AbLogo(props) {
  const {id,img} = props;
  return (
        <>
            <div className="par__logo">
                <img src={img} alt="" />
            </div>
        </>
    
  );
}

export default AbLogo;