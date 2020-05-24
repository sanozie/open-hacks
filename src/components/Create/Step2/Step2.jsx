import React, { useState, useEffect } from 'react'
import './Step2.css'

export default function Step2({complete}) {
    return (
    <>
    <div className="row">
        <h3>Step 2 of 3</h3>
    </div>
    <div className="row">
        <div className="col-12">
            <div className="row">
                <h1>What should we call your fundraiser?</h1>
            </div>
            <div id="formGroup" className="row">
                <input type="text" className="w-100"/>
            </div>
        </div>
    </div>  
    </>
    )
}