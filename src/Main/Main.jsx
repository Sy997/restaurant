import React from 'react'
import { AboutUs,
        Chef,
        FindUs,
        Footer,
        Gallery,
        Header,
        Intro,
        Laurels,
        SpecialMenu } from '../container'
import { Navbar } from '../components'

const Main = () => {
  return (
    <div style={{transitionDelay: '1s'}}>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
    </div>
  )
}

export default Main