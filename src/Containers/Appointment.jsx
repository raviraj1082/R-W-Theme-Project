
import React, { useState } from 'react';

function Appointment(props) {

  const[preVal,setNewVal] = useState({})
  const[error,setError]= useState({})
  
  
  const valGet = (e) =>{
    setNewVal( preVal => ({...preVal,[e.target.name]: e.target.value}))
  }
  // console.log(preVal)
  const validation = () =>{
    if(preVal.name !== undefined){
     
    }
  }
  const subitForm = (e) =>{
    e.preventDefault()
    let isValid = validation()
    
    if(isValid){
      console.log('validation')
    }else{

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
                  <select name="department" id="department" className="form-select"  onChange={(e) => valGet(e)}>
                    <option value="0">Select Department</option>
                    <option value="ReactJs">ReactJs</option>
                    <option value="Php">Php</option>
                    <option value="Graphic">Graphic</option>
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
              <div className="text-center"><button type="submit">Make an Appointment</button></div>
            </form>
          </div>
        </section>
        </main>
    </>
  );
}

export default Appointment;
