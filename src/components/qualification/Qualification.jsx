import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, settoggleState] = useState(1)
  return (
    <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My Personel Journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className={toggleState === 1 ? "qualification_button button_flex qualification_active" : "qualification_button button_flex"} onClick={() => settoggleState(1)}>
                    <i className="uil uil-graduation-cap qualification_icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification_button button_flex qualification_active" : "qualification_button button_flex"} onClick={() => settoggleState(2)}>
                    <i className="uil uil-briefcase-alt qualification_icon"></i> Experience
                </div>
            </div>

            <div className="qualification_sections">
                <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">SSLC</h3>
                            <span className="qualification_subtitle">Bharathidasan Matriculation Hr. Sec School - Kanchipuram</span>
                            <span className="qualification_subtitle">8.52</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2016 - 2017
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">HSC</h3>
                            <span className="qualification_subtitle">Bharathidasan Matriculation Hr. Sec School - Kanchipuram</span>
                            <span className="qualification_subtitle">7.4</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2019
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">BE - ECE</h3>
                            <span className="qualification_subtitle">Adhiparasakthi College of Engineering - Kalavai</span>
                            <span className="qualification_subtitle">8.45</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Fresher</h3>
                            <span className="qualification_subtitle">------</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2023 - present
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder last-rounder"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
