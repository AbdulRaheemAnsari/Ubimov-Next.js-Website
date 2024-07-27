"use client";
import React from 'react';
import styles from './ourvehicles.module.css';
import { CarCard } from '../CarCards/CarCard';
import { Button2 } from '../Button2/Button2';

export const OurVehicles = () => {
  return (
    <>
      <div className={styles.vehicles} id="vehicles_section" name="vehicles_section">
        <div className={styles.text_section}>
          <h1>OUR RANGE OF VEHICLES</h1>
          <p>We have a wide range of rental vehicles so you can start earning quickly without needing to use your own vehicle.</p>
        </div>
        <div className={styles.car_cards_section}>
          <CarCard img={"/image/car1.webp"} heading={"UberX | € 230 /week"} />
          <CarCard img={"/image/car2.webp"} heading={"UberXL | € 275 /week"} />
          <CarCard img={"/image/car3.webp"} heading={"Uber Green | € 325 /week"} />
        </div>
        <div className={styles.joinustoday_button}>
          <Button2 text={"Join us today"} />
        </div>
      </div>
    </>
  )
}
