import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { AiOutlineUser, AiOutlineShopping, AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const Header = ({ setCartPanel }) => {

  const itemsCounter = useSelector(state => state.items.length)
  const [active, setActive] = useState(false)

  return (
    <header className={`${styles.header} flex__row-center`}>
      <div className="flex__row-center w-full">
        <Link href="/">
          <h1 className={styles.header__title}>Next<span>Shop</span></h1>
        </Link>
        <button 
          type="button"
          onClick={() => setActive(prev => !prev)}
          className={`${styles.header__toggleMobile} btn-outlined`}
        >
          {!active ? <AiOutlineMenu className={styles.icon__headerIcon} /> :
          <AiOutlineClose className={styles.icon__headerIcon} /> }
        </button>
        <div className={`${styles.header__wrapper} w-full ${active && styles.active}`}>
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <Link className={styles.nav__link} href="/">
                  Home
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link className={styles.nav__link} href="/products/female">
                  Women
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link className={styles.nav__link} href="/products/male">
                  Men
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link className={styles.nav__link} href="/">
                  About
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link className={styles.nav__link} href="/">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className={`${styles.icon} flex__row-center`}>
            <button type="button" className={`${styles.icon__btn} btn-outlined`}>
              <AiOutlineHeart className={styles.icon__headerIcon} />
            </button>
            <button type="button" className={`${styles.icon__btn} btn-outlined`}>
              <AiOutlineUser className={styles.icon__headerIcon} />
            </button>
            <button 
              type="button" 
              className={`${styles.icon__btn} btn-outlined`}
              onClick={() => setCartPanel(true)}
            >
              <AiOutlineShopping className={styles.icon__headerIcon} />
              <span className={`${styles.icon__counter} flex__center`}>
                {itemsCounter}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header