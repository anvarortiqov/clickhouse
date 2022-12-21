import React from 'react'
import Button from '../Button'
import FormC from './../FormC';
import './Form.scss';

function Form() {
  return (
    <section className='form_section'>
        <div className="container">
            <form action="">
                <h3 className='gray__900 center'>A quick way to discuss details</h3>
                <FormC type="text" name="Name*" plName="Your name"/>
                <FormC type="number" name="Phone**" plName="Your phone number*"/>
                <FormC type="email" name="Email*" plName="Your working email"/>
                <div className="form__item">
                    <label htmlFor="text">Message*</label>
                    <textarea name="" id="" cols="30" rows="1" placeholder='Your message'></textarea>
                </div>
                <div className="form__item">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="checkbox">
                        I agree to receive communications from Createx Construction Bureau.
                    </label>
                </div>
                <div className="form__item">
                    <Button className="btn btn__reg" text="send request"/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Form