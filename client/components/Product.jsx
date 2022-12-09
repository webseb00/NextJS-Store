import React, { useState } from 'react'
import styles from '../styles/Product.module.css'
import { Container, Row, Col } from 'react-grid-system'
import { BsSuitHeart } from 'react-icons/bs'
import { HiOutlineScale, HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import Image from 'next/image'
import Tabs from './Tabs'

const Product = ({ attributes }) => {

  const { title, price, short_description, description, additional_information, image } = attributes;

  const [currentIndex, setCurrentIndex] = useState(0)
  const [quantity, setQuantity] = useState(1);

  const handlePrevImage = () => {
    currentIndex === 0 ? setCurrentIndex(image.data.length-1) : setCurrentIndex(currentIndex-1) 
  }

  const handleNextImage = () => {
    currentIndex >= image.data.length-1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex+1)
  }

  return (
    <Container className={styles.product}>
      <Row>
        <Col sm={10} lg={6}>
          <div className={styles.gallery}>
            <div className={styles.gallery__thumbnails}>
              <ul className={styles.gallery__list}>
                {image.data.map((image, idx) => {
                  const { medium: { url, width, height, name } } = image.attributes.formats
                  
                  return (
                    <li 
                      className={`${idx === currentIndex ? styles.active : ''}`}
                      onClick={() => setCurrentIndex(idx)}
                    >
                      <Image 
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${url}`} 
                        width={width}
                        height={height}
                        alt={name}
                      />
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className={styles.gallery__image}>
              <img 
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${image.data[currentIndex].attributes.url}`} 
                alt={title} 
              />
              <button 
                type="button"
                onClick={handlePrevImage}
                className={styles.gallery__button}
              >
                <BiChevronLeft />
              </button>
              <button 
                type="button"
                onClick={handleNextImage}
                className={styles.gallery__button}
              >
                <BiChevronRight />
              </button>
            </div>
          </div>
        </Col>
        <Col sm={10} lg={6}>
          <div>
            
            <div className={styles.product__content}>
              <h2 className={styles.product__title}>{title}</h2>
              <span className={styles.product__price}>{price.toFixed(2)} $</span>
              <p className={styles.product__description}>{short_description}</p>
              <div className={styles.product__cta}>
                <a href="/"><BsSuitHeart />Add To Wish List</a>
                <a href="/"><HiOutlineScale />Add To Compare</a>
              </div>
            </div>
            <div className={styles.quantity}>
              <span className={styles.quantity__button} onClick={() => setQuantity(quantity === 1 ? 1 : quantity-1)}>
                <HiOutlineMinus />
              </span>
              <input className={styles.quantity__input} type="number" defaultValue={quantity} readOnly />
              <span className={styles.quantity__button}  onClick={() => setQuantity(quantity+1)}>
                <HiOutlinePlus />
              </span>
            </div>
            <button 
              type="button"
              className="btn btn__accent"
            >
              Add To Cart
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs description={description} additionalInfo={additional_information} />
        </Col>
      </Row>
    </Container>
  )
}

export default Product