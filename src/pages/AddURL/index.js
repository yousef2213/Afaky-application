import React, { useEffect, useState } from 'react'
import Logo from "../../logo.png"

export default function Index() {
    const [link, setLink] = useState('');
    const [links, setLinks] = useState([]);

    useEffect(() => {
        if( localStorage.getItem('linkAfaky') ) {
            let getLinks = JSON.parse(localStorage.getItem('linkAfaky'));
            window.location.replace(getLinks)
            console.log(getLinks);
        }
    }, [])

    // const saveData = link => {
    //     let filterLinks = links.find(item => item == link);
    //     if(!filterLinks){
    //         links.push(link);
    //         localStorage.setItem('linkAfaky', JSON.stringify(links))         
    //     }
    // }

    const saveData = () => {
        // console.log(link);
        localStorage.setItem('linkAfaky', JSON.stringify(link));
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                <div className="col-12 text-center">
                    <img src={Logo} className="mt-4" />
                    <input type="text" className="form-control mt-5 mb-3" onChange={e => setLink(e.target.value) } placeholder="Add Your URL" />
                    {/* <a href={link} className="btn btn-outline-danger" onClick={() => saveData()}> Go To Link </a> */}
                    <a href={link} className="btn btn-site d-block" onClick={() => saveData()}> Go To Link </a>
                    {/* <a href="#" className="btn btn-outline-danger" onClick={() => saveData(link)}> Go To Link </a> */}
                </div>
                <div className="col-12 mx-auto">
                <div className="list-group">
                    {links.map(( item, i ) => {
                        return (
                            <div className="item bg-light d-flex justify-content-between my-2" key={i}>
                                <a href={item} className="list-group-item list-group-item-action"> 
                                    <span> { item } </span>
                                </a>
                                <button className="btn btn-danger py-1"> Remove </button>
                            </div>
                            
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}
