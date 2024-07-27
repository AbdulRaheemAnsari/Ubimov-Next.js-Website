"use client";
import React from 'react';
import styles from './workcard.module.css'
import Image from 'next/image';

export const WorkCard = ({ img, count, heading }) => {

  return (
    <>
      <div className={styles.WorkCard}>
        <div className={styles.graphics}>
          <Image src={img} alt={heading} width={100} height={100} />
          <h1>{count}</h1>
        </div>
        <p>{heading}</p>
      </div>
    </>
  )
}
