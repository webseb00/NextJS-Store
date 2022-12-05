import React from 'react'
import Image from 'next/image'
import styles from '../styles/ProductCard.module.css'
import Link from 'next/link'

const ProductCard = ({ id, title, price, image }) => {

  const { url, width, height } = image.data[0].attributes

  return (
    <div id={id} className={styles.card}>
      <div className={styles.card__header}>
        <Image 
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${url}`} 
          width={width} 
          height={height} 
          className={styles.card__thumbnail}
          alt={title} 
        />
      </div>
      <div className={styles.card__footer}>
        <Link href={`/product/${id}`}>
          <p className={styles.card__title}>{title}</p>
        </Link>
        <span className={styles.card__price}>{price.toFixed(2)} $</span>
      </div>
    </div>
  )
}

export default ProductCard