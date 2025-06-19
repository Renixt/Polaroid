"use client";
import "./globals.css";
import styles from './page.module.css';
import CameraShape from './components/CameraShape';
import PolaroidButton from '@/app/components/Buttons/PolaroidButton';
import dynamic from "next/dynamic";
//import CameraScene from "./components/CameraShape/CameraScene";




export default function Home(){
    return(
        <main className={styles.main}>
          <CameraShape/>
        </main>
    )
}

/* 
<PolaroidButton className='bg-slate-600'/>


const CameraScene = dynamic(() => import("./components/CameraShape/CameraScene"), {
    ssr:false,
})
*/