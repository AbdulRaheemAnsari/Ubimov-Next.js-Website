import React from 'react';
import styles from './benefits.module.css';
import { Cards } from '../Cards/Cards';

export const Benefits = () => {
  return (
    <>
    <div className={styles.benefits_section} id="benefits_section" name="benefits_section">
        <div className={styles.left_section}>
            <h1>OUR PROPOSAL AND ADVANTAGE.</h1>
        </div>
        <div className={styles.right_section }>
            <Cards heading={"Maintenance and Support"} tags1={"Maintenance included"} tags2={"Unlimited tires"} tags3={"24X7 Helpline"}  />
            <Cards heading={"Financial Flexibility"} tags1={"Weekly payments"} tags2={"Flexible earnings"} tags3={"No credit analysis (only security deposit)"}  />
            <Cards heading={"Economics and Cost Control"} tags1={"Fleet discount fuel cards"} tags2={"100% online management"} />
            <Cards heading={"Insurance and Protection"} tags1={"Insurance against all"} tags2={"Replacement vehicle"} />
        </div>
    </div>
    </>
  )
}
