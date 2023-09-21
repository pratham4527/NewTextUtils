import { useState } from 'react';
import About from './About';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";

function App() {
  
  const[mode,setMode]=useState('light')
  const[modeNameColor,setModeNameColor]=useState('dark')
  

  const toggleWeb =()=>{
    if(mode==='dark'){
      
      setMode('light');
      setModeNameColor('dark')
      document.body.style.backgroundColor="White"
      document.title='NewTextUtils-Light Mode'
      
    }else{
      setMode('dark')
      setModeNameColor('light')
      document.title='NewTextUtils-Dark Mode'
      document.body.style.backgroundColor="grey"
      
    }
  }

  
  return (

    
  <>
    
    <Router>
      
      {/* using props and propsTypes */}
      <Navbar title="NewTextUtils" aboutText="About Us" mode={mode} toggleWeb={toggleWeb} modeNameColor={modeNameColor} />
      {/* using default props */}
      {/* <Navbar  /> */}

          <div className="container">

            <Routes>
                  <Route exact path="/about" element = {<About />} ></Route>
                  <Route exact path="/" element = { <TextForm heading="Enter the Text to analyze " modeNameColor={modeNameColor} mode={mode} /> } ></Route>
            </Routes>
          
          </div>    

    </Router>   
   
  </>
 
  );
}

export default App;
