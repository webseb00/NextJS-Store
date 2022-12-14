import React from 'react'
import { Layout } from '../components'
import { Container, Row, Col } from 'react-grid-system'
import { deleteItem } from '../features/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineDelete } from 'react-icons/ai'
import styles from '../styles/Cart.module.css'
import sideCartStyles from '../styles/CartSidePanel.module.css'
import { calculateTotalCost } from '../utils'
import Image from 'next/image'
import CartSVG from '../assets/cart.svg'
import Link from 'next/link'
import {useRouter} from 'next/router'
const Cart = () => {
  const router = useRouter()
  console.log(router);
  const items = useSelector(state => state.items)
  const dispatch = useDispatch()
  const cartTotalCost = calculateTotalCost(items)

  return (
    <Layout>
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col xs={10} md={8}>
            {items.length ? 
            <>
              <div className={styles.wrapper}>
                <table className={styles.table}>
                  <tr className={styles.table__head}>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>&nbsp;</th>
                  </tr>
                  <tbody className={styles.table__body}>
                    {items?.map((item, idx) => {
                      const { id, image, title, price, quantity } = item

                      return (
                        <tr key={idx}>
                          <td>
                            <Link
                              href={`product/${id}`}
                            >
                              <Image 
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}${image.url}`}
                                width={image.width}
                                height={image.height}
                                alt={title}
                                className={sideCartStyles.cart__thumbnail}
                              />
                              <p>{title}</p>
                            </Link>
                          </td>
                          <td>
                            <p>{price}</p>
                          </td>
                          <td>{quantity}</td>
                          <td>{cartTotalCost}$</td>
                          <td>
                            <button 
                              type="button"
                              className={sideCartStyles.cart__remove_item}
                              onClick={() => dispatch(deleteItem({ id }))}
                            >
                              <AiOutlineDelete />
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <div className={styles.cart__cta}>
                <Link
                  href="/"
                  className="btn btn__dark"
                >
                  Back to shopping
                </Link>
                <Link
                  href="/checkout"
                  className="btn btn__accent"
                >
                  To Checkout
                </Link>
              </div>
            </>
            : 
            <div className={styles.cart__info}>
              <p>Your cart is empty...</p>
              <Image src={CartSVG} width={300} height={300} alt="empty cart" /> 
            </div>
            }
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Cart