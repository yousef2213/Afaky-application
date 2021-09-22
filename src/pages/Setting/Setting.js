import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Setting() {
    const [linkPage, setLinkPage] = useState('');

    useEffect(() => {
        if( localStorage.getItem('linkAfaky') ) {
            let getLinks = JSON.parse(localStorage.getItem('linkAfaky'));
            setLinkPage(getLinks);
        }
    }, [])

    const delLink = () => {
        localStorage.clear();
        window.location.replace(window.location.origin)
    }


    if(linkPage == ''){
        return (
            <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                <div>
                    <h2 className="text-canter"> لا يوجد روابط </h2>
                    <Link to="/add-url" className="btn btn-site"> الانتقال الي الاعدادات </Link>
                </div>
            </div>
        )
    }else {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                <div className="item bg-light d-flex justify-content-between my-2">
                    <a href={linkPage} className="list-group-item list-group-item-action"> 
                        <span>  {linkPage}  </span>
                    </a>
                    <button className="btn btn-danger py-1" onClick={() => delLink()}> Remove </button>
                </div>
            </div>
        )
    }
}

export default Setting
