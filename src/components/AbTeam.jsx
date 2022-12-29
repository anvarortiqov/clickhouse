import React from 'react'

import { TiSocialLinkedin } from "react-icons/ti";
import { BsTwitter} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";


function AbTeam(props) {
    const {id, img, name, profession} = props;
  return (
    <div className="team__card">
        <div className="team-person">
            <img src={img} alt="Team's persons"  />
            <div className="hidden-network">
              <TiSocialLinkedin/>
              <BsTwitter/>
              <FaFacebookF/>
            </div>
        </div>
        <div className="team-info center">
            <h6 className="gray__800"><b>{name}</b></h6>
            <p className="p__16 gray__700">{profession}</p>
            <img src="" alt=""  />
        </div>
    </div>
  )
}

export default AbTeam