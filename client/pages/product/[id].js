import { Product } from '../../components/'
import { fetchQuery } from '../../utils'

export default function ProductPage({ product }) {
  return <Product {...product} />
}

export async function getStaticPaths() {
  const { data: products } = await fetchQuery(`api/products`)
  const paths = products.map(product => ({ params: { id: product.id.toString() } }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { data: product } = await fetchQuery(`api/products/${params.id}?populate=*`)

  return {
    props: {
      product
    },
  }
}