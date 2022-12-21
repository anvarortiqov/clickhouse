import React from 'react'

import './Footer.scss';
import LogoLight from '../../images/logo-light.png';
import { BsWhatsapp, BsTwitter, BsYoutube, BsHeart } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";
import Button from './../Button';

function Footer() {
  return (
    <footer>
        <div className="container">
           <ul>
            <li>
              <div className="connection">
                <div className="logo-img"><img src={LogoLight} alt="" /></div>
                <div className="social">
                  <a href="#" className='opacity'><BsWhatsapp/></a>
                  <a href="#" className='opacity'><FaFacebookF/></a>
                  <a href="#" className='opacity'><BsTwitter/></a>
                  <a href="#" className='opacity'><BsYoutube/></a>
                </div>
              </div>
              <p className="p__14 opacity">
                Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service. Our mission is to set the highest standards for construction sphere.
              </p>
            </li>
            <li>
              <h4 className="white">Let’s stay in touch</h4>
              <form action="#">
                <input type="email" className='opacity' placeholder='Your email address'/>
                <Button className="btn btn__reg" text="subscribe"/>
              </form>
              <p className="p__12 opacity">
                *Subscribe to our newsletter to receive communications and early updates from Createx Construction Bureau.
              </p>
            </li>
           </ul>
           <ul>
            <li>
              <p className="p__16 white"><b>HEAD OFFICE</b></p>
              <p className="p__16 white">Address: <a href="" className='opacity'>8502 Preston Rd. Inglewood, New York</a></p>
              <p className="p__16 white">Call: <a href="" className='opacity'>(405) 555-0128</a></p>
              <p className="p__16 white">Email: <a href="" className='opacity'>hello@createx.com</a></p>
            </li>
            <li>
              <p className="p__16 white"><b>WHO WE ARE</b></p>
              <p className="p__16"><a href="" className='opacity'>About Us</a></p>
              <p className="p__16"><a href="" className='opacity'>Available Positions</a></p>
              <p className="p__16"><a href="" className='opacity'>Contacts</a></p>
            </li>
            <li>
              <p className="p__16 white"><b>OUR EXPERIENCE</b></p>
              <p className="p__16"><a href="" className='opacity'>Services</a></p>
              <p className="p__16"><a href="" className='opacity'>Work</a></p>
              <p className="p__16"><a href="" className='opacity'>News</a></p>
            </li>
           </ul>
           <ul>
            <li>
              <p className="p__12 white">© All rights reserved. Made with <BsHeart className='heart'/> by Createx Studio </p>
            </li>
            <li>
              <p className="p__14 white">GO TO TOP</p>
              <button className='btn btn__reg'><FiChevronUp/></button>
            </li>
           </ul>
        </div>
    </footer>
  )
}

export default Footer;                    