import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section className="hero bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Our Electronic Store</h1>
          <p className="lead">
            Explore our wide range of electronics, including mobile phones and high-performance laptops.
          </p>
        </div>
      </section>

      <section className="container mt-5">
        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Mobile Image */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="../../images/images.jpeg" // Replace with your mobile image URL
                className="card-img-top img-equal-height"
                style={{ maxWidth: '100%', height: '323px' }}
                alt="Mobile"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Mobile Phones</h5>
                <p className="card-text">Discover the latest mobile technology.</p>
                <Link to={`/mobile-stock`} className="btn btn-primary">
                  Explore
                </Link>
              </div>
            </div>
          </div>

          {/* Laptop 1 Image */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="../../images/laptop1.jpeg" // Replace with your first laptop image URL
                className="card-img-top img-equal-height"
                style={{ maxWidth: '100%', height: '323px' }}
                alt="Laptop 1"
              />
              <div className="card-body text-center">
                <h5 className="card-title">High-Performance Laptops</h5>
                <p className="card-text">Experience powerful computing on the go.</p>
                <Link to={`/laptop-stock`} className="btn btn-primary">
                  Explore
                </Link>
              </div>
            </div>
          </div>

          {/* Laptop 2 Image */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="../../images/laptop2.jpeg" // Replace with your second laptop image URL
                className="card-img-top img-equal-height"
                style={{ maxWidth: '100%', height: '295px' }}
                alt="Laptop 2"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Versatile Laptops</h5>
                <p className="card-text">Choose from a variety of laptops to suit your needs.</p>
                <Link to={`/laptop-stock`} className="btn btn-primary">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center offer-text">
              <h2>Special Offer!</h2>
              <p>Buy a laptop worth more than ₹2 Lakh and get a <span className="offer-highlight">FREE MOBILE PHONE!</span></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
