import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import './home.scss'
import Header from './../../components/header/header';
import Button from '../../components/Button';

import CoreCards from "../../components/CoreCards";
import Like from '../../images/ic-like.png';
import Hand from '../../images/ic-hand.png';
import Slippers from '../../images/ic-slippers.png';

import HserCard from '../../components/HserCard';
import Vector from '../../images/ic-vector.png';
import Plan from '../../images/ic-plan.png';
import Pantone from '../../images/ic-pantone.png';
import Painting from '../../images/ic-painting.png';
import ProCards from "../../components/ProCards";

import ParLogo1 from '../../images/client-logo1.png';
import ParLogo2 from '../../images/client-logo2.png';
import ParLogo3 from '../../images/client-logo3.png';
import ParLogo4 from '../../images/client-logo4.png';
import ParLogo5 from '../../images/client-logo5.png';
import ParLogo6 from '../../images/client-logo6.png';

import ProfileImg from '../../images/profile-img.png';
import ParItemImg from '../../images/par-item-img.png';

import HnewCard from "../../components/HnewCard";

import Form from "../../components/Form/Form";

import Footer from './../../components/Footer/Footer';

function HomePage() {
    return(
        <>
        {/* header */}

            <Header/>

        {/* home_section */}

            <section className="home_section">
                <div className="prev">
                    <GrLinkPrevious className="icon"/>
                </div>
                <div className="container">
                    <div className="info">
                        <div className="middle__info">
                            <h1 className="h__72 white">CREATE <span className="primary">X</span> <br />  CONSTRUCTION</h1>
                            <p className="p__20 white">
                                Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. 
                            </p>
                            <div className="home_btn">
                                <Button className="btn-outline btn__reg" text="Learn more about us " />
                                <Button className="btn btn__reg" text="Submit request" />
                            </div>
                            <div className="home_pages">
                                <h3 className="pages__item white">01</h3>
                                <h3 className="pages__item white">02</h3>
                                <h3 className="pages__item white">03</h3>
                                <h3 className="pages__item white">04</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="next">
                    <GrLinkNext className="icon"/>
                </div>
            </section>

        {/* video_section */}

            <section className="video_section">
                <div className="container">
                    <h1 className="mt__120 gray__900">We are Createx Construction Bureau </h1>
                    <p className="gray__700 p__18 mb__60">
                        We are rightfully considered to be the best construction company in the USA.
                    </p>
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/MrRvX5I8PyY" title="Top 5 Zaha Hadid Building Projects" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

        {/* core_values */}

            <section className="core_values">
                <div className="container">
                <h1 className="mt__120 gray__900">Our core values</h1>
                    <p className="gray__700 p__18 mb__60">
                        Our mission is to set the highest standards for construction sphere.
                    </p>
                    <div className="core__cards">
                         <CoreCards icon={Like} title='Quality' text="Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt."/>
                         <CoreCards icon={Hand} title='Safety' text="Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea."/>
                         <CoreCards icon={Slippers} title='Comfort' text="Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad."/>
                    </div>
                </div>
            </section>

        {/* service_section */}

            <section className="hser_section">
                <div className="container">
                    <div className="questions mt__120">
                        <h3 className="gray__900 center">Want to know more? Ask us a question:</h3>
                        <form action="#" id="form">
                            <div className="form__item p__14">
                                <label htmlFor="text" className="">Name</label>
                                <input  type="text" placeholder="Your name"/>
                            </div>
                            <div className="form__item">
                                <label htmlFor="number">Phone</label>
                                <input  type="number" name="" id="" placeholder="Your phone" />
                            </div>
                            <div className="form__item">
                                <label htmlFor="textarea">Message</label>
                                <textarea  name="" id="" cols="30" rows="1" placeholder="Your message"></textarea>
                            </div>
                            <div className="form__item">
                                <Button className="btn btn__reg" text="Send" />
                            </div>
                        </form>
                    </div>
                    <h1 className="center mt__120 gray__900">Our services</h1>
                    <p className="gray__700 mb__60 center">
                        Createx Construction Bureau is a construction giant with a full range of construction services.
                    </p>
                    <div className="hser__cards">
                        <HserCard icon={Vector} title="Construction"/>
                        <HserCard icon={Plan} title="Project Development"/>
                        <HserCard icon={Pantone} title="Interior Design"/>
                        <HserCard icon={Painting} title="Repairs"/>
                    </div>
                    <div className="view__all">
                        <h3>Learn more about our services</h3>
                        <div className="hser__btn">
                            <Button className="btn btn__reg" text="View services" />
                        </div>
                    </div>
                </div>
            </section>

        {/* project_section */}

            <section className="project_section">
            <div className="container">
                <div className="pro__head">
                    <h1 className="gray__900">
                        Browse our selected projects and learn more about our work
                    </h1>
                    <div className="pro__icon">
                        <div className="prev">
                            <GrLinkPrevious className="icon"/>
                        </div>
                        <div className="next">
                            <GrLinkNext className="icon"/>
                        </div>
                    </div>
                </div>
                <div className="pro__cards">
                    <ProCards title="Red Finger Building" text="Business Centers" />
                    <ProCards title="Cubes Building" text="Business Centers" />
                    <ProCards title="The Pencil Building" text="Business Centers" />
                </div>
                <div className="view__all">
                    <h3>Explore all our works</h3>
                    <div className="hser__btn">
                        <Button className="btn btn__reg" text="View portfolio" />
                    </div>
                </div>
            </div>
            </section>

        {/* partner_section */}

            <section className="partner_section">
                <div className="container">
                    <h1 className="center gray__900">Supported by 12+ partners</h1>
                    <div className="par__logos">
                        <div className="par__logo"><img src={ParLogo1} alt="" /></div>
                        <div className="par__logo"><img src={ParLogo2} alt="" /></div>
                        <div className="par__logo"><img src={ParLogo3} alt="" /></div>
                        <div className="par__logo"><img src={ParLogo4} alt="" /></div>
                        <div className="par__logo"><img src={ParLogo5} alt="" /></div>
                        <div className="par__logo"><img src={ParLogo6} alt="" /></div>
                    </div>
                    <div className="par__says">
                        <div className="par__item">
                            <h1>What our clients are saying</h1>
                            <div className="item__img"><img src={ProfileImg} alt="" /></div>
                            <p className="p__16 gray__800">
                                Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. 
                            </p>
                            <div className="internal-item">
                                <div className="inter">
                                    <p className="p__16 gray__900"><b>Shawn Edwards</b></p>
                                    <p className="p__14 gray__700">Position, Company name</p>
                                </div>
                                <div className="inter-btn">
                                    <div className="prev">
                                        <GrLinkPrevious className="icon"/>
                                    </div>
                                    <div className="next">
                                        <GrLinkNext className="icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="par__item">
                            <img src={ParItemImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>

        {/* figure_section */}

            <section className="figure_section">
                <div className="container">
                    <h1 className="gray__900 ">Some facts and figures</h1>
                    <div className="figures">
                        <div className="figure__item">
                            <h2 className="fig-per">98%</h2>
                            <p className="p__14 gray__900">Totally satisfied clients</p>
                        </div>
                        <div className="figure__item">
                            <h2 className="fig-per">20</h2>
                            <p className="p__14 gray__900">Years of experience</p>
                        </div>
                        <div className="figure__item">
                            <h2 className="fig-per">9452</h2>
                            <p className="p__14 gray__900">Working hours spent</p>
                        </div>
                        <div className="figure__item">
                            <h2 className="fig-per">100%</h2>
                            <p className="p__14 gray__900">Succeeded projects</p>
                        </div>
                    </div>
                </div>
            </section>

        {/* hnew_section */}

            <section className="hnew_section">
                <div className="container">
                    <h1 className="gray__900">Recent news</h1>
                    <div className="hnew__grid__cont">
                        <HnewCard 
                            title="How to Build Climate Change-Resilient Infrastructure" 
                            content="Industry News"
                            date="June 24, 2020"
                            comment="4"
                        />
                        <HnewCard 
                            title="How Construction Can Help Itself" 
                            content="Innovation"
                            date="June 12, 2020"
                            comment="No"
                        />
                        <HnewCard 
                            title="Types of Flooring Materials" 
                            content="Company News"
                            date="December 1, 2019"
                            comment="No"
                        />
                    </div>
                    <div className="view__all">
                        <h3>Explore all our news posts</h3>
                        <div className="hser__btn">
                            <Button className="btn btn__reg" text="View all news" />
                        </div>
                    </div>
                </div>
            </section>

        {/* form_section */}

            <Form/>

        {/* footer */}

            <Footer/>

        </>
    );
}

export default HomePage;