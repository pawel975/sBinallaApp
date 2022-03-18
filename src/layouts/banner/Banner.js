import React from "react";
import './banner.scss'
import headerBannerImg from '../../assets/img/header2.gif';
import sBinallaLogo from '../../assets/img/sBinallaLogo.svg';

const Banner = () => {

    return (
        <>
            <div id="main-banner" role='banner'>
                <img id="bannerBackground" src={headerBannerImg} alt="banner for sBinalla Racing League"/>
                <img id="logo" src={sBinallaLogo} alt="sBinalla logo"/>
            </div>
        </>
    )
}

export default Banner