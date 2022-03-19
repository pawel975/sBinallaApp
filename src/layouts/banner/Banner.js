import React from "react";
import './banner.scss'

const Banner = () => {

    return (
        <>
            <div id="main-banner" role='banner'>
                <img id="bannerBackground" src={'/assets/img/header2.gif'} alt="banner for sBinalla Racing League"/>
                <img id="logo" src={"/assets/img/sBinallaLogo.svg"} alt="sBinalla logo"/>
            </div>
        </>
    )
}

export default Banner