import React from 'react'
import Head from 'next/head'
import { 
  Layout,
  Hero,
  FeaturedProducts
} 
from '../components/index'

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <FeaturedProducts />
      </Layout>
    </>
  )
}
