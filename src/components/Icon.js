import React from "react";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";


function Icon() {

    const [check, setCheck] = useState(false)
    useEffect(() => {
        if( localStorage.getItem('linkAfaky') ) {
            document.querySelector('.btn-setting').classList.add('activeLink');
            setCheck(true)
        }
    }, [])

    useEffect(() => {
        funCheck();
    }, [check])

    let myVar;
    const funCheck = () => {
        myVar = setTimeout(() => {
            if(check){
                // console.log();
                window.location.replace(JSON.parse(localStorage.getItem('linkAfaky')))
            }
        }, 5000);
        
    }

    const toggleSideBar = () => {
        if(check){
            document.querySelector('.btn-setting').classList.remove('activeLink');
            setCheck(false)
            clearTimeout(myVar);
        }
        document.querySelector('.setting').classList.toggle('toggleSideBar')
    }

    return (
        <div className="icon">
            <button className="btn btn-primary btn-setting btn-site" onClick={() => toggleSideBar()}> <BsReverseLayoutTextSidebarReverse /> </button>
            <div className="setting">
                <button className="btn btn-primary my-2 mx-3" onClick={() => toggleSideBar()}> <AiOutlineClose /> </button>
                <div className="list-group mt-2">
                    <Link to="/" className="list-group-item item-sideBar list-group-item-action" onClick={() => toggleSideBar()}>الرئيسية</Link>
                    <Link to="/add-url" className="list-group-item item-sideBar list-group-item-action" onClick={() => toggleSideBar()}>الاعدادات</Link>
                    <Link to="/setting" className="list-group-item item-sideBar list-group-item-action" onClick={() => toggleSideBar()}>اعدادات الروابط</Link>
                </div>
            </div>
        </div>
    )
}

export default Icon
