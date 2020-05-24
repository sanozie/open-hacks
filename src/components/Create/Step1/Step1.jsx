import React, { useState, useEffect } from 'react'
import './Step1.css'

import logo from '../../../imgs/org-logos/canadian_cancer_society.png'

export default function Step1({orgos, complete}) {
    return (
    <>
    <div className="row">
        <h3>Step 1 of 3</h3>
    </div>
    <div className="row">
        <div className="col-12">
            <div className="row">
                <h1>Which nonprofit do you want to support?</h1>
            </div>
            <div id="formGroup" className="row">
                <svg className="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                </svg>
                <input type="text" placeholder="Search for an organization"/>
            </div>
            <div className="row" id="orgopaste">
            {orgos.map((orgo, index) => {
                if(index % 2 == 1) {
                    return (
                        <div className="col-6 orgo-col orgo-col-right" key={orgo.title}>
                            <div className="row orgo-row">
                                <div className="col-5 center-vert center">
                                    <img src={orgo.img} class="img-fluid"/>
                                </div>
                                <div className="col-7 center-vert">
                                    <div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p class="orgTitle">{orgo.title}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p class ="orgLoc">{orgo.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className="col-6 orgo-col orgo-col-left" key={orgo}>
                            <div className="row orgo-row">
                                <div className="col-5 center">
                                    <img src={orgo.img} class="img-fluid"/>
                                </div>
                                <div className="col-7 center-vert">
                                    <div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p class="orgTitle">{orgo.title}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p class ="orgLoc">{orgo.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
            </div>
        </div>
    </div>  
    </>
    )
}