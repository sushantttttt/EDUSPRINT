import React from 'react'
import "./price.css"
import Bac from '../common/bac/Bac'
import PriceCard from './PriceCard'
import Faq from './Faq'

const Price = () => {
  return (
    <>
    <Bac title="Choose The Plan"/>
    <section className="price padding">
        <div className="container grid">
            <PriceCard/>
        </div>
    </section>
    <Faq />
    </>
  )
}

export default Price