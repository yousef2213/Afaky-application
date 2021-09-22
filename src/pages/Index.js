import React, { useEffect, useState } from 'react'
import Logo from "../logo.png"

export default function Index() {


    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                <div className="col-12 text-center">
                    <img src={Logo} />
                </div>
            </div>
        </div>
    )
}
