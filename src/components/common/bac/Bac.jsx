import React from "react"
import { useLocation } from "react-router-dom"

const Bac = ({ title }) => {
  const location = useLocation()

  return (
    <>
      <section className='bac'>
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className='marigin'></div>
    </>
  )
}

export default Bac