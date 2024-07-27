import React from 'react';
import styles from './button2.module.css';
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link as ScrollLink } from 'react-scroll';

export const Button2 = ({ text }) => {
    return (
        <div className={styles.driverbutton2}>
            <ScrollLink to="apply_section" smooth={true} duration={1200} offset={-70}>
                <button>{text} <MdOutlineArrowOutward className={styles.icon2} /> </button>
            </ScrollLink>
        </div>
    )
}
