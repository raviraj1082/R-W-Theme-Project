import React, { useState } from 'react';


function Login () {
    const[type, setType] = useState('login')

    const logIn = () =>{
        alert('Login Success')
    }
    const signIn = () =>{
        alert('Signup Success')
    }
    const mailSend = () =>{
        alert('Email Send')
    }

    // const[count, setCount] = useState(0);
    // const incNum = () =>{
    //     setCount(count + 1)
    //     console.log(count)
    // }
    // const decNum = () =>{
    //     setCount(count - 1)
    // }
    
    return (
        
        <section className="appointment my-5">          
            <div className="container">
                <div className="section-title">
        
                    {
                        type ==="login" || type ==="signup"
                        ?   type ==="login"
                            ?   <h2>Login</h2>
                            :   <h2> Signup</h2>      
                            
                        :   <h2> Forgot Password</h2>
                    }
                    {/* <h2>{count}</h2>
                    <button className="btn btn-primary" onClick={() => incNum()}style={{marginRight:"8px"}}>Plus</button>
                    <button className="btn btn-primary " onClick={() => decNum()} style={{marginLeft:"5px"}}>Minus</button> */}
                  
                </div>
                <div className="php-email-form mx-auto">
                    {
                        type ==='signup' 
                        ?   <div className="col-md-4 form-group mx-auto">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                                <div className="validate"></div>
                            </div>
                        :   null
                    }                           
                    {
                        type ==='login' || type ==='signup' || type ==='forgot'  
                        ?   <div className="col-md-4 form-group mt-2 mx-auto">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
                                <div className="validate"></div>
                            </div>
                        :   null
                    }
                    {
                        type === "login" || type ==="signup"
                        ?   <div className="col-md-4 form-group mt-2 mx-auto">
                                <input type="password" className="form-control" name="phone" id="phone" placeholder="Your Password" />
                                <div className="validate"></div>
                            </div>
                        :   null
                    }
                    
                    <div className="col-md-4 mx-auto text-center mt-2">
                        {
                            type ==="login" || type ==="signup"
                            ?   type ==="login"
                                ?   <>
                                        <button type="submit" onClick={() => logIn()}>Login</button>
                                        <div className="row">
                                            <div className="col-6 p-0 pt-4">New to CMH?  <button className="btn btn-primary btn-sm" onClick={() => setType('signup')}>Sign Up ?</button></div>
                                            <div className="col-6 p-0 pt-4"><button className="btn btn-primary btn-sm" onClick={() => setType('forgot')}>Forgot Password ?</button></div>
                                        </div>
                                    </>
                                :   <>
                                        <button type="submit" onClick={() => signIn()}>Signup</button>
                                        <div className="row">
                                            <div className="col-6 mx-auto p-0 pt-3">Already have an account?<button className="btn btn-primary btn-sm mt-1" onClick={() => setType('login')}>Login ?</button></div>
                                        </div>
                                    </>        
                                
                            :   <>
                                    <button type="submit" onClick={() => mailSend()}>Submit</button>
                                    <div className="row">
                                        <div className="col-6 mx-auto p-0 pt-3"><button className="btn btn-primary btn-sm mt-1" onClick={() => setType('login')}>Login</button></div>
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