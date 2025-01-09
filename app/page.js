"use client";
import "./globals.css";
import styles from './page.module.css';
import CameraShape from './components/CameraShape';
import PolaroidButton from '@/app/components/Buttons/PolaroidButton';
export default function Home(){
    return(
        <main className={styles.main}>
            <CameraShape/>
            <PolaroidButton className='bg-slate-600'/>

        </main>
    )
}