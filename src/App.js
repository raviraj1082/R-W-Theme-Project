import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/fontawesome-free/css/all.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/css/style.css';
import React from 'react';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import Home from './Containers/Home';
import Departmet from './Containers/Departmet';
import Doctors from './Containers/Doctors';
import Medicines from './Containers/Medicines';
import About from './Containers/About';
import Contact from './Containers/Contact';
import Appointment from './Containers/Appointment';
import Addmedicine from './Containers/Addmedicine';
import Login from './Containers/Login';
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (        
    <BrowserRouter>  
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Home" component={Home}></Route>
          <Route path="/Departmet" component={Departmet}></Route>
          <Route path="/Doctors" component={Doctors}></Route>   
          <Route path="/Medicines" component={Medicines}></Route>             
          <Route path="/About" component={About}></Route>  
          <Route path="/Contact" component={Contact}></Route>
          <Route path="/Appointment" component={Appointment}></Route> 
          <Route path="/Login" component={Login}></Route>   
        </Switch>
        <Footer/>          
    </BrowserRouter>
  );
}

export default App;
