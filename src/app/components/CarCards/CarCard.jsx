import React from 'react';
import styles from './carcards.module.css';

export const CarCard = ( {img, heading} ) => {
  return (
    <div className={styles.car_cards}>
        <h1>{heading}</h1>
        <img src={img} alt="" />
    </div>
  )
}
