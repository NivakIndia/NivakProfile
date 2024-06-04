import React from 'react'

const Social = () => {
    const instaLink = process.env.REACT_APP_INSTA;
    const linkedinLink = process.env.REACT_APP_LINKEDIN;
    const githubLink = process.env.REACT_APP_GITHUB;
  return (
    <div className="home_social">
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
  )
}

export default Social
