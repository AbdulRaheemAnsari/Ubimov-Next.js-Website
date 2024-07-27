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
              <Image width={20} height={20} src="/image/tickmarkicon.svg" alt={heading} />
              <p>{tags1}</p>
            </div>
          )}
          {tags2 && (
            <div className={styles.tag}>
              <Image width={20} height={20} src="/image/tickmarkicon.svg" alt={heading} />
              <p>{tags2}</p>
            </div>
          )}
          {tags3 && (
            <div className={styles.tag}>
              <Image width={20} height={20} src="/image/tickmarkicon.svg" alt={heading} />
              <p>{tags3}</p>
            </div>
          )}
          {tags4 && (
            <div className={styles.tag}>
              <Image width={20} height={20} src="/image/tickmarkicon.svg" alt={heading} />
              <p>{tags4}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

