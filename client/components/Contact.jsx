import React from 'react'
import styles from '../styles/Contact.module.css'
import { SiFacebook, SiTwitter, SiInstagram, SiPinterest } from 'react-icons/si'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__wrapper}>
        <h3 className={styles.contact__heading}>Be In Touch With Us:</h3>
        <form className={styles.contact__form}>
          <input 
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <input 
            type="submit"
            value="join us"
          />
        </form>
        <ul className={styles.contact__list}>
          <li>
            <a href="/"><SiFacebook /></a>
          </li>
          <li>
            <a href="/"><SiTwitter /></a>
          </li>
          <li>
            <a href="/"><SiInstagram /></a>
          </li>
          <li>
            <a href="/"><SiPinterest /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact