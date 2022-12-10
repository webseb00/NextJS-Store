import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__wrapper}>
      <div className={styles.footer__box}>
        <h5 className={styles.footer__heading}>Categories</h5>
        <ul className={styles.footer__list}>
          <li>
            <Link href="/">
              Women
            </Link>
          </li>
          <li>
            <Link href="/">
              Man
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footer__box}>
        <h5 className={styles.footer__heading}>Help</h5>
        <ul className={styles.footer__list}>
          <li>
            <Link href="/">
              Track Order
            </Link>
          </li>
          <li>
            <Link href="/">
              Returns
            </Link>
          </li>
          <li>
            <Link href="/">
              Shipping
            </Link>
          </li>
          <li>
            <Link href="/">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footer__box}>
        <h5 className={styles.footer__heading}>Get In Touch</h5>
        <p className={styles.footer__text}>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
      </div>
      <div className={styles.footer__box}>
        <h5 className={styles.footer__heading}>Newsletter</h5>
        <form className={styles.footer__form}>
          <input 
            type="email" 
            name="email"
            autoComplete="off"
            placeholder="email@example.com" 
            required
          />
          <button
            type="button"
            className="btn btn__accent"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </footer>
)

export default Footer