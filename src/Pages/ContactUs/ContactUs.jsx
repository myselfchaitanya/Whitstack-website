import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ContactForm from './components/ContactForm.jsx/ContactForm'
import './ContactUs.css'
import Head from './components/Head/Head'
import FooterSection from '../Home/Components/Footers/FooterSection'
import { Helmet } from 'react-helmet'
const ContactUs = () => {
  return (
    <>
    <Helmet>
      <title>Contact Us</title>
      <meta name="description" content="Contact Us" />
      <link rel="canonical" href="/contactus" />
    </Helmet>
  <div className='headPart'>

      <NavBar></NavBar>
      <Head></Head>
  </div>
      <ContactForm></ContactForm>
      <FooterSection></FooterSection>
    </>
  )
}

export default ContactUs
