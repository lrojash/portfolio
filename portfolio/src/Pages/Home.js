import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import Earth from '../components/Earth'

import '../styles/styles.css'
import '../styles/home.css'

function Home(props) {

    const onClick = () => {
        props.history.push('/projects')
    }

    return (
        <div className="home">
            <section className="intro">
                <h1>Hello!</h1>
                <h2>I'm Luis, and I am a Software Developer</h2>
            </section>
            <div className="earth">
                <Canvas camera={{ position: [0, 3, 3.0], fov: 85, far: 1000 }}>
                    <Suspense fallback={null}>
                        <Earth />
                    </Suspense>
                </Canvas>
            </div>
            <button className="nav-button" onClick={onClick}>
                View my work
            </button>
        </div>
    )
}
export default Home