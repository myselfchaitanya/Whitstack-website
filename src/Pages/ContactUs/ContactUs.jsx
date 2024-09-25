import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ContactForm from './components/ContactForm.jsx/ContactForm'
import './ContactUs.css'
import Head from './components/Head/Head'
import FooterSection from '../Home/Components/Footers/FooterSection'
const ContactUs = () => {
  return (
    <>
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
