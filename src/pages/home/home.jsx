import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import './home.scss'
import Button from './../../components/Button';
import CoreCards from "../../components/CoreCards";
import Like from '../../images/ic-like.png';
import Hand from '../../images/ic-hand.png';
import Slippers from '../../images/ic-slippers.png';

function HomePage() {
    return(
        <>

        {/* home_section */}

            <section className="home_section">
                <div className="prev">
                    <GrLinkPrevious className="icon"/>
                </div>
                <div className="container">
                    <div className="info">
                        <div className="middle__info">
                            <h1 className="home_heading white">CREATE <span className="primary">X</span>  CONSTRUCTION</h1>
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
                    <h1 className="mt__120">We are Createx Construction Bureau </h1>
                    <p className="gray__700 p__18 mb__60">
                        We are rightfully considered to be the best construction company in the USA.
                    </p>
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/MrRvX5I8PyY" title="Top 5 Zaha Hadid Building Projects" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>

        {/* core_values */}

            <section className="core_values">
                <div className="container">
                <h1 className="mt__120">Our core values</h1>
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
        </>
    );
}

export default HomePage;