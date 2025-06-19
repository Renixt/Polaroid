'use client';
import { Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Camera2 from "./Camera2";

//canvas...-> resolucion
function CameraScene(){
    <Canvas gl={{antialias: true}} dpr={[1,1.5]}>
        <directionalLight position={[-5,-5,5]} intensity={2}/>
        <Suspense fallback={null}>
            <Center>
            <Camera2/>
            </Center>
        </Suspense>

    </Canvas>
}

export default CameraScene;