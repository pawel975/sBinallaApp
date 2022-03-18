import React from "react";
import Banner from "../../layouts/banner/Banner";
import Footer from "../../layouts/footer/Footer";
import Main from "../../layouts/main/Main"
import Nav from "../../layouts/nav/Nav"
import "./app.scss";

const App = () => {
   return (
      <>
         <div id="page-wrapper">
            <Banner/>
            <Nav/>
            <div id="content-wrapper">
               <Main/>
            </div>
            <Footer/>
         </div>
      </>
   )
};

export default App;