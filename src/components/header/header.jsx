import './header.scss';

import { AiOutlineComment } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import HomePage from './../../pages/home/home';
import AboutPage from './../../pages/about/about';
import ServicePage from './../../pages/services/services';
import WorkPage from './../../pages/work/work';
import NewPage from './../../pages/news/news';
import ContactPage from './../../pages/contacts/contacts';
function Header() {
    return (
      <>
        <header>
            <div className="container">
                <div className="header_basic">
                  <div className="logo">
                    <Link to='/homepage'> <img src={logo} alt="there is a logo" /></Link>
                  </div>
                  <ul>
                    <li> <Link to='aboutpage' className='nav_link'>About Us</Link></li>
                    <li> <Link to='servicepage' className='nav_link'>Services</Link></li>
                    <li> <Link to='workpage' className='nav_link'>Work</Link></li>
                    <li> <Link to='newpage' className='nav_link'>News</Link></li>
                    <li> <Link to='contactpage' className='nav_link'>Contacts</Link></li>
                  </ul>
                  <ul>
                    <li className='call'>
                      <div className="icons"><BsPhone className='icon'/></div> 
                      <Link className='call_link'>Call us  <p>(405) 555-0128</p></Link></li>
                    <li className='call'>
                      <div className="icons"><AiOutlineComment className='icon'/> </div>
                      <Link className='call_link'>Talk to us<p>hello@createx.com</p></Link>
                    </li>
                  </ul>
                </div>
            </div>
        </header>

        <Routes>
          <Route path="homepage" element={<HomePage/>} />
          <Route path="aboutpage" element={AboutPage}/>
          <Route path="servicepage" element={ServicePage} />
          <Route path="workpage" element={<WorkPage/>} />
          <Route path="newpage" element={<NewPage/>} />
          <Route path="contactpage" element={<ContactPage/>} />
        </Routes>
      </> 
    );
    
}
export default Header;