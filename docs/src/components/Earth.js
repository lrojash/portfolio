import React, { useState, useEffect } from 'react'
import { useFrame, useLoader } from 'react-three-fiber'
import earthImg from '../images/earthlights1k.jpg'
import earthBump from '../images/bump.jpg'
import earthSpec from '../images/earthspec1k.jpg'
import * as THREE from 'three'



function Earth() {
    const [ref, setRef] = useState()
    const texture = useLoader(THREE.TextureLoader, earthImg)
    const bump = useLoader(THREE.TextureLoader, earthBump)
    const spec = useLoader(THREE.TextureLoader, earthSpec)


    useEffect(() => {
        if (ref) {
            ref.rotation.y -= .25
        }
    }, [ref])
    useFrame(() => (ref.rotation.y += 1 / 860
    ))

    return (
        <group>
            <ambientLight intensity={2.50} />
            <mesh ref={setRef}>
                <sphereBufferGeometry attach="geometry" args={[2.2, 64, 64]} />
                <meshPhongMaterial attach="material" map={texture} bumpMap={bump} bumpScale={.005} specular={'grey'} specularMap={spec} />
            </mesh>
        </group>
    )
}

export default Earth