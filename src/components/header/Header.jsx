import React, { useState } from 'react'
import './header.css'
import logo from '../../assets/Nivak.png'

const Header = () => {
    /*----------> CHANGE BACKGROUND HEADER <----------*/
    window.addEventListener('scroll', function () {
        const header = document.querySelector(".header");

        if(this.scrollY >= 80){
            header.classList.add("scroll-header")
        }
        else {
            header.classList.remove("scroll-header")
        }
    })


    /*----------> TOGGLE MENU <----------*/
    const [Toggle, setToggle] = useState(false)
    const [activeNav, setactiveNav] = useState('#home')
    
  return (
    <header className="header">
        <nav className="nav container">
            <a href="/" className="nav_logo"><img src={logo} alt="Nivak" width='100px'/></a>

            <div className={Toggle ? "nav_menu show-menu":"nav_menu"}>
                <ul className="nav_list grid">
                    <li className="nav_item" onClick={() => setToggle(false)}>
                        <a href="#home" className={activeNav === "#home" ? "nav_link active-link" : "nav_link"} onClick={() => setactiveNav("#home")}>
                            <i className="uil uil-estate nav_icon"></i> Home
                        </a>
                    </li>

                    <li className="nav_item" onClick={() => setToggle(false)}>
                        <a href="#about" className={activeNav === "#about" ? "nav_link active-link" : "nav_link"} onClick={() => setactiveNav("#about")}>
                            <i className="uil uil-user nav_icon"></i> About
                        </a>
                    </li>

                    <li className="nav_item" onClick={() => setToggle(false)}>
                        <a href="#skills" className={activeNav === "#skills" ? "nav_link active-link" : "nav_link"} onClick={() => setactiveNav("#skills")}>
                            <i className="uil uil-file-alt nav_icon"></i> Skills
                        </a>
                    </li>

                    <li className="nav_item" onClick={() => setToggle(true)}>
                        <a href="#services" className={activeNav === "#services" ? "nav_link active-link" : "nav_link"} onClick={(e) => {setactiveNav("#services"); e.preventDefault()}} style={{color: 'var(--title-color-dark)', cursor:'not-allowed'}}>
                            <i className="uil uil-briefcase-alt nav_icon"></i> Services
                        </a>
                    </li>

                    <li className="nav_item" onClick={() => setToggle(false)}>
                        <a href="#projects" className={activeNav === "#projects" ? "nav_link active-link" : "nav_link"} onClick={() => setactiveNav("#projects")}>
                            <i className="uil uil-scenery nav_icon"></i> Projects
                        </a>
                    </li>

                    <li className="nav_item" onClick={() => setToggle(false)}>
                        <a href="#contact" className={activeNav === "#contact" ? "nav_link active-link" : "nav_link"} onClick={() => setactiveNav("#contact")}>
                            <i className="uil uil-message nav_icon"></i> Contact
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav_close" onClick={()=>setToggle(!Toggle)}></i>
            </div>

            <div className="nav_toggle" onClick={()=>setToggle(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header