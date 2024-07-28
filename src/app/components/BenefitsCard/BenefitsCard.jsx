// Correct example:
"use client";
import React from 'react';
import styles from './benefitscard.module.css';
import Image from 'next/image';


export const BenefitsCard = ({ img, heading, para }) => {

  return (
    <>
      <div className={styles.benefits_card}>
        <Image width={60} height={20} src={img} alt={heading} />
        <h1>{heading}</h1>
        <p>{para}</p>
      </div>
    </>
  )
}
