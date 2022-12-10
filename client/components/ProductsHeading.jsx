import React from 'react'
import Image from 'next/image'
import styles from '../styles/Heading.module.css'

const ProductsHeading = ({ title, subheading, background }) => {
  return (
    <header className={styles.heading}>
      <h3 className={styles.heading__title}>{title}</h3>
      <p className={styles.heading__subtitle}>{subheading}</p>
      <Image 
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${background.data.attributes.url}`}
        width={background.data.attributes.width}
        height={background.data.attributes.height}
        className={styles.heading__background}
        alt={title}
      />
    </header>
  )
}

export default ProductsHeading