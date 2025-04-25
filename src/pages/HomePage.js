import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// Make sure you have the image in the public folder or import it correctly
// import screenshot from './placeholder-screenshot.png';

function HomePage() {
  return (
    <>
      <Header title="Product Name" />
      <main>
        <section id="product-info">
          <h2>Our Amazing App</h2>
          <p>Brief description of the app and its key features.</p>
          {/* If image is in public folder: */}
          <img src="/placeholder-screenshot.png" alt="App Screenshot" width="300" />
          {/* Or if imported: */}
          {/* <img src={screenshot} alt="App Screenshot" width="300" /> */}
          <p>
            <a href="#app-store-link" className="button">Download on the App Store</a>
            {/* Replace #app-store-link with your actual App Store link */}
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
