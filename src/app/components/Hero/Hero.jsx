"use client";
import React from 'react';
import styles from './hero.module.css';
import { Button } from '../Button/Button';
import Image from 'next/image';

export const Hero = () => {

    return (
        <>
            <div className={styles.hero_container}>
                <div className={styles.text_section}>
                    <div className={styles.heading}>
                        <h1>DRIVE WITH TRUST INVOICE WITH FREEDOM</h1>
                    </div>
                    <div className={styles.para}>
                        <p>Your ultimate solution for TVDE drivers looking for an integrated and hassle-free car rental experience.</p>
                        <Button text={"Start Your Journey"} />
                    </div>
                </div>
                <div className={styles.image_section}>
                    <div className={styles.image}>
                        <Image width={1000} height={550} src="/image/heroimg.webp" alt='hero' />
                    </div>
                </div>
            </div>
        </>
    )
}
