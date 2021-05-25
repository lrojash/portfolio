import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import Earth from '../components/Earth'

import Intro from '../components/Intro'
import '../styles/home.css'
import '../styles/intro.scss'

function Home() {
    return (
        <div id="home" className="home glitch" style={{height: '100vh', weight: '100vw', display: 'flex'}}>
            <section className="intro" style={{ height: '100vh', width: '50%', position: 'relative', zIndex: '1' }}>
                <Intro />
                <button className="nav-button">
                    Portfolio
                </button>
            </section>
            <div className="earth" style={{ height: '100vh', width: '100%', position: 'absolute', zIndex: '0', paddingLeft: '50%' }}>
                <Canvas camera={{ position: [3, 3.0, 3.0], fov: 85, far: 1000 }}>
                    <Suspense fallback={null}>
                        <Earth />
                    </Suspense>
                </Canvas>
            </div>
        </div>

    )
}


export default Home