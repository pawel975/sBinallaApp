import React, {useState, useEffect} from "react";
import { NavLink} from 'react-router-dom';
import './nav.scss'

const Nav = () => {

const handleShowClass = (e) => {
    console.log(e.target.className)
}

    return (
        <>
            <nav>
                <NavLink 
                    to={"/"}
                    className="route"
                    onClick={(e) => handleShowClass(e)}
                    >
                        Home
                </NavLink>
                <NavLink 
                    to={"/standings"}
                     className="route"

                     >
                    Standings
                </NavLink>
                <NavLink 
                    to={"/results"}
                     className="route"

                     >
                    Results
                </NavLink>
                <NavLink 
                    to={"/calendar"}
                     className="route"

                     >
                    Calendar
                </NavLink>
                <NavLink 
                    to={"/driver"}
                     className="route"

                     >
                    Driver
                </NavLink>
                <NavLink 
                    to={"/map"}
                     className="route"

                     >
                    Map
                </NavLink>
                <NavLink 
                    to={"/records"}
                    className="route"

                    >
                    Records
                </NavLink>
            </nav>
        </>
    )
}

export default Nav;