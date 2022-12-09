import { useState, useEffect } from 'react'
import { fetchQuery } from '../../utils'
import { Layout, List } from '../../components/'
import { Container, Row, Col } from 'react-grid-system'
import styles from '../../styles/ProductsList.module.css'

export default function Products({ products, sub_categories }) {

  const [selectedCats, setSelectedCats] = useState([]);

  const fetchProductsByCats = () => {

  }

  useEffect(() => {
    fetchProductsByCats();
  }, [selectedCats])

  const handleCatChange = e => {
    if(!e.target.checked) {
      const filteredCats = selectedCats.filter(cat => cat !== e.target.name)
      setSelectedCats([ ...filteredCats ])
      return
    } 

    setSelectedCats([ ...selectedCats, e.target.name ])
  }

  return (
    <Layout>
      <Container>
        <Row>
          <Col lg={3}>
            <aside className={styles.options}>
              <div className={styles.options__wrapper}>
                <h4>Product Categories</h4>
                <ul className={styles.options__list}>
                  {sub_categories.map(subcat => (
                    <li key={subcat.id} className={styles.options__item}>
                      <input 
                        type="checkbox"
                        name={`${subcat.attributes.name}`}
                        id={`${subcat.attributes.name}`}
                        onChange={handleCatChange}
                      />
                      <label
                        className={styles.options__label} 
                        htmlFor={`${subcat.attributes.name}`}
                        >
                        {subcat.attributes.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.options__wrapper}>
                <h4>Filter By Price</h4>
              </div>
              <div className={styles.options__wrapper}>
                <h4>Sort By Price</h4>
              </div>
            </aside>
          </Col>
          <Col lg={9}>
            <List products={products} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
} 

export async function getStaticPaths() {
  const { data } = await fetchQuery(`api/categories`)
  const paths = data.map(category => ({ params: { name: category.attributes.name } }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { data: products } = await fetchQuery(`api/products?filters[category][name][$eq]=${params.name}&populate=*`);
  
  const { data: sub_categories } = await fetchQuery(`api/sub-categories`)

  return {
    props: {
      products,
      sub_categories
    }
  }
}