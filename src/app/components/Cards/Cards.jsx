import React from 'react';
import styles from './cards.module.css';
import Image from 'next/image';


export const Cards = ({ heading, tags1, tags2, tags3, tags4 }) => {
  return (
    <>
      <div className={styles.cards_container}>
        <h1>{heading}</h1>
        <div className={styles.tags_container}>
          {tags1 && (
            <div className={styles.tag}>
              {/* <img src="https://ubimov.com/_next/static/media/check.9a73f28b.svg" alt="" /> */}
              <Image src="https://ubimov.com/_next/static/media/check.9a73f28b.svg" />
              <p>{tags1}</p>
            </div>
          )}
          {tags2 && (
            <div className={styles.tag}>
              {/* <img src="https://ubimov.com/_next/static/media/check.9a73f28b.svg" alt="" /> */}
              <Image src="https://ubimov.com/_next/static/media/check.9a73f28b.svg" />
              <p>{tags2}</p>
            </div>
          )}
          {tags3 && (
            <div className={styles.tag}>
              {/* <img src="https://ubimov.com/_next/static/media/check.9a73f28b.svg" alt="" /> */}
              <Image src="https://ubimov.com/_next/static/media/check.9a73f28b.svg" />
              <p>{tags3}</p>
            </div>
          )}
          {tags4 && (
            <div className={styles.tag}>
              {/* <img src="https://ubimov.com/_next/static/media/check.9a73f28b.svg" alt="" /> */}
              <Image src="https://ubimov.com/_next/static/media/check.9a73f28b.svg" />
              <p>{tags4}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

