"use client"
import { Button } from '../Button/Button';
import styles from './navbar.module.css';
import { Link as ScrollLink } from 'react-scroll';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
    const [menu, setMenu] = useState(false);


    const openMenu = () => {
        setMenu((prev) => !prev);
    }

    const menuclose = () => {
        setMenu(false);
    }


    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    {/* <img className='cursor-pointer' src="https://ubimov.com/_next/static/media/logo.f39f1d07.svg" alt="Logo" /> */}
                    <Image className='cursor-pointer' src="https://ubimov.com/_next/static/media/logo.f39f1d07.svg" />
                </div>
                <div className={styles.menu}>
                    <div className={styles.lilinks}>
                        <ScrollLink to="about_section" smooth={true} duration={900} offset={-70}>
                            <li className="cursor-pointer">About Us</li>
                        </ScrollLink>
                        <ScrollLink to="benefits_section" smooth={true} duration={900} offset={-70}>
                            <li className="cursor-pointer">Benefits</li>
                        </ScrollLink>
                        <ScrollLink to="work_section" smooth={true} duration={900} offset={-70}>
                            <li className="cursor-pointer">Process</li>
                        </ScrollLink>
                        <ScrollLink to="ourbenefits_section" smooth={true} duration={900} offset={-70}>
                            <li className="cursor-pointer">Benefits</li>
                        </ScrollLink>
                        <ScrollLink to="vehicles_section" smooth={true} duration={900} offset={-70}>
                            <li className="cursor-pointer">Vehicles</li>
                        </ScrollLink>
                    </div>
                    <div className={styles.driver_button}>
                        <Button text={"Become a driver"} />
                    </div>

                    <div onClick={openMenu} className={styles.menuicon}>
                        <div className={`${styles.menudiv} ${menu ? styles.isactive_cross : ""}`}>
                            <div className={styles.top_line} id={styles.icon}></div>
                            <div className={styles.bottom_line} id={styles.icon}></div>
                        </div>
                    </div>
                    <div className={` ${styles.menu_container} ${menu ? styles.opencontainer : ""}`}>
                        <div className={styles.meneresponsive}>
                            <ScrollLink to="about_section" smooth={true} duration={900} offset={-70}>
                                <h1 onClick={menuclose}>About us</h1>
                            </ScrollLink>
                            <ScrollLink to="benefits_section" smooth={true} duration={900} offset={-70}>
                                <h1 onClick={menuclose}>Benefits</h1>
                            </ScrollLink>
                            <ScrollLink to="work_section" smooth={true} duration={900} offset={-70}>
                                <h1 onClick={menuclose}>Process</h1>
                            </ScrollLink>
                            <ScrollLink to="ourbenefits_section" smooth={true} duration={900} offset={-70}>
                                <h1 onClick={menuclose}>Benefits</h1>
                            </ScrollLink>
                            <ScrollLink to="vehicles_section" smooth={true} duration={900} offset={-70}>
                                <h1 onClick={menuclose}>Vehicles</h1>
                            </ScrollLink>
                        </div>

                        <div className={styles.link_container}>
                            <div className={styles.links}>
                                <Link onClick={menuclose} href="mailto:hello@ubimov.com"><li>hello@ubimov.com</li></Link>
                                <Link onClick={menuclose} href="https://wa.me/351910570791" target="_blank" rel="noopener noreferrer"><li>+351 910 570 791</li></Link>
                                <ScrollLink to="apply_section" smooth={true} duration={1200} offset={-70}>
                                    <p onClick={menuclose}>Become a driver</p>
                                </ScrollLink>
                            </div>
                            <div className={styles.profile_link}>
                                <Link onClick={menuclose} href="https://www.facebook.com/profile.php?id=61552288696903" target="_blank" rel="noopener noreferrer" ><FaFacebook cursor={"pointer"} /></Link>
                                <Link onClick={menuclose} href="https://www.linkedin.com/company/ubimov/" target="_blank" rel="noopener noreferrer"><FaLinkedin cursor={"pointer"} /></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
};


