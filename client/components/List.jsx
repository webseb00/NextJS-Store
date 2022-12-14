import React from 'react'
import ProductCard from './ProductCard'
import Pagination from './Pagination'
import { Container, Row, Col } from 'react-grid-system'
import styles from '../styles/List.module.css'

const List = ({ products, meta }) => {
  return (
    <div className={styles.list}>
      <Container>
        <Row>
          {products?.map(product => 
            <Col key={product.id} sm={10} md={6} lg={4}>
              <ProductCard 
                id={product.id} 
                { ...product.attributes } 
              />
            </Col>
          )}
        </Row>
        <Row>
          <Col>
            <Pagination meta={meta} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default List