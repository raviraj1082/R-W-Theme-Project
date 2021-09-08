
import React, { useState } from 'react';

function Appointment(props) {

  const[value,setValue] = useState({})
  const[error,setError] = useState({})

  const valGet = (e) =>{    
    setValue( value => ({...value, [e.target.name]: e.target.value}))
  }
  
  const validation = () =>{
    if(value.name !== undefined){
      if(value.name === ''){
        setError(error => ({...error, name: "Enter your name"}))
        return false
      }else{
        setError(error => ({...error, name: " "}))
        return true
      }
    }else{
      return false
    }
  }
  const subitForm = (e) =>{
    console.table(value)
    e.preventDefault()
    let isValid = validation()
    
    console.log(error)
    if(value.name !== undefined || isValid){
      setError(error => ({...error, name: " "}))      
      return true     
    }else{
      setError(error => ({...error, name: "Enter your name"}))
      return false
    }
  }

  return (      
    <>
      <main id="main">
        <section id="appointment" className="appointment">
          <div className="container">
            <div className="section-title">
              <h2>Make an Appointment</h2>
              <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
            </div>
            <form onSubmit={(e) => subitForm(e)} className="php-email-form" method="post">
              <div className="row">
                <div className="col-md-4 form-group">
                  <input type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Your Name" 
                    onChange={(e) => valGet(e)}
                  />
                  <small style={{color:'red'}}>{error.name !== undefined ? error.name : ''}</small>
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input 
                   type="email"
                   className="form-control"
                   name="email" 
                   id="email" 
                   placeholder="Your Email" 
                   onChange={(e) => valGet(e)}
                   />
                  <small style={{color:'red'}}>{error.name !== undefined ? error.name : ''}</small>
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input 
                  type="tel" 
                  className="form-control" 
                  name="phone" id="phone" 
                  placeholder="Your Phone" 
                  data-rule="minlen:4" 
                  onChange={(e) => valGet(e)}
                 />
                 <small style={{color:'red'}}>{error.name !== undefined ? error.name : ''}</small>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 form-group mt-3">
                  <input 
                  type="datetime" 
                  name="date" 
                  className="form-control datepicker" 
                  id="date" 
                  placeholder="Appointment Date" 
                  onChange={(e) => valGet(e)}
                  />
                  <small style={{color:'red'}}>{error.name !== undefined ? error.name : ''}</small>
                </div>
                <div className="col-md-4 form-group mt-3">
                  <select name="department" id="department" className="form-select" >
                    <option value>Select Department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </select>
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} />
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit" onSubmit={(e) =>subitForm(e) }>Make an Appointment</button></div>
            </form>
          </div>
        </section>
        </main>
    </>
  );
}

export default Appointment;
