import React from 'react'

function AbDate(props) {
  const {id, month, year} = props;
  return (
        <>
            <h4 className='gray__600'>{month} {year}</h4>
        </>
    
  );
}

export default AbDate;