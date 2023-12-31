import React from 'react'
import "./contact.css"
import Bac from '../common/bac/Bac'

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14009.831487470361!2d77.02190145!3d28.61603625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1703969592970!5m2!1sen!2sin' 
  return (
    <>
    <Bac title="Contact Us"/> 
    <section className='contact padding'>
        <div className='container shadow flexSB'>
            <div className='left row'>
                <iframe src={map}></iframe>
            </div>
            <div className="right row">
                <h1>Contact Us</h1>
                <p></p>

                <div className='items grid2'>
                    <div className='box'>
                        <h4>ADDRESS:</h4>
                        <p>Dwarka sec-21,New Delhi</p>
                    </div>
                    <div className='box'>
                        <h4>Email:</h4>
                         <p>sushant2002.jha@gmail.com</p>
                    </div>
                    <div className='box'>
                        <h4>Phone:</h4>
                         <p>+918512824145</p>
                    </div>
                </div>
                <form action=''>
                    <div className='flexSB'>
                        <input type='text' placeholder='Name'/>
                        <input type='email' placeholder='Email'/>
                    </div>
                    <input type='email' placeholder='Subject'/>
                    <textarea cols='30' rows='10'>
                        Create A Message Here.....
                    </textarea>
                    <button className='primary-btn'>SEND Message</button>
                </form>
                <h3>Follow Us Here</h3>
                <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
            </div>
        </div>
        </section>   
    </>
  )
}

export default Contact