"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Stars = ({ count = 1000 }) => {
    const pointsRef = useRef<THREE.Points>(null);

    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }

    useFrame(() => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.0002;
            pointsRef.current.rotation.x += 0.0001;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={count}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.015} color="#ffffff" sizeAttenuation={true} />
        </points>
    );
};

const Earth = () => {
    const meshRef = useRef<THREE.Mesh>(null);


    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.005;
        }
    });

    return (
        <Sphere ref={meshRef} args={[1, 64, 64]} position={[0, 0, 0]}>
            <meshStandardMaterial
                color="#4A90E2"
                metalness={0.1}
                roughness={0.8}
            />
        </Sphere>
    );
};

const Planet3D = () => {
    return (
        <div className="w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 3], fov: 50 }}
                style={{ background: 'transparent' }}
            >
                <Stars />
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
                <directionalLight position={[-5, 5, 5]} intensity={0.6} color="#ffffff" />
                <Earth />
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI - Math.PI / 3}
                    autoRotate={true}
                    autoRotateSpeed={0.3}
                />
            </Canvas>
        </div>
    );
};

export default Planet3D;
