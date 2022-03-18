import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from "../../pages/home/Home";
import Standings from "../../pages/standings/Standings"
import Results from "../../pages/results/Results";
import Calendar from "../../pages/calendar/Calendar";
import Driver from "../../pages/driver/Driver";
import Map from "../../pages/map/Map";
import Records from "../../pages/records/Records";


const Main = () => {
   
   return (
      <>
         <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/standings" element={<Standings/>} />
            <Route path="/results" element={<Results/>} />
            <Route path="/calendar" element={<Calendar/>} />
            <Route path="/driver" element={<Driver/>} />
            <Route path="/map" element={<Map/>} />
            <Route path="/records" element={<Records/>} />
         </Routes>
      </>
   )
};

export default Main;