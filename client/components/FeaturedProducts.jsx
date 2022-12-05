import React, { useEffect, useState }  from 'react'
import styles from '../styles/FeaturedProducts.module.css'
import ProductCard from './ProductCard'
import { fetchQuery } from '../utils'
import { Container, Row, Col } from 'react-grid-system';

const FeaturedProducts = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const { data } = await fetchQuery('api/products?populate=*')
      setProducts(data.slice(0, 4))
    }    

    fetch();
  }, [])

  return (
    <section className={styles.featured}>
      <Container>
        <Row>
          <div className={styles.featured__heading}>
            <h2>Featured Products</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus natus sunt ad, nisi vitae soluta doloremque sed. Eum earum necessitatibus delectus doloremque esse ad, aut blanditiis voluptate tenetur ab.</p>
          </div>
        </Row>
        <Row>
          {products?.map(product => 
            <Col key={product.id} sm={10} md={6} lg={3}>
              <ProductCard 
                id={product.id} 
                { ...product.attributes } 
              />
            </Col>
          )}
        </Row>
      </Container>
    </section>
  )
}



export default FeaturedProducts