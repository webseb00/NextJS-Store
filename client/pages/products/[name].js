import { useState, useEffect } from 'react'
import { fetchQuery } from '../../utils'
import { Layout, List } from '../../components/'
import { Container, Row, Col } from 'react-grid-system'
import styles from '../../styles/ProductsList.module.css'
import { ProductsHeading } from '../../components/'

export default function Products({ meta, products, sub_categories, heading }) {
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
            </aside>
          </Col>
          <Col lg={9}>
            <ProductsHeading 
              title={heading.headingTitle} 
              subheading={heading.subheading}
              background={heading.headingBackground} 
            />
            <List 
              meta={meta}
              products={products} 
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
} 

// export async function getStaticPaths() {
//   const { data } = await fetchQuery(`api/categories`)
//   const paths = data.map(category => ({ params: { name: category.attributes.name } }))

//   return { paths, fallback: false }
// }

export async function getServerSideProps({ query, params }) {
  const { meta, data: products } = await fetchQuery(`api/products?filters[categories][name][$eq]=${params.name}&populate=*&pagination[page]=${query.page}&pagination[pageSize]=6&pagination[withCount]=true`);
  const { data: sub_categories } = await fetchQuery(`api/sub-categories`)
  
  const name = params.name === 'female' ? 'woman-page' : 'man-page'

  const { data } = await fetchQuery(`api/${name}?populate[heading][populate]=*`)
  const { heading } = data.attributes

  return {
    props: {
      meta,
      products,
      sub_categories,
      heading
    }
  }
}