import React from 'react'
import '../styles/card.css'

const Card = (props) => {

    return (
        <div className="wrapper">
            <ul className="stage">
                <li className="scene">
                    <div className="project">
                        <div className="project-image"></div>
                        <div className="project-info">
                            <header>
                            </header>
                            <div className='project-details' style={{ textAlign: "center", padding: "-10rem" }}>
                                <h1>Teller Management System(TMS)</h1>
                                <p>Project Information</p>

                            </div>
                        </div>
                    </div>
                </li>

                <li className="scene">
                    <div className="project">
                        <div className="project-image"></div>
                        <div className="project-info">
                            <header>
                            </header>
                            <div className='project-details' style={{ textAlign: "center", padding: "-10rem" }}>
                                <h1>Track-Our-Universe</h1>
                                <p>Project Information</p>

                            </div>
                        </div>
                    </div>
                </li>


                <li className="scene">
                    <div className="project">
                        <div className="project-image"></div>
                        <div className="project-info">
                            <header>
                            </header>
                            <div className='project-details' style={{ textAlign: "center", padding: "-10rem" }}>
                                <h1>BakStabbers</h1>
                                <p>Project Information</p>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    )
}
export default Card