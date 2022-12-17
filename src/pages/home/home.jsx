import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import './home.scss'
import Button from './../../components/Button';
import d from '../../scss/main.scss'

function HomePage() {
    return(
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
    );
}

export default HomePage;