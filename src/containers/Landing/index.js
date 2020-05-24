import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "./land.css"
import globe from "../../imgs/bg-img/globe.png"

export default function Landing() {
    return (
        <>
            <div id = "earthBG" className="poster">
                <img id="landGlobe" src={globe} class="w-75"/>
            </div>
            <div id="landEnv" className ="container center-vert">
                <div class="center-env w-100">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Fund my planet</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center landBtnRow">
                        <div className="col-4 text-center">
                            <Link to = "/create">
                                <button id="createBtn" class="landingBtn">Create a Donation Fund</button>
                            </Link>
                        </div>
                    </div>
                    <div className="row justify-content-center landBtnRow">
                        <div className="col-4 text-center">
                            <Link to="/worldview">
                                <button id="seeWorldView" class="landingBtn">See World View</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}