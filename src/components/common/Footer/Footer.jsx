import React from 'react'
import "./footer.css"
import { blog } from '../../dummydata'

const Footer = () => {
  return (
    <>
    <section className="newletter">
      <div className="container flexSB">
        <div className="left row">
            <h1>Newsletter - Stay Tuned And Get The Latest Updates</h1>
            <span>Far Far Away, Behind The Word Mountains</span>
        </div>
        <div className="right row">
            <input type="text" placeholder='Enter E-mail Address' />
            <i className='fa fa-paper-plane'></i>
        </div>
      </div>
    </section>
    <footer>
        <div className="container padding">
            <div className="box logo">
                <h1>EDUSPRINT</h1>
                <span>Online Education And Learning</span>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
               
                <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
                
            </div>

            <div className="box link">
                <h3>Explore</h3>
                <ul>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Courses</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="box link">
                <h3>Quick Links</h3>
                <ul>
                    <li>Pricing</li>
                    <li>T&C</li>
                    <li>Privacy</li>
                    <li>Feedbacks</li>
                    <li>Team</li>
                </ul>
            </div>
            <div className="bxo">
                <h3>Recent Post</h3>
                {blog.slice(0,3).map((val) =>{
                    return(
                    <div className="items flexSB">
                        <div className="img">
                            <img src={val.cover} alt=""  />
                        </div>
                        <div className="text">
                        <span>
                            <i className='fa fa-user'></i>
                            <label htmlFor=''>{val.type}</label>
                        </span>
                        <span>
                            <i className='fa fa-calendar-alt'></i>
                            <label htmlFor=''>{val.date}</label>
                        </span>
                        <h4>{val.title}</h4>
                        </div>
                    </div>
                    )
                })}
                </div>
                <div className="box last">
                    <h3>Have a Question?
                        <ul>
                            <li>
                                <i className='fa fa-map'></i>
                                Dwarka sec-21, New Delhi
                                </li>
                                <li>
                                    <i className="fa fa-phone-alt"></i>
                                    +91 85128 24145
                                </li>
                                <li>
                                    <i className="fa fa-paper-plane"></i>
                                    sushant2002.jha@gmail.com
                                </li>
                        </ul>
                    </h3>
                </div>
        </div>
    </footer>
    <div className="legal">
        <p>Cpoyright @2024 All Rights Reserved | This Template is made by <b>@sushant jha with</b> <i className='fa fa-heart'></i></p>
    </div>
    </>
  )
}

export default Footer