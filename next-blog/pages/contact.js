import React from 'react';
import ContactForm from '../components/contact/contact-form';
import Head from 'next/head';

function ContactPage() {
  return (
    <>
      <Head>
        <title>contact form</title>
        <meta name='description' content='informations about me ' />
      </Head>
      <ContactForm />
    </>
  );
}

export default ContactPage;
