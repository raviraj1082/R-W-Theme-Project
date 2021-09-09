
import React, {useEffect, useState } from 'react';

function Appointment(props) {

  const[preVal,setNewVal] = useState({})
  const[error,setError]= useState({})
  
  // Get-LocalStorage-DATA
  const getLocalData = () =>{
    let fromData = localStorage.getItem('fromData')

    if(fromData){
      return JSON.parse(localStorage.getItem('fromData')) 
    }
  }

  // Local-Storage-DATE
  useEffect(() => {
    validation()
    localStorage.setItem('fromData',JSON.stringify(preVal))
  }, [preVal]) 
  
  const valGet = (e) =>{
    setNewVal( preVal => ({...preVal,[e.target.name]: e.target.value}))
  }
  
  const validation = () =>{
    let nameError = true
    let emailError = true
    let phoneError = true 
    let dateError = true
    let departmentError = true

    if(preVal.name !== undefined){
      if(preVal.name === ''){
        setError(error => ({...error, name:'Enter your name'})) 
      }else{
        var validName = /^[a-zA-Z ]+$/
        if(validName.test(preVal.name) === false){
          setError(error => ({...error, name:'Please enter valid name'}))
        }else{
          setError(error => ({...error, name:''}))
          nameError = false
        }
      }           
    }
    if(preVal.email !== undefined){
      if(preVal.email === ''){
        setError(error => ({...error, email:'Enter your email'})) 
      }else{
        var valEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        if(valEmail.test(preVal.email) === false){
          setError(error => ({...error, email:'Please enter valid email'}))
        }else{
          setError(error => ({...error, email:''}))
          emailError = false
        }
      }           
    }
    if(preVal.phone !== undefined){
      if(preVal.phone === ''){
        setError(error => ({...error, phone:'Enter your phone number'})) 
      }else{
        var valphone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        if(valphone.test(preVal.phone) === false){
          setError(error => ({...error, phone:'Please valid phone number'}))
        }else{
          setError(error => ({...error, phone:''}))
          phoneError = false
        }
      }           
    }
    if(preVal.date !== undefined){
      if(preVal.date === ''){
        setError(error => ({...error, date:'Enter your date'})) 
      }else{
        var valdate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
        if(valdate.test(preVal.date) === false){
          setError(error => ({...error, date:'Please valid date'}))
        }else{
          setError(error => ({...error, date:''}))
          dateError = false
        }
      }           
    }
    if(preVal.department !== undefined){
      if(preVal.department === '0'){
        setError(error => ({...error, department:'Select your department'})) 
      }else{
        setError(error => ({...error, department:''}))
        departmentError = false
      }        
    }
    if((nameError || emailError || phoneError || dateError || departmentError) === true){
      return false
    }else{
      return true
    }
  }
  useEffect(() => {
    validation()    
  }, [preVal]) 
  
  const subitForm = (e) =>{
    
    e.preventDefault()

    let isValid = true
    isValid = validation()
    
    if(preVal.name === undefined){
      setError(error=> ({...error, name:'Enter your name'}))
      isValid = false 
    }
    if(preVal.email === undefined){
      setError(error=> ({...error, email:'Enter your email'})) 
      isValid = false
    }
    if(preVal.phone === undefined){
      setError(error=> ({...error, phone:'Enter your phone number'}))
      isValid = false 
    }
    if(preVal.date === undefined){
      setError(error=> ({...error, date:'Enter your date'}))
      isValid = false 
    }
    if(preVal.department === undefined){
      setError(error=> ({...error, department:'Enter your department'}))
      isValid = false 
    }
    
    if(isValid){
      return true
    }else{
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
                <div className="col-md-4 form-group pb-3">
                  <input type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Your Name" 
                    autoComplete="off"
                    onChange={(e) => valGet(e)}
                  />
                  <small style={{color:'red',position:'absolute'}}>{error.name !== undefined ? error.name : ''}</small>
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0 pb-3">
                  <input 
                   type="email"
                   className="form-control"
                   name="email" 
                   id="email" 
                   placeholder="Your Email" 
                   autoComplete="off"
                   onChange={(e) => valGet(e)}
                   />
                  <small style={{color:'red',position:'absolute'}}>{error.email !== undefined ? error.email : ''}</small>
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0 pb-3">
                  <input 
                  type="tel" 
                  className="form-control" 
                  name="phone" id="phone" 
                  placeholder="Your Phone" 
                  data-rule="minlen:4" 
                  autoComplete="off"
                  onChange={(e) => valGet(e)}
                 />
                 <small style={{color:'red',position:'absolute'}}>{error.phone !== undefined ? error.phone : ''}</small>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 form-group mt-3 pb-3">
                  <input 
                  type="datetime" 
                  name="date" 
                  className="form-control datepicker" 
                  id="date" 
                  autoComplete="off"
                  placeholder="Appointment Date" 
                  onChange={(e) => valGet(e)}
                  />
                  <small style={{color:'red',position:'absolute'}}>{error.date !== undefined ? error.date : ''}</small>
                </div>
                <div className="col-md-4 form-group mt-3 pb-3">
                  <select name="department" id="department" className="form-select"  onChange={(e) => valGet(e)}>
                    <option value="0">Select Department</option>
                    <option value="ReactJs">ReactJs</option>
                    <option value="Php">Php</option>
                    <option value="Graphic">Graphic</option>
                  </select>
                  <small style={{color:'red',position:'absolute'}}>{error.department !== undefined ? error.department : ''}</small>
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
              <div className="text-center"><button type="submit" onClick={() => getLocalData()}>Make an Appointment</button></div>
            </form>
          </div>
        </section>
        </main>
    </>
  );
}

export default Appointment;
