import React, {useEffect, useState} from "react";
import "./Navbar.css"

function Navbar() {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100 ) {
                handleShow(true)
            } else handleShow(false)

        })
        return () => { 
            window.removeEventListener("scroll",null)
        }
    }, [])

    return (
        <div className={`navbar ${show && 'nav-show'}`}>
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="logo"/>
            <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user-avatar" />
        </div>
    )
}

export default Navbar;