import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ContactPage() {
  return (
    <>
      <Header title="Contact Us" />
      <main>
        <section id="contact-form">
          <h2>Get in Touch</h2>
          <p>Have questions or feedback? Let us know!</p>
          {/* Feedback form will go here */}
          <p><em>Feedback form coming soon.</em></p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ContactPage;
