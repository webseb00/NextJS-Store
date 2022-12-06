import React from 'react'
import styles from '../styles/Categories.module.css'
import Link from 'next/link'

const Categories = () => {
  return (
    <div className={styles.category}>
      <div className={styles.category__item}>
        <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Link href="/" className={styles.category__link}>Sale</Link>
      </div>
      <div className={styles.category__item}>
        <img src="https://images.pexels.com/photos/1251171/pexels-photo-1251171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Link href="/" className={styles.category__link}>Women</Link>
      </div>
      <div className={styles.category__item}>
        <img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Link href="/" className={styles.category__link}>New Season</Link>
      </div>
      <div className={styles.category__item}>
        <img src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Link href="/" className={styles.category__link}>Men</Link>
      </div>
      <div className={styles.category__item}>
        <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Link href="/" className={styles.category__link}>Accessories</Link>
      </div>
      <div className={styles.category__item}>
        <img src="https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg" />
        <Link href="/" className={styles.category__link}>Shoes</Link>
      </div>
    </div>
  )
}

export default Categories