import React from 'react'
import styles from '../styles/CartSidePanel.module.css'
import { AiOutlineClose, AiOutlineDelete } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, resetCart } from '../features/cart/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import { calculateTotalCost } from '../utils'
import CartSVG from '../assets/cart.svg'

const CartSidePanel = ({ cartPanel, setCartPanel }) => {

  const items = useSelector(state => state.items)
  const dispatch = useDispatch()

  const cartTotalCost = calculateTotalCost(items)

  const handleCloseCart = () => setCartPanel(false);

  return (
    <>
      <div onClick={handleCloseCart} className={`${cartPanel ? 'dark__overlay active' : 'dark__overlay'}`} />
      <div className={`${styles.cart} ${cartPanel && styles.active}`}>
        <header className={styles.cart__header}>
          <h5>Your Cart</h5>
          <button 
            type="button" 
            className="btn-outlined"
            onClick={handleCloseCart}
          >
            <AiOutlineClose className={styles.icon} />
          </button>
        </header>
        <div className={styles.cart__body}>
          {items.length ? 
            <>
              <ul className={styles.cart__list}>
                {items?.map(item => {
                  const { id, image, title, price, quantity } = item

                  return (
                    <li id={id} key={id} className={styles.cart__item}>
                      <Image 
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${image.url}`}
                        width={image.width}
                        height={image.height}
                        alt={title}
                        className={styles.cart__thumbnail}
                      />
                      <div className={styles.cart__product}>
                        <div>
                          <p>{title}</p>
                          <span>{`${quantity} x ${price}$`}</span>
                        </div>
                        <button 
                          type="button"
                          className={styles.cart__remove_item}
                          onClick={() => dispatch(deleteItem({ id }))}
                        >
                          <AiOutlineDelete />
                        </button>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <h5>Total: {`${cartTotalCost}`}</h5>
            </>
           : 
            <div className={styles.cart__info}>
              <p>Your cart is empty...</p>
              <Image src={CartSVG} width={200} height={200} alt="empty cart" /> 
            </div>
          }
        </div>
        <div className={styles.cart__cta}>
          <Link
            href="/cart"
          >
            <button
              type="button"
              className="btn btn__dark"
            >
              view cart
            </button>
          </Link>
          <button
            type="button"
            className="btn btn__dark"
            onClick={() => dispatch(resetCart())}
          >
            reset cart
          </button>
        </div>
      </div>
    </>
  )
}

export default CartSidePanel