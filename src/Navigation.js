import './Navigation.css';
import homeLogo from "./media/logoBlack.png";
import React from "react";
import Homepage from './compenents/Homepage';
import Communicator from './compenents/Communicator';
import Agile from './compenents/Agile';
import Project from './compenents/Project';
import {HashRouter, Route, Link, Routes} from "react-router-dom";

function Navigation() {
    return (
        <HashRouter>
            <div className="NavigationContainer">
                <div className="nameContainer">
                <Link to={`/`}>
                    <img className='homeLogo' src={homeLogo} alt="homepage logo" />    
                </Link>                    
                </div>
                <div className="menuContainer">
                    <a href="https://www.linkedin.com/in/siyoon-jung-0a83b31bb/">ABOUT ME</a>
                </div>
            </div>

            <div className='info'>
                <Routes>
                    <Route exact={true} path={"/"} element={<Homepage/>} />
                    <Route exact={true} path={"/communicator"} element={<Communicator/>} />
                    <Route exact={true} path={"/agile"} element={<Agile/>} />
                    <Route exact={true} path={"/project"} element={<Project/>} />
                </Routes>
            </div>
        </HashRouter>        
    )
}

export default Navigation;