import React from 'react';
import {Routes, Route} from 'react-router-dom';
import FirstPage from "./pages/First";
import FarmPage from "./pages/Home_Farm";
import ConsumePage from "./pages/Home_Consume";
import SearchPage from './pages/Search';
import FindWorker from './pages/FindWorker';


function App() {
  return (
    <Routes>
    <Route path="/" element = {<FirstPage/>} />
    <Route path="/farm" element = {<FarmPage/>} />
    <Route path="/consume" element = {<ConsumePage/>} />
    <Route path="/search" element={<SearchPage/>}/>
    <Route path='/findworker' element={<FindWorker/>}/>
    <Route path="*" element={<div>404 NotFound</div>}/>
    </Routes>    
  )
}

export default App;
