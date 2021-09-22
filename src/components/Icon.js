import React from "react";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";


function Icon() {

    const toggleSideBar = () => {
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
                </div>
            </div>
        </div>
    )
}

export default Icon
