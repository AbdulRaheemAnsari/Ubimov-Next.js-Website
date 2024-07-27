import React from 'react';
import styles from './ourbenefits.module.css';
import { BenefitsCard } from '../BenefitsCard/BenefitsCard';
import { Button2 } from '../Button2/Button2';
import Image from 'next/image';

export const OurBenefits = () => {
  return (
    <>
      <div className={styles.ourbenefits} id="ourbenefits_section" name="ourbenefits_section">
        <div className={styles.text_section}>
          <h1>OUR BENEFITS</h1>
          <p>When you join the Ubimov team, enjoy weekly payments, flexible earnings and no credit check, just a deposit.</p>
          <div className={styles.joinusbutton}>
            <Button2 text={"Join us today"} />
          </div>
          {/* <img src="https://ubimov.com/_next/static/media/benefits.176e3004.svg" alt="" /> */}
          <Image src="https://ubimov.com/_next/static/media/benefits.176e3004.svg" />
        </div>
        <div className={styles.cart_section}>
          <BenefitsCard img={"https://ubimov.com/svgs/benefit1.svg"} heading={"Additional Income"} para={"Weekly income. The more you drive, the more income you will get - It's that simple."} />
          <BenefitsCard img={"https://ubimov.com/svgs/benefit2.svg"} heading={"Flexible schedule"} para={"Find a job where you have the flexibility to decide what days/hours you want to work."} />
          <BenefitsCard img={"https://ubimov.com/svgs/benefit3.svg"} heading={"Total Transparency"} para={"You will receive a weekly report on your earnings and discounts."} />
          <BenefitsCard img={"https://ubimov.com/svgs/benefit4.svg"} heading={"Full Support"} para={"You will receive support from the Ubimov team, assisting you with maintenance, replacement vehicle, and others."} />
          <BenefitsCard img={"https://ubimov.com/svgs/benefit5.svg"} heading={"Cost Discounts"} para={"Receive discounts at gas stations from partner fleet companies."} />
          <BenefitsCard img={"https://ubimov.com/svgs/benefit6.svg"} heading={"Less Bureaucracy"} para={"We take care of all the documentation relating to the vehicle and the TVDE platforms, so that you can drive with peace of mind."} />
        </div>
      </div>
    </>
  )
}
