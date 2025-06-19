//components/Floor.jsx
"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Camera from "./Camera";
import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

function index() {
  //grab the position of the mouse and store it inside of a state
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothMouse = {
    x: useSpring(mouse.x, {stiffness:75, damping:100, mass:3}),
    y: useSpring(mouse.y, {stiffness:75, damping:100, mass:3})
  }

  const manageMouseMove = (e) => {
    const {clientX, clientY} = e
    const {innerWidth, innerHeight} = window;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  }

  useEffect(()=> {
    window.addEventListener("mousemove", manageMouseMove)
    return () => (window.removeEventListener("mousemove", manageMouseMove))
  }, [])

  //RAYCASTER
 // projector = new THREE.Projector();
  //var raycaster = projector.pickingRay(mouse.clone(), camera);
  return (
    
    <Canvas orthographic camera={{ position: [0, 0, 200], zoom: 10 }}>
     
     
      <Camera mouse={smoothMouse}  />
      
      <Environment preset="studio" />
    </Canvas>
  );
}

export default index;