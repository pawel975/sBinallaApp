import React from "react";
import { BrowserRouter, Router} from "react-router-dom";
import Banner from "../../layouts/banner/Banner";
import Footer from "../../layouts/footer/Footer";
import Main from "../../layouts/main/Main"
import Nav from "../../layouts/nav/Nav"
import "./app.scss"

const App = () => {
   return (
      <>
         <BrowserRouter>
            <Router>
               <div id="page-wrapper">
                  <Banner/>
                  <Nav/>
                  <div id="content-wrapper">
                     <Main/>
                  </div>
                  <Footer/>
               </div>
            </Router>
         </BrowserRouter>
      </>
   )
};

export default App;