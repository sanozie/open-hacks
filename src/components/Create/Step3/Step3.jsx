import React, { useState, useEffect } from 'react'
import './Step3.css'

export default function Step3({complete}) {
    return (
        <>
            <div className="row">
                <svg class="bi bi-arrow-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z" />
                    <path fill-rule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <h3>Step 3 of 3</h3>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <h1>What is the target for this fundraiser?</h1>
                    </div>
                    <div id="formGroup" className="row">
                        <div id="currency">
                            $USD
                </div>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </>
    )
}