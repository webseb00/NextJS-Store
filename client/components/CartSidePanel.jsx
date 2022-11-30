import React from 'react'
import styles from '../styles/CartSidePanel.module.css'
import { AiOutlineClose } from 'react-icons/ai'

const CartSidePanel = ({ cartPanel, setCartPanel }) => {

  return (
    <>
      <div className={`${cartPanel ? 'dark__overlay active' : 'dark__overlay'}`} />
      <div className={`${styles.cart} ${cartPanel && styles.active}`}>
        <header className={styles.cart__header}>
          <h5>Your Cart</h5>
          <button 
            type="button" 
            className="btn-outlined"
            onClick={() => setCartPanel(false)}
          >
            <AiOutlineClose className={styles.icon} />
          </button>
        </header>
        <div className={styles.cart__body}>
          <ul className={styles.cart__list}>
            <li className={styles.cart__item}>
              <img src="https://preview.colorlib.com/theme/cozastore/images/item-cart-01.jpg.webp" alt="" />
              <div className={styles.cart__product}>
                <p>White Shirt</p>
                <span>1 x $19.00</span>
              </div>
            </li>
          </ul>
          <h5>Total: $45</h5>
        </div>
        <div className={styles.cart__cta}>
          <button
            type="button"
            className="btn btn__dark"
          >
            view cart
          </button>
          <button
            type="button"
            className="btn btn__dark"
          >
            check out
          </button>
        </div>
      </div>
    </>
  )
}

export default CartSidePanel