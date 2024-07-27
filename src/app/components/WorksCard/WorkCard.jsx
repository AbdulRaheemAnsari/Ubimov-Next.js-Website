import React from 'react';
import styles from './workcard.module.css'

export const WorkCard = ( { img, count, heading} ) => {
  return (
    <>
    <div className={styles.WorkCard}>
        <div className={styles.graphics}>
            <img src={img} alt="" />
            <h1>{count}</h1>
        </div>
        <p>{heading}</p>
    </div>
    </>
  )
}
