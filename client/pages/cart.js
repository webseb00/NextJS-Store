import React from 'react'
import { Layout } from '../components'
import { Container, Row, Col } from 'react-grid-system'
import styles from '../styles/Cart.module.css'

const Cart = () => {
  return (
    <Layout>
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col xs={10} md={6}>
            <div>cart</div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Cart