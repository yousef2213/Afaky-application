import React, { useEffect, useState } from 'react'
import Logo from "../logo.png"

export default function Index() {


    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                <div className="col-12 text-center">
                    {/* <h1 className="text-center py-3">Welcome to Afaky</h1> */}
                    <img src={Logo} />
                </div>
            </div>
        </div>
    )
}
