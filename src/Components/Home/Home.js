import React from 'react';
import './Home.css'; // Ensure to keep the original CSS file

const Home = () => {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-image-container">
              <img src="May Admin Block.jpg" className="d-block w-100" alt="first" />
              <div className="carousel-caption">
                <h3>dhaRti</h3>
                <div className="carousel-caption1">
                  <p>Dharwad Research and Technology Incubator</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image-container">
              <img src="July.Gate_Complex_1.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption2">
                <p>Empowering Innovation, Driving the Future Fueling Innovation.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image-container">
              <img src="Geograph.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption3">
                <p>Empowering Startups, Shaping the Future.</p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="about-section">
        <div className="about-content">
          <h2>IIT DHARWD</h2>
          <p>
            Indian Institute of Technology dhArwAD (IITdh) is one of the third Generation (3-G) IITs, which were established
            by the Ministry of Education (MoE), Government of India (GoI). It was started in August 2016 under the mentorship
            of IIT Bombay. Our academic journey began in the Academic Year (AY) 2016-17, with the establishment of four-year
            Bachelor of Technology (B. Tech.) programs - Mechanical Engineering (ME), Electrical Engineering (EE), and
            Computer Science & Engineering (CSE).
          </p>
        </div>
        <div className="about-image">
          <img src="July.Gate_Complex_1.jpg" alt="Institute Image" />
        </div>
      </section>

      <section id="vision-mission">
        <div className="vision-container">
          <h2 className="vision-section-title">What is dhaRti?</h2>
          <div className="paragraph">
            <p>
              Welcome to dhaRti-BioNEST, an innovation hub at IIT Dharwad, backed by BIRAC and supported by Smt. Nirmala
              Sitharaman, Minister of Finance, Government of India.
            </p>
          </div>
          <div className="vision-content">
            <div className="vision"></div>
            <div className="mission"></div>
          </div>
        </div>
      </section>

      <div className="offers-container">
        <h1 className="offers-heading">Our Offerings</h1>
        <p>
          We provide the <strong>resources, mentorship,</strong> and <strong>infrastructure</strong> needed for startups to{' '}
          <strong>scale and succeed.</strong>
        </p>
        <section className="offers-section">
          <div className="offer-block" style={{ backgroundImage: 'url(infrastructure.jpg)' }}>
            <h3>State-of-the-Art Infrastructure</h3>
            <div className="offer-details">
              <ul>
                <li>
                  <strong>State-of-the-Art Infrastructure :</strong> Labs, co-working spaces, prototyping facilities.
                </li>
              </ul>
            </div>
          </div>
          {/* Add remaining offer blocks here following the same structure */}
        </section>
      </div>

      <div className="focus-container">
        <h1 className="focus-heading">Key Sectors We Support</h1>
        <p className="focus-description">
          We nurture startups working on high-impact innovations across diverse sectors
        </p>
        <section className="focus-section">
          <div className="focus-block" style={{ backgroundImage: 'url(bioscience.jpg)' }}>
            <div className="focus-inner">
              <div className="focus-front">
                <h3 className="focus-title">Biosciences & Healthcare</h3>
              </div>
              <div className="focus-back">
                <p>We fund and conduct research to advance biomedical and behavioral science.</p>
              </div>
            </div>
          </div>
          {/* Add remaining focus blocks here */}
        </section>
      </div>

      <section className="supporters-section">
        <h2>Our Supporters</h2>
        <div className="supporters">
          <div className="supporter">
            <a href="https://www.iitdh.ac.in/" target="_blank" rel="noopener noreferrer">
              <img src="IIT-Dharwad.png" alt="IIT Dharwad Logo" />
            </a>
            <p>IIT Dharwad</p>
          </div>
          {/* Add remaining supporter blocks here */}
        </div>
      </section>
    </>
  );
};

export default Home;
