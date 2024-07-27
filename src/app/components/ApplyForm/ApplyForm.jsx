"use client";
import React, { useEffect, useState } from 'react';
import styles from './applyform.module.css';
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from 'next/image';

export const ApplyForm = () => {
    const [activeButton, setActiveButton] = useState(null);
    const [user, setUser] = useState({
        name: "",
        email: "",
        number: "",
        experience: null
    });

    const handleButtonClick = (button) => {
        setActiveButton(button);
        setUser({ ...user, experience: button });
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (user.name && user.email && user.number && user.experience) {
            alert("Form submitted successfully");
        } else {
            alert("Please fill all the fields");
        }
    }

    return (
        <div className={styles.ApplyForm} id="apply_section" name="apply_section">
            <div className={styles.form}>
                <div className={styles.heading}>
                    <h1>READY TO APPLY?</h1>
                    <p>Contact us today and we’ll bring your flexible working vision to life.</p>
                </div>

                <form onSubmit={submitForm}>
                    <div className={styles.form_container}>
                        <div className={styles.name}>
                            <label>Name</label>
                            <input
                                value={user.name}
                                onChange={(e) => setUser({ ...user, name: e.target.value })}
                                required
                                type="text"
                                placeholder='antaino Dilva'
                            />
                        </div>
                        <div className={styles.email}>
                            <label>Email</label>
                            <input
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                required
                                type="email"
                                placeholder='youremail@example.com'
                            />
                        </div>
                        <div className={styles.number}>
                            <label>Phone Number</label>
                            <input
                                value={user.number}
                                onChange={(e) => setUser({ ...user, number: e.target.value })}
                                required
                                type="text"
                                placeholder='+ 92 134 834 935'
                            />
                        </div>
                        <div className={styles.TVDE_container}>
                            <h1>Do you have any experience in TVDE? *</h1>
                            <div className={styles.button}>
                                <button
                                    type="button"
                                    className={activeButton === 'yes' ? styles.active : ''}
                                    onClick={() => handleButtonClick('yes')}
                                >
                                    Yes
                                </button>
                                <button
                                    type="button"
                                    className={activeButton === 'no' ? styles.active : ''}
                                    onClick={() => handleButtonClick('no')}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                        <div className={styles.driverbutton}>
                            <button type="submit">To send <MdOutlineArrowOutward className={styles.icon} /></button>
                        </div>
                    </div>
                </form>
            </div>
            <div className={styles.image}>
                <Image width={700} height={300} src="/image/formimg.webp" alt='heroimage' />
            </div>
        </div>
    );
}
