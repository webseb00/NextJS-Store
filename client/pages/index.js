import React from 'react'
import Head from 'next/head'
import { 
  Layout,
  Hero,
  FeaturedProducts,
  Categories
} 
from '../components/index'

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <FeaturedProducts type="featured" />
        <Categories />
        <FeaturedProducts type="trending" />
      </Layout>
    </>
  )
}
