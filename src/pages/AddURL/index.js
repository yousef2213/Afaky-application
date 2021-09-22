import React, { useEffect, useState } from 'react'
import Logo from "../../logo.png"

export default function Index() {
    const [link, setLink] = useState('https://afakyerp.com/');
    const [links, setLinks] = useState([]);
console.log(link);
    useEffect(() => {
        if( localStorage.getItem('linkAfaky') ) {
            let getLinks = JSON.parse(localStorage.getItem('linkAfaky'));
            setLink(getLinks)
        }
        // else {
        //     setTimeout(() => {
        //         window.location.replace('https://afakyerp.com/')
        //     }, 5000);
        // }
    }, [])


    const saveData = () => {
        // console.log(link);
        if(link !== 'https://afakyerp.com/'){
            localStorage.setItem('linkAfaky', JSON.stringify(link));
        }
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                <div className="col-12 text-center">
                    <img src={Logo} className="mt-4" />
                    <input type="text" className="form-control mt-5 mb-3" value={link} onChange={e => setLink(e.target.value) } placeholder="Add Your URL" />
                    {/* <a href={link} className="btn btn-outline-danger" onClick={() => saveData()}> Go To Link </a> */}
                    {/* <a href={link} className="btn btn-site d-block" onClick={() => saveData()}> Go To Link </a> */}
                    
                    {link === '' ? 
                        <button className="btn btn-site d-block w-100" disabled> Go To Link </button>
                    : 
                        <a href={link} className="btn btn-site d-block" onClick={() => saveData()}> Go To Link </a>
                    }
                    {/* <a href="#" className="btn btn-outline-danger" onClick={() => saveData(link)}> Go To Link </a> */}
                </div>

            </div>
        </div>
    )
}
