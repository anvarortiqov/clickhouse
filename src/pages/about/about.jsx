import { Link } from 'react-router-dom';
import './about.scss';

import AbStatic from '../../components/AbStatic';

import LikeGr from '../../images/ic-like-gr.png';
import PaintingGr from '../../images/ic-painting-gr.png';
import HelmetGr from '../../images/ic-helmet-gr.png';
import PantoneGr from '../../images/ic-pantone-gr.png';

import AbPerson from '../../images/abPerson1.png';

import Signature from '../../images/signature.png';

import CoreCards from '../../components/CoreCards';
import Like from '../../images/ic-like.png';
import Hand from '../../images/ic-hand.png';
import Slippers from '../../images/ic-slippers.png';

import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import DateData from '../../datas/DateData';
import AbDate from '../../components/AbDate';

import HistoryImg from '../../images/history-img.png';
import ClientLogo from './../../datas/ClientLogos';
import AbLogo from './../../components/AbLogo';
import MapImg from '../../images/map-img.png';

import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';
import TeamData from './../../datas/TeamData';
import AbTeam from './../../components/AbTeam';

function AboutPage() {
    return(
        <>
        {/* abHome_section */}

            <div className="abHome_section">
                <div className="container">
                    <div className="pages">
                        <Link to="/homepage" className='gray__800 p__14'>Homepage</Link>
                        <Link to="/aboutpage" className='gray__600 p__14'> / About Us</Link>
                        <Link to="/aboutaviable" className='gray__600 p__14'> / Aviable Position</Link>
                    </div>
                    <p className="h__72 gray__900">ABOUT US</p>
                    <h6 className="gray__700">
                        Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service.
                    </h6>
                </div>
            </div>

        {/* abStatic_section */}

            <section className="abStatic_section">
                <div className="container">
                    <div className="abStatic__bits center mt__120">
                        <AbStatic icon={LikeGr} num="60%" text="Clients on the recommendation of friends"/>
                        <AbStatic icon={PaintingGr} num="2400+" text="Apartments renovated"/>
                        <AbStatic icon={HelmetGr} num="670" text="Qualified specialists"/>
                        <AbStatic icon={PantoneGr} num="150000+ m2" text="Finishing work was carried out"/>
                    </div>
                </div>
            </section>

        {/* abQuotation */}

            <section className="abQuotation_section">
                <div className="container">
                    <div className="quot__cont">
                        <div className="quot__img">
                            <img src={AbPerson} alt="" />
                        </div>
                        <div className="quot__info">
                            <h6 className="gray__900">
                                Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in. Sed aliquet in egestas hac at proin sed quam. Etiam aliquet sagittis non, massa cum pulvinar. Et in leo, tempus purus vestibulum ut blandit et mi. Odio massa purus vel praesent arcu enim elit felis viverra.
                            </h6>
                            <h6 className="gray__900">
                                Magna aliquam interdum mattis ipsum arcu. Elit odio elit viverra quis metus amet eleifend amet. Vet suspendisse faucibus tempor ipsum integer. 
                            </h6>
                            <div className="info__footer">
                                <div className="person-names">
                                    <p className="p__16 gray__900"><b>Courtney Alexander</b></p>
                                    <p className="p__14 gray__700">CEO - Createx Construction Bureau </p>
                                </div>
                                <div className="person-signature"><img src={Signature} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        {/* core_values */}

            <section className="core_values">
                <div className="container">
                <h1 className="gray__900">Our core values</h1>
                    <p className="gray__700 p__18 mb__60 center">
                        Our mission is to set the highest standards for construction sphere.
                    </p>
                    <div className="core__cards">
                         <CoreCards icon={Like} title='Quality' text="Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt."/>
                         <CoreCards icon={Hand} title='Safety' text="Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea."/>
                         <CoreCards icon={Slippers} title='Comfort' text="Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad."/>
                    </div>
                </div>
            </section>

        {/* abHistory_section */}

            <section className="abHistory_section">
                <div className="container">
                    <div className="history__header">
                        <h1 className="gray__900">Our history</h1>
                            <div className="pro__icon">
                            <div className="prev">
                                <GrLinkPrevious className="icon"/>
                            </div>
                            <div className="next">
                                <GrLinkNext className="icon"/>
                            </div>
                        </div>
                    </div>
                    <div className="history__body">
                        <div className="history__date">
                            {DateData.map((get)=>{
                                return( 
                                    <AbDate key={get.id}  {...get}/>
                                );
                            })}      
                        </div>
                        <div className="history__img">
                            <div className="his-img"><img src={HistoryImg} alt="" /></div>
                            <p className="p__16 gray__800">
                                Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, 
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        {/* partner_section */}

            <section className="partner_section" id='abPartner'>
                <div className="container">
                    <h1 className="center gray__900">Our partners</h1>
                    <p className="p__18 gray__700 center">
                        We are supported by 12+ industry bodies and media partners
                    </p>
                    <div className="par__logos">
                        {ClientLogo.map((get)=>{
                            return( 
                                <AbLogo key={get.id}  {...get}/>
                            );
                        })}   
                    </div>
                </div>
            </section>

        {/* service_section */}

            <section className="hser_section" id='abTeam'>
                <div className="container">
                    <h1 className="center mt__120 gray__900">Our team</h1>
                    <p className="gray__700 mb__60 center">
                        People are at the heart of Createx Construction Bureau  
                    </p>
                    <div className="abTeam__cards">
                        {TeamData.map((get)=>{
                            return( 
                                <AbTeam key={get.id}  {...get}/>
                            );
                        })} 
                    </div>
                    <div className="view__all">
                        <p className="p__18 gray__900">Become a part of the best team in the construction market of the USA. </p>
                        <p><Link to='/aboutaviable' className="primary p__18" >Available Positions</Link></p>
                    </div>
                </div>
            </section>  

        {/* map_section   */}

            <section className="map_section">
                <div className="container">
                    <h1 className='gray__900 mb__60'>We work worldwide</h1>
                    <div className="map__img">
                        <img src={MapImg} alt="" />
                    </div>
                </div>
            </section>

        {/* Form */}
        
            <Form/>

        {/* Footer */}

            <Footer/>
        </>
    );
}

export default AboutPage;