import React from 'react';
import { Link } from 'react-router-dom';
import './aboutAviable.scss';
import Button from './../../components/Button';
import VacancyData from './../../datas/VacancyData';
import VacancyBit from './../../components/VacancyBit';
import Brain from '../../images/ic-brain.png';
import Growth from '../../images/ic-growth.png';
import Salary from '../../images/ic-salary.png';
import CoreCards from './../../components/CoreCards';
import Form from './../../components/Form/Form';
import Footer from './../../components/Footer/Footer';
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';


function AboutAviable() {
  const [Subscribe,SetSubscribe]=useState();
  const [Cv,SetCv]=useState(false);
  return (
    <>
      {/* abAvi_home_section */}

        <section className="abAvi_home_section">
          <div className="container">
              <div className="pages">
                  <Link to="/homepage" className='gray__800 p__14'>Homepage</Link>
                  <Link to="/aboutpage" className='gray__600 p__14'> / About Us</Link>
                  <Link to="/aboutaviable" className='gray__600 p__14'> / Aviable Position</Link>
              </div>
              <p className="h__72 gray__900">AVAILABLE POSITIONS</p>
              <h6 className="gray__700">
                Build your career with Createx Construction Bureau.
              </h6>
          </div>
        </section>

    {/* vacancies_section */}

      <section className="vacancies_section">
        <div className="container">
          <div className="vacancies__branch mt__120">
            <div className="vacancies__bit">
                {VacancyData.map((get)=>{
                  return(
                    <VacancyBit key={get.id} {...get}/>
                  );
                })}
            </div>
            <div className="vacancies__bit">
              <h3 className="gray__900"><b>Didn’t find what you were looking for?</b></h3>
              <p className="p__18 gray__800">Send your CV or subscribe to our newsletter to receive information about new vacancies.</p>
              <div className="vacancy__btn">
                <Button className="btn__reg btn-outline-primary" onClick={()=>{SetSubscribe(!Subscribe)}} id="SubscribeBtn" text="Subscribe"></Button>
                <Button className="btn__reg btn" text="send cv"></Button>
              </div>
            </div>
          </div>
          <div className={Subscribe?"subscribe-block ":"subscribe-block"  } >
            <div className="close-subscribe" onClick={()=>{SetSubscribe(!Subscribe)}}><AiOutlineClose/></div>
            <form action="#">
              <h3 className="gray__900 ">Subscribe to our newsletter</h3>
              <label htmlFor="text">Name*</label>
              <input type="text" placeholder='Your Name'/>
              <label htmlFor="email">Email*</label>
              <input type="text" placeholder='Your working email'/>
              <Button className="btn__reg btn" text="send"/>
            </form>
          </div>
          <div className={Cv?"subscribe-block":"subscribe-block subsActive"  } id="cv" >
            <div className="close-subscribe" onClick={()=>{SetCv(!Cv)}}><AiOutlineClose/></div>
            <form action="#">
              <h3 className="gray__900 ">Subscribe to our newsletter</h3>
              <label htmlFor="text">Name*</label>
              <input type="text" placeholder='Your Name'/>
              <label htmlFor="text">Location*</label>
              <input type="text" placeholder='Choose your location'/>
              <label htmlFor="number">Phone**</label>
              <input type="number" placeholder='Your phone number'/>
              <label htmlFor="email">Email*</label>
              <input type="text" placeholder='Your working email'/>
              <label htmlFor="text">Сovering letter*</label>
              <textarea name="" id="" cols="30" rows="3" placeholder='Your covering letter'></textarea>
              <div className="file">
                <input type="file" name="" id="" />
                <label htmlFor="file">Attach your CV*</label>
              </div>
              <Button className="btn__reg btn" text="send"/>
            </form>
          </div>
        </div>
      </section>

    {/* core_values */}

      <section className="core_values" id="abCore">
                <div className="container">
                <h1 className="gray__900">Employee benefits</h1>
                    <p className="gray__700 p__18 mb__60 center">
                      There’s always room for talent.
                    </p>
                    <div className="core__cards">
                         <CoreCards icon={Brain} title='Training' text="Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt."/>
                         <CoreCards icon={Growth} title='Professional Growth' text="Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea."/>
                         <CoreCards icon={Salary} title='Growing Salary' text="Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad."/>
                    </div>
                </div>
      </section>

    {/* Form */}

      <Form/>

    {/* Footer */}

      <Footer/>
      
    </>
  )
}

export default AboutAviable