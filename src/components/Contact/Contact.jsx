/* eslint-disable react/jsx-no-undef */
import React from 'react';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { FaHome } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';

import './Contact.css'

export default function Contact() {
    return (
        <footer className="mainfooter" role="contentinfo" id='contact'>
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6" >
                            {/* <!--Column1--> */}
                            <div className="footer-pad">
                                <h4>VISION OF SOOQNA</h4>
                                <p style={{marginTop: '12px', padding: '0 3rem'}}>This site was created to facilitate the buying and selling process for people.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6" style={{marginLeft: '11rem'}}>
                            {/* <!--Column2--> */}
                            <div className="footer-pad">
                                <h4>CONTACT US</h4>
                                <ul className="list-unstyled" style={{alignItems: 'flex-start',marginLeft: '5.5rem'}}>
                                    <li><FaHome id='nav-icon' style={{marginTop: '-5px'}}/> Jordan - Amman </li>
                                    <li><MdEmail id='nav-icon'/> sooqna@gmail.com </li>
                                    <li><BsTelephoneFill id='nav-icon'/>  +96270000000 </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3" style={{marginLeft: '7rem'}}>
                            <h4>Follow Us</h4>
                            <ul className="social-network social-circle" >
                                <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 copy">
                            <p className="text-center">&copy; Copyright 2022 - SOOQNA Company.  All rights reserved.</p>
                        </div>
                    </div>


                </div>
            </div>
        </footer>
    );
}




