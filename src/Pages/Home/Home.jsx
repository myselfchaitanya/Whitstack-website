import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import HeroSectioon from './Components/HeroSection/HeroSectioon'
import MainSection from './Components/MainSection/MainSection'
import ServicesSection from './Components/ServicesSection/ServicesSection'
import PartnersAndClients from './Components/PartnersAndClients/PatnersAndClients'
import './Home.css'
import FooterSection from './Components/Footers/FooterSection'
import ClientSection from './Components/ClientsSection/ClientSection'
import { Helmet } from 'react-helmet-async'
const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Whitstack home page" />
      <link rel="canonical" href="/" />
    </Helmet>
    
    <div className='Homes'> 
      <NavBar></NavBar>
      <HeroSectioon></HeroSectioon>
      <MainSection></MainSection>
      <ServicesSection></ServicesSection>
      <PartnersAndClients></PartnersAndClients>
      <ClientSection></ClientSection>
      <FooterSection></FooterSection>
    </div>
      </>
  )
}

export default Home
