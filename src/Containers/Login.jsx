import React, { useState } from 'react';


function Login () {
    const[type, setType] = useState('login')

 
    
    return (
        
        <section className="appointment my-5">          
            <div className="container">
                <div className="section-title">
                    {
                        type ==='login' 
                        ?  <h2>Login</h2>
                        :  <h2> Signup</h2>
                    }
                    
                  
                </div>
                <div className="php-email-form mx-auto">
                    {
                        type ==='signup' 
                        ?   <div className="col-md-4 form-group mx-auto">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                            </div>
                        :   null
                    }                           
                    {
                        type ==='login' || type ==='signup' || type ==='forgot'  
                        ?   <div className="col-md-4 form-group mt-2 mx-auto">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate"></div>
                            </div>
                        :   null
                    }
                    {
                        type === "login" || type ==="signup"
                        ?   <div className="col-md-4 form-group mt-2 mx-auto">
                                <input type="password" className="form-control" name="phone" id="phone" placeholder="Your Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                            </div>
                        :   null
                    }
                    
                    <div className="col-md-4 mx-auto text-center mt-2">
                        {
                            type ==="login" 
                            ?   <>
                                    <button type="submit">Login</button>
                                    <div className="row">
                                        <div className="col-6 p-0 pt-4"><small>New to CMH?  <button className="btn btn-primary btn-sm" onClick={() => setType('signup')}>Sign Up!</button></small></div>
                                        <div className="col-6 p-0 pt-4"><small><button className="btn btn-primary btn-sm" onClick={() => setType('forgot')}>Forgot Password ?</button></small></div>
                                    </div>
                                    
                                </>
                            :   <>
                                    <button type="submit" >Signup</button>
                                    <div className="row">
                                        <div className="col-6 mx-auto p-0 pt-3"><small>Already have an account?<button className="btn btn-primary btn-sm mt-1" onClick={() => setType('login')}>Login</button></small></div>
                                    </div>
                                </>
                        }
                    </div>                                                
                </div>
            </div>  
        </section>          
    )   
    
}

export default Login;