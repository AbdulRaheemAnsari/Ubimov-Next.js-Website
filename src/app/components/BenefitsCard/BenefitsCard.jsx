import React from 'react';
import styles from './benefitscard.module.css';

export const BenefitsCard = ( {img, heading, para} ) => {
  return (
    <>
    <div className={styles.benefits_card}>
        <img src={img} alt="" />
        <h1>{heading}</h1>
        <p>{para}</p>
    </div>
    </>
  )
}
