"use client";
import React from 'react';
import styles from './howitwork.module.css';
import { WorkCard } from '../WorksCard/WorkCard';
import { Button } from '../Button/Button';

export const HowItWork = () => {
  return (
    <>
      <div className={styles.howitwork} id="work_section" name="work_section">
        <div className={styles.heading_section}>
          <h1>HOW IT WORKS?</h1>
          <p>Drive with us with simplicity and flexibility, working your preferred hours and with earning potential.</p>
        </div>
        <div className={styles.graphics_section}>
          <WorkCard img={"/image/charactor.svg"} count={"01"} heading={"Contact us."} />
          <WorkCard img={"/image/fileimage.svg"} count={"02"} heading={"Submit the necessary documentation."} />
          <WorkCard img={"/image/carimage.svg"} count={"03"} heading={"We'll hook it up to a car and you'll be on the road in no time."} />
        </div>
        <div className={styles.apply_button}>
          <Button text={"Apply today"} />
        </div>
      </div>
    </>
  )
}
