import React from 'react'
import Techs from '../components/Techs'
import '../styles/about.css'


function About() {
    return (
        <div className="about" id="about">
            <div className="text" style={{marginTop:'7vh'}}>
                <h1 style={{color: 'white', fontSize: '4.5rem'}}>About Me</h1>
                <p style={{fontSize: '1.4rem'}}>Hello! I am Luis, a software engineer based in Denver, CO.
               I enjoy tackling difficult problems while providing simple solutions that anyone can understand. As a developer I aim to create software that is visual appealing and fast.
               These characteristics are what make any application a long-term success.
               </p>
            </div>
            <div className="tech-conainter">
                <Techs />
            </div>
        </div>
    )
}
export default About