import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { WiTime4 } from "react-icons/wi";
import Button from './Button';

function VacancyBit(props) {
    const {city, content} = props;
  return (
    <div className="vacancy__bit">
        <div className="vacancy__info">
            <p className="p__14 gray__700 meta">
                <CiLocationOn className='meta-icon'/> {city} | <WiTime4 className='meta-icon'/> Full Time
            </p>
            <h6 className="gray__900"><b>{content}</b></h6>
        </div>
        <div className="vacancyBtn">
            <Button className="btn__reg btn-outline-primary" text="Apply now"/>
        </div>
    </div>
  )
}

export default VacancyBit