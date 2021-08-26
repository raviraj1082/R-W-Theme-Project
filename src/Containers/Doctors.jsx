import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Doctors extends Component {
    render() {
        return (
            <>
                <main>
                    <section id="doctors" className="doctors">
                        <div className="container">
                            <div className="section-title">
                                <h2>Doctors</h2>
                                <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                                    tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                                    ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="member d-flex align-items-start">
                                        <div className="pic"><img src={require('../assets/img/doctors/doctors-1.jpg').default} className="img-doctor" alt="img" /></div>
                                        <div className="member-info">
                                            <h4>Atha Smith</h4>
                                            <span>Chief Medical Officer</span>
                                            <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.</p>
                                            <div className="social">
                                                <NavLink to="/"><i className="ri-twitter-fill" /></NavLink>
                                                <NavLink to="/"><i className="ri-facebook-fill" /></NavLink>
                                                <NavLink to="/"><i className="ri-instagram-fill" /></NavLink>
                                                <NavLink to="/"> <i className="ri-linkedin-box-fill" /> </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4 mt-lg-0">
                                    <div className="member d-flex align-items-start">
                                        <div className="pic"><img src={require('../assets/img/doctors/doctors-2.jpg').default} className="img-doctor" alt="img" /></div>
                                        <div className="member-info">
                                            <h4>John White</h4>
                                            <span>Anesthesiologist</span>
                                            <p>Aenean ac turpis ante. Mauris velit sapien.</p>
                                            <div className="social">
                                                <NavLink to="/"><i className="ri-twitter-fill" /></NavLink>
                                                <NavLink to="/"><i className="ri-facebook-fill" /></NavLink>
                                                <NavLink to="/"><i className="ri-instagram-fill" /></NavLink>
                                                <NavLink to="/"> <i className="ri-linkedin-box-fill" /> </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4">
                                    <div className="member d-flex align-items-start">
                                        <div className="pic"><img src={require('../assets/img/doctors/doctors-3.jpg').default} className="img-doctor" alt="img" /></div>
                                        <div className="member-info">
                                            <h4>Umika Loha</h4>
                                            <span>Cardiology</span>
                                            <p>Curabitur luctus eleifend odio. Phasellus placerat mi.</p>
                                            <div className="social">
                                                <NavLink to="/"><i className="ri-twitter-fill" /></NavLink>
                                                <NavLink to="/"><i className="ri-facebook-fill" /></NavLink>
                                                <NavLink to="/"><i className="ri-instagram-fill" /></NavLink>
                                                <NavLink to="/"> <i className="ri-linkedin-box-fill" /> </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4">
                                    <div className="member d-flex align-items-start">
                                        <div className="pic"><img src={require('../assets/img/doctors/doctors-4.jpg').default} className="img-doctor" alt="img" /></div>
                                        <div className="member-info">
                                            <h4>Daimy Smith</h4>
                                            <span>Neurosurgeon</span>
                                            <p>Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.</p>
                                            <div className="social">
                                                <NavLink to="/"><i className="ri-twitter-fill" /></NavLink>
                                                <NavLink to="/"><i className="ri-facebook-fill" /></NavLink>
                                                <NavLink to="/"><i className="ri-instagram-fill" /></NavLink>
                                                <NavLink to="/"> <i className="ri-linkedin-box-fill" /> </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

            </>
        );
    }
}

export default Doctors;