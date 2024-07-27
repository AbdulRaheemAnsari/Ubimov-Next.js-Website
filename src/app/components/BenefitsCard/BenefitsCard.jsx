import React from 'react';
import styles from './benefitscard.module.css';
import Image from 'next/image';

export const BenefitsCard = ({ img, heading, para }) => {
  return (
    <>
      <div className={styles.benefits_card}>
        {/* <img src={img} alt="" /> */}
        <Image src={img} />
        <h1>{heading}</h1>
        <p>{para}</p>
      </div>
    </>
  )
}
