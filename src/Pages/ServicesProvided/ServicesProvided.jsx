import React from 'react'
import NavBar from '../Home/Components/NavBar/NavBar'
import { Helmet } from 'react-helmet'

const ServicesProvided = () => {
  return (
    <>
    <Helmet>
      <title>Services Provided</title>
      <meta name="description" content="Services Provided" />
      <link rel="canonical" href="/ourservices" />
    </Helmet>
    <div>
      <NavBar></NavBar>
    </div>
    </>
  )
}

export default ServicesProvided
