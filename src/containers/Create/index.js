import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./create.css"
import logo from '../../imgs/logo.png'
import charityLogo from "../../imgs/org-logos/canadian_cancer_society.png"
import globe from "../../imgs/bg-img/globe.png"

import Step1 from "../../components/Create/Step1/Step1"
import Step2 from "../../components/Create/Step2/Step2"
import Step3 from "../../components/Create/Step3/Step3"

export default function Create() {

    let [status, setStatus] = useState(1);
    let orgos = [{
        title: "Cancer Center",
        location: "Toronto, CA",
        img: charityLogo
    }, {
        title: "Education for All",
        location: "Chicago, US",
        img: charityLogo
    }, {
        title: "Open Water",
        location: "Rome, Italy",
        img: charityLogo
    }];
    useEffect(() => {
        console.log(status)
    })
    return (
        <>
            <div className="position-absolute">
                <Link to="/">
                    <img src={logo} className="img-fluid p-5" />
                </Link>
            </div>
            <div id="earthBG" className="poster">
                <img id="createGlobe" src={globe} class="w-50" />
            </div>
            <div id="stepEnv" className="container center-vert">
                <div className="create-center-env h-100 w-100">
                    {
                        (status == 1) && (
                            <Step1 orgos={orgos} />
                        )
                    }
                    {
                        (status == 2) && (
                            <Step2/>
                        )
                    }
                    {
                        (status == 3) && (
                            <Step3/>
                        )
                    }
                    <div className="row">
                        <button id="continueBtn" onClick={(() => setStatus(status + 1))} className="w-100 my-5">Continue</button>
                    </div>
                </div>

            </div>
        </>
    )
}