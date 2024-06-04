import React, { useState } from 'react'
import './projects.css'
import { Data } from './Data'

// Swiper Components
import { Swiper, SwiperSlide } from 'swiper/react'

// Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from 'swiper/modules'

// Swiper required modules

const Projects = () => {

    const [videoPlay, setvideoPlay] = useState(false)
    const [videoURL, setvideoURL] = useState("")

  return (
    <section className="projects container section" id="projects">

        <h2 className="section_title">Projects</h2>
        <span className="section_subtitle">Some samples of my projects</span>

        <Swiper className="projects_container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
            }} 
            modules={[Pagination]}    
        >
            {Data.map((data) => {
                return(
                    <SwiperSlide className="projects_card" key={data.id}>
                        <img src={data.image} alt="" className='projects_img'/>

                        <h3 className="projects_title">{data.title}</h3>
                        <p className="projects_description">{data.description}</p>
                        <br/>
                        {data.id === 6 ? 
                                <a href={data.projectVideo} target='_blank' className="projects_button">
                                    View More
                                    <i className="uil uil-arrow-right projects_button_icon"></i>
                                </a>
                            :
                                <span className="projects_button" onClick={() =>{ setvideoPlay(true); setvideoURL(data.projectVideo)}}>
                                    View Video
                                    <i className="uil uil-arrow-right projects_button_icon"></i>
                                </span>
                        }
                    </SwiperSlide>
                )
            })}
        </Swiper>

        <div className={videoPlay ? "projects_modal projects_active-modal" : "projects_modal"}>
            <div className="projects_modal-content">
                <i className="uil uil-times projects_modal-close" onClick={() => { setvideoPlay(false); setvideoURL("") }}></i>
                <video src={videoURL} loop controls autoPlay></video>
            </div>
        </div>
        
    </section>
  )
}

export default Projects
