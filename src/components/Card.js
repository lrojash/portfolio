import React from 'react'
import '../styles/card.css'
import { GithubOutlined } from '@ant-design/icons'


function Card(props) {
    return (
        <div className="project">
            <div className="project-image"></div>
            <div className="project-info">
                <header style={{ height: '12.5vh' }}></header>
                <div className='project-details' style={{ height: '32vh', textAlign: 'center', color: 'white' }}>
                    <h1 style={{ fontSize: 'large', color: 'white' }}>{props.title}</h1>
                    <p style={{ fontSize: 'small' }}>{props.description}</p>
                </div>
                <button onClick={() => window.open(props.site)}>
                    <GithubOutlined style={{ color: 'rgb(27, 210, 33)', fontSize: '4em', position: 'absolute', left: '40%', bottom: '5%' }} />
                </button>

            </div>
        </div>

    )
}

export default Card