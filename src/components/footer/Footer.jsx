import React from 'react'
import './footer.css'

const Footer = () => {

    const instaLink = process.env.REACT_APP_INSTA;
    const linkedinLink = process.env.REACT_APP_LINKEDIN;
    const githubLink = process.env.REACT_APP_GITHUB;
    
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Karunanithi</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer_link">Projects</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href={linkedinLink} className="home_social_icon linkedin" target='_blank'>
                    <i className="uil uil-linkedin-alt"></i>
                </a>
                <a href={githubLink} className="home_social_icon github" target='_blank'>
                    <i className="uil uil-github-alt"></i>
                </a>
                <a href={instaLink} className="home_social_icon instagram" target='_blank'>
                <i className="uil uil-instagram"></i>
                </a>
            </div>

            <span className="footer_copy">&#169; Source Crypticalcoder</span>
        </div>
    </footer>
  )
}

export default Footer
