import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Hero.module.css'
import hero_1 from '../assets/hero_1.webp'
import hero_2 from '../assets/hero_2.jpeg'
import hero_3 from '../assets/hero_3.jpeg'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

const Hero = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSliderNext = () => {
    setCurrentSlide(currentSlide >= 2 ? 0 : (prev) => prev + 1);
  }

  const handleSliderPrev = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  }

  return (
    <div className={styles.hero}>
      <div className={`${styles.hero__slider}`} style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <div className={styles.hero__slide}>
          <Image src={hero_1} alt="hero 1" className={`${styles.hero__slide_image}`} />
        </div>
        <div className={styles.hero__slide}>
          <Image src={hero_2} alt="hero 2" className={`${styles.hero__slide_image}`} />
        </div>
        <div className={styles.hero__slide}>
          <Image src={hero_3} alt="hero 3" className={`${styles.hero__slide_image}`} />
        </div>
      </div>
      <div className={styles.hero__controll}>
        <button
          type="button"
          className={`${styles.hero_controll__btn} btn-outlined`}
          onClick={handleSliderPrev}
        >
          <AiOutlineArrowLeft className={styles.hero_controll__icon} />
        </button>
        <button
          type="button"
          className={`${styles.hero_controll__btn} btn-outlined`}
          onClick={handleSliderNext}
        >
          <AiOutlineArrowRight className={styles.hero_controll__icon} />
        </button>
      </div>
    </div>
  )
}

export default Hero