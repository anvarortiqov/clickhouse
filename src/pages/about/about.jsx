import Header from './../../components/header/header';
import { Link } from 'react-router-dom';
import './about.scss';

import AbStatic from '../../components/AbStatic';

import LikeGr from '../../images/ic-like-gr.png';
import PaintingGr from '../../images/ic-painting-gr.png';
import HelmetGr from '../../images/ic-helmet-gr.png';
import PantoneGr from '../../images/ic-pantone-gr.png';

import AbPerson from '../../images/abPerson1.png';

import Signature from '../../images/signature.png';
function AboutPage() {
    return(
        <>
        {/* abHome_section */}

            <div className="abHome_section">
                <Header/>
                <div className="container">
                    <div className="pages">
                        <Link to="/homepage" className='gray__800 p__14'>Homepage</Link>
                        <Link to="/aboutpage" className='gray__600 p__14'> / About Us</Link>
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
                    <div className="quot__cont mt__120">
                        <div className="quot__img">
                            <img src={AbPerson} alt="" />
                        </div>
                        <div className="quot__info">
                            <h6 className="gray__900">
                                Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in. Sed aliquet in egestas hac at proin sed quam. Etiam aliquet sagittis non, massa cum pulvinar. Et in leo, tempus purus vestibulum ut blandit et mi. Odio massa purus vel praesent arcu enim elit felis viverra.
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
        </>
    );
}

export default AboutPage;