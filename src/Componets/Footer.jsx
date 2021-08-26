import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container d-md-flex py-4">
                    <div className="me-md-auto text-center text-md-start">
                        <div>
                            <h4>Address</h4>
                            <p>
                                F-505, <br />
                                Inovative Plazza<br />
                                New Delhi, India<br /><br />
                                <strong>Phone:</strong> +91 9988776655<br />
                                <strong>Email:</strong> cityhospital@example.com<br />
                            </p>
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <NavLink to="/Home" className="twitter"><i className="bx bxl-twitter" /></NavLink>
                        <NavLink to="/Home" className="facebook"><i className="bx bxl-facebook" /></NavLink>
                        <NavLink to="/Home" className="instagram"><i className="bx bxl-instagram" /></NavLink>
                        <NavLink to="/Home" className="google-plus"><i className="bx bxl-skype" /></NavLink>
                        <NavLink to="/Home" className="linkedin"><i className="bx bxl-linkedin" /></NavLink>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;
