"use client";
import {useGLTF} from "@react-three/drei";

function Camera2() {
    const { nodes, materials, scene } = useGLTF('/media/polaroid_image_systemspectra.glb');
   
  return (
    <Float>
      
    <group rotation={[900, 600, .05]}>
       <primitive object={scene}/>
    </group>
    
    </Float>
  );
}

useGLTF.preload('/media/polaroid_image_systemspectra.glb')
export default Camera2;