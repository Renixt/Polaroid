"use client";
import { useGLTF } from "@react-three/drei";
import { Float } from "@react-three/drei";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useState, useRef, Fragment } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, MathUtils } from "three";
import React from "react";
import PhotoDialog from "./PhotoDialog";

import { useRouter } from 'next/navigation';


function Camera({ mouse }) {
  const { nodes, materials } = useGLTF('/media/polaroid_image_systemspectra.glb');
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { damping: 1, stiffness: 20 })
  const group = useRef(null);
  useFrame(({ camera }) => {
    group.current?.rotateZ(MathUtils.degToRad(.2)) //rotacion
  })

  const [isPhotoOpen, setIsPhotoOpen] = useState(false);


    const handleMouseDown = () => {
     // router.push('./pagina2'); // Cambia '/nueva-pagina' por la ruta deseada
      console.log('click')
      setIsPhotoOpen(true);
    };

    const closeDialog = () => {
      setIsPhotoOpen(false);
    };
  return (
    <>
      
    <Float>

      <group onPointerDown={handleMouseDown} rotation={[900, 600, .05]} ref={group}>
        <Mesh node={nodes.Object_2} mouse={mouse} />
        <Mesh node={nodes.Object_3} mouse={mouse} />
        <Mesh node={nodes.Object_4} mouse={mouse} />
        <Mesh node={nodes.Object_5} mouse={mouse} />
        <Mesh node={nodes.Object_6} mouse={mouse} />
        <Mesh node={nodes.Object_7} mouse={mouse} />
        <Mesh node={nodes.Object_8} mouse={mouse} />
        <Mesh node={nodes.Object_9} mouse={mouse} />
      </group>

    </Float>

    {isPhotoOpen && (
      <dialog open>
      <p>qqqq</p>
      <button onClick={closeDialog}>cerrar</button>
      </dialog>
    )}
    </>
  );
}

function Mesh({ node, mouse }) {
  const { castShadow, receiveShadow, geometry, material, rotation } = node;
  const rotationX = useTransform(mouse.x, [0, 1], [rotation.x - .2, rotation.x + .2])
  const rotationY = useTransform(mouse.y, [0, 1], [rotation.y + .2, rotation.y - .2])

  // const positionX = useTransform(mouse.x, [0,1], [position.x-.5, position.x+.5])
  // const positionY = useTransform(mouse.x, [0,1], [position.y-.5, position.y+.5])


  return (
    <motion.mesh
      castShadow={castShadow}
      receiveShadow={receiveShadow}
      geometry={geometry}
      material={material}
      rotation={rotation}
      // position={position}
      rotation-x={rotationY}
      rotation-y={rotationX}
    // position-x={positionX}
    // positionY={positionY}
    />
  )
}



useGLTF.preload('/media/polaroid_image_systemspectra.glb')
export default Camera;