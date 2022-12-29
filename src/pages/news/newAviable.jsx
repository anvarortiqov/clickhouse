import React from 'react'
import './newAviable.scss';
import { Link } from 'react-router-dom';
import { AiOutlineComment } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Person from '../../images/hnew-bg1.png';
import CommentData from './../../datas/CommentData';
import Comment from './../../components/Comment';
import Button from './../../components/Button';
import Form from './../../components/Form/Form';
import Footer from './../../components/Footer/Footer';

function NewAviable() {
  return (
    <>
      {/* newAvi_home__section */}

        <div className="newAvi_home__section">
          <div className="container">
              <div className="pages">
                    <Link to="/homepage" className='gray__800 p__14'>Homepage</Link>
                    <Link to="/newspage" className='gray__600 p__14'> / News</Link>
                    <Link to="/newaviablepage" className='gray__600 p__14'> / How to Build Climate Change-Resilient Infrastructure</Link>
              </div>
              <p className="h__72 gray__900">How to Build Climate Change-Resilient Infrastructure</p>
              <div className="socials">
                  <div className="hnew-meta">
                      <p className="p__14 primary">Industry News</p>
                      <p className="p__14 gray__700">| June 24, 2020 |</p>
                      <p className="p__14 gray__700"><AiOutlineComment/> 4 comments</p>
                  </div>
                  <div className="social-icons">
                    <FaFacebookF/>
                    <TiSocialLinkedin/>
                    <BsTwitter/>
                  </div>
              </div>
              <div className="newAvi__imgs">
                <img src={Person} alt="" />
              </div>
          </div> 
        </div>

      {/* newAvi_article */}
        <section className="newAvi_article">
          <div className="article">
            <h6 className="gray__900">
              <b>
                Vulputate vitae pellentesque scelerisque luctus consequat   mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam  quis est hendrerit ac euismod. 
              </b>
            </h6>
            <p className="p__16 gray__800">
              At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.
            </p>
            <p className="p__16 gray__800">
              Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non. 
            </p>
            <h6 className="gray__900 braces">
              <b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum. 
              </b>
            </h6>
            <p className="p__16 gray__800">
              Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:
            </p>
            <ul>
              <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
              <li>Vulputate placerat amet pulvinar lorem nisl.</li>
              <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
              <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
            </ul>
            <p className="p__16 gray__800">
              Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.
            </p>
            <div className="share">
              <p className="p__16 gray__900 share_p"><b>Share:</b></p>
              <div className="social-icons">
                <FaFacebookF/>
                <TiSocialLinkedin/>
                <BsTwitter/>
              </div>
            </div>
          </div>
        </section>

      {/* comments */}
        <section className="comments">
          <div className="container">
            <h1 className='gray__900'>4 comments</h1>
            <div className="comments__main">
              {CommentData.map((get)=>{
                return(
                  <Comment key={get.id} {...get}/>
                );
              })}
            </div>
          </div>
        </section>

      {/* your_comment */}

        <section className="your_comment mt__120">
          <div className="container">
            <h1 className="gray__900">Leave your comment</h1>
            <form action="#">
              <div className="form__item">
                <label htmlFor="text">Name*</label>
                <input type="text" placeholder='Your name'/>
              </div>
              <div className="form__item">
                <label htmlFor="text">Email*</label>
                <input type="text" placeholder='Your working email'/>
              </div>
              <div className="form__item">
                <label htmlFor="text">Your comment*</label>
                <textarea  name="" id="" cols="30" rows="3" placeholder='Type comment here'></textarea>
              </div>
              <div className="form__btn">
                <Button className="btn__reg btn" text="Post comment"/>
              </div>
            </form>
          </div>
        </section>

      {/* Form */}

        <Form/>

      {/* Footer */}

        <Footer/>
    </>
  )
}

export default NewAviable;