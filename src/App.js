import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Clinic from './features/Clinic';
import IndividualClinic from './features/IndividualClinic';

function App() {
  return (
    <div>
     <Routes>
       <Route path="/" element = {<Clinic />}/>
       <Route path='clinic/:id' element = {<IndividualClinic/>} />
     </Routes>
      
    </div>
  );
}

export default App;
