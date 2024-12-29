'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
    const ref = useRef<THREE.Points>(null!);

    // Generate particles
    const particles = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
        const i3 = i * 3;
        particles[i3] = (Math.random() - 0.5) * 100; // Wider horizontal spread
        particles[i3 + 1] = (Math.random() - 0.5) * 100; // Wider vertical spread
        particles[i3 + 2] = (Math.random() - 0.5) * 100; // Wider depth spread
    }

    // Rotate particles for animation
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#fff"
                size={0.5} // Increase size if particles are too far
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    );
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 z-0">
            <Canvas
                camera={{
                    position: [0, 0, 200], // Move the camera far along Z-axis
                    fov: 75, // Field of View remains wide for better perspective
                }}
            >
                <ParticleField />
            </Canvas>
        </div>
    );
}
