import React from 'react';
import {Routes, Route} from 'react-router-dom';
import FirstPage from "./pages/First";
import FarmPage from "./pages/Home_Farm";
import ConsumePage from "./pages/Home_Consume";


function App() {
  return (
    <Routes>
    <Route path="/" element = {<FirstPage/>} />
    <Route path="/farm" element = {<FarmPage/>} />
    <Route path="/consume" element = {<ConsumePage/>} />
    <Route path="*" element={<div>404 NotFound</div>}/>
    </Routes>    
  )
}

export default App;
