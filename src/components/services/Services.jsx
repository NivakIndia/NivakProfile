import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, settoggleState] = useState(0)

  return (
    <section className="services serction" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What i offer</span>

        <div className="services_container container grid">
            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">Product <br/> Designer</h3>
                </div>

                <span className="services_button" onClick={() => settoggleState(1)}>
                    View More
                    <i className="uil uil-arrow-right services_button_icon"></i>
                </span>

                <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i className="uil uil-times services_modal-close" onClick={() => settoggleState(0)}></i>
                        <h3 className="services_modal-title">Product Designer</h3>
                        <p className="services_modal-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-arrow services_icon"></i>
                    <h3 className="services_title">UI/UX <br/> Designer</h3>
                </div>

                <span className="services_button" onClick={() => settoggleState(2)}>
                    View More
                    <i className="uil uil-arrow-right services_button_icon"></i>
                </span>

                <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i className="uil uil-times services_modal-close" onClick={() => settoggleState(0)}></i>
                        <h3 className="services_modal-title">UI/UX Designer</h3>
                        <p className="services_modal-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-edit services_icon"></i>
                    <h3 className="services_title">Visual <br/> Designer</h3>
                </div>

                <span className="services_button" onClick={() => settoggleState(3)}>
                    View More
                    <i className="uil uil-arrow-right services_button_icon"></i>
                </span>

                <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i className="uil uil-times services_modal-close" onClick={() => settoggleState(0)}></i>
                        <h3 className="services_modal-title">Visual Designer</h3>
                        <p className="services_modal-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">Lorem ipsum dolor sit amet consectetur.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
