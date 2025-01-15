//components/Floor.jsx
"use client";

import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Camera from "./Camera";
import { useEffect, useState, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { Raycaster, Vector2 } from "three";

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

  //estado que almacena el objeto que ha sido intersectado
  const [intersectedObject, setIntersectedObject] = useState(null); 
  const canvasRef = useRef(); //referencia al canvas de r3f
  const raycaster = useRef(new Raycaster()); //genera un rayo desde la posicion del mouse
  const mouseVector = useRef(new Vector2());

  const handleClick = (e) => {
    const {clientX, clientY} = e
    const {innerWidth, innerHeight} = window;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;

    //actualizar la pasicion en el raycaaster 
    mouseVector.current.set(x,y);
    //lanza el rayo
    raycaster.current.update();
    //verifica las intersecciones
    const intersects  = raycaster.current.intersectObjects(canvasRef.current.children, true);

    if (intersects.length>0){
      setIntersectedObject(intersects[0].object);
      console.log("HICISTE CLIC", intersects[0].object);

    }else{
      setIntersectedObject(null);
    }

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
    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("click", handleClick);
    return () => {window.removeEventListener("mousemove", manageMouseMove);
  window.removeEventListener("click",handleClick);};
  }, [])

  //RAYCASTER

  

  return (
    
    <Canvas orthographic camera={{ position: [0, 0, 200], zoom: 10 }}>
     
     
      <Camera mouse={smoothMouse} intersectObjects={intersectedObject}  />
      
      <Environment preset="studio" />
    </Canvas>
  );
}

export default index;