import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import Earth from '../components/Earth'
import '../styles/styles.css'

function Home() {
    return (
        <div className="earth">
            <Canvas camera={{ position: [0, 3, 3.0], fov: 75, far: 1000 }}>
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>

        </div>
    )
}
export default Home 