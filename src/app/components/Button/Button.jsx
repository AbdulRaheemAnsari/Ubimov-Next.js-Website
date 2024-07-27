import React from 'react';
import styles from './button.module.css';
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link as ScrollLink } from 'react-scroll';

export const Button = ({ text }) => {
    return (
        <div className={styles.driverbutton}>
            <ScrollLink to="apply_section" smooth={true} duration={1200} offset={-70}>
                <button>{text} <MdOutlineArrowOutward className={styles.icon} /></button>
            </ScrollLink>
        </div>
    )
}
