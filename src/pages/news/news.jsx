import React from 'react'
import './news.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import CaNew from '../../components/CaNew';
import CaNewData from './../../datas/CaNewData';
// import CaNew from './../../components/CaNew';
import Form from './../../components/Form/Form';
import Footer from './../../components/Footer/Footer';

function NewPage() {
  return (
    <>
    {/* newHome_section */}

        <section className="newHome_section">
            <div className="container">
                <div className="pages">
                    <Link to="/homepage" className='gray__800 p__14'>Homepage</Link>
                    <Link to="/newspage" className='gray__600 p__14'> / News</Link>
                    <Link to="/newaviablepage" className='gray__600 p__14'> / How to Build Climate Change-Resilient Infrastructure</Link>
                </div>
                <p className="h__72 gray__900">NEWS</p>
                <h6 className="gray__700">
                    Stay tuned with our news, expert tips and articles.
                </h6>
            </div>
        </section>

    {/* categories_section */}

        <section className="categories_section">
            <div className="container">
                <h1 className="gray__900">Categories</h1>
                <div className="categories__btn">
                    <Button className="tab" text="All News"/>
                    <Button className="tab" text="Company News"/>
                    <Button className="tab" text="Innovation"/>
                    <Button className="tab" text="Industry News"/>
                    <Button className="tab" text="Expert Tips"/>
                    <Button className="tab" text="Marketing"/>
                </div>
                <div className="canew__cards">
                    {CaNewData.map((get)=>{
                        return(
                            <CaNew key={get.id} {...get}/>
                        );
                    })}                    
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

export default NewPage;

