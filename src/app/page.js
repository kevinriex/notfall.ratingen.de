import Image from 'next/image'
import styles from './page.module.css'

import SiteLink from './(components)/sitelink'
import Footer from './(components)/Footer'
import Hero from './(components)/Hero'

export default function Home() {
  return (
    <>
    <Hero></Hero>
      <Footer></Footer>
    </>
  )
}

