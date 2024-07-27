"use client";
import React from 'react';
import styles from './fotter.module.css';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import Image from 'next/image';

export const Fotter = () => {
    return (
        <div className={styles.fotter}>
            <div className={styles.top}>
                <Image width={40} height={40} src="/image/fotterlogo.svg" alt='fotter' />
                <div className={styles.text}>
                    <div className={styles.contact}>
                        <h1>CONTACT</h1>
                        <ul>
                            <Link href="mailto:hello@ubimov.com"><li>hello@ubimov.com</li></Link>
                            <Link href="https://wa.me/351910570791" target="_blank" rel="noopener noreferrer"><li>+351 910 570 791</li></Link>
                        </ul>
                    </div>
                    <div className={styles.navigation}>
                        <h1>NAVIGATION</h1>
                        <div className={styles.links}>
                            <div className={styles.ul}>
                                <ScrollLink to="about_section" smooth={true} duration={1200} offset={-70}>
                                    <li>About Us</li>
                                </ScrollLink>
                                <ScrollLink to="work_section" smooth={true} duration={1200} offset={-70}>
                                    <li>Process</li>
                                </ScrollLink>
                                <ScrollLink to="vehicles_section" smooth={true} duration={1200} offset={-70}>
                                    <li>Vihicles</li>
                                </ScrollLink>
                            </div>
                            <div className={styles.ul}>
                                <ScrollLink to="benefits_section" smooth={true} duration={1200} offset={-70}>
                                    <li>Benefits</li>
                                </ScrollLink>
                                <ScrollLink to="ourbenefits_section" smooth={true} duration={1200} offset={-70}>
                                    <li>Benefits</li>
                                </ScrollLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <h1>© 2023 Ubimov. All rights reserved.</h1>
                <div className={styles.profile_link}>
                    <Link href="https://www.facebook.com/profile.php?id=61552288696903" target="_blank" rel="noopener noreferrer" ><FaFacebook cursor={"pointer"} /></Link>
                    <Link href="https://www.linkedin.com/company/ubimov/" target="_blank" rel="noopener noreferrer"><FaLinkedin cursor={"pointer"} /></Link>
                </div>
            </div>
        </div>
    )
}
