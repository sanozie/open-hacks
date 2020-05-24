import React from 'react'

import "./Status.css"
import logo from '../../imgs/logo.png'

export default function Status() {
    return (
        <>
        <div className="position-absolute">
            <img src={logo} className="img-fluid p-5"/>
        </div>
            <div className="container">
                <div class="row">
                    <div class="col-6">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <h1>Sam's Canadian ting</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <h2>Total Donation: loads of money</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <button>We want your money</button>
                            </div>
                        </div>
                        <div id="statusInfo" className="row">
                            <div class="col-12">
                                <div class="row">
                                    <h3>Title</h3>
                                </div>
                                <div class="row">
                                    <p>Descript</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-6">
                                <p>Link: <u>De link</u></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div className="row justify-content-center">
                            <div className="col-6">
                                <h2>Big globe ting</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}