import React from 'react';
import './About.css'; // Ensure the CSS file is saved as About.css in the same directory

const About = () => {
  return (
    <div>
      <div id="about">
        <h2>About IIT Dharwad</h2>
        <p>
          Indian Institute of Technology dhArwAD (IITdh) is one of the third Generation (3-G) IITs, which were established
          by the Ministry of Education (MoE), Government of India (GoI). It was started in August 2016 under the mentorship
          of IIT Bombay. Our academic journey began in the Academic Year (AY) 2016-17, with the establishment of four-year
          Bachelor of Technology (B. Tech.) programs - Mechanical Engineering (ME), Electrical Engineering (EE), and
          Computer Science & Engineering (CSE).
        </p>
        <h2>About dhaRti Foundation- Where Innovation Meets Impact</h2>
        <p>
          Welcome to dhaRti Foundation, the Dharwad Research and Technology Incubator Foundation, an innovation-driven
          initiative supported by IIT Dharwad. Our mission is to foster a culture of entrepreneurship and technological
          advancement, enabling startups and innovators to transform cutting-edge research into scalable, market-ready
          solutions. DhaRTI serves as a catalyst for the region's growing technology ecosystem, providing a platform for
          aspiring entrepreneurs, startups, and researchers to thrive and create impactful solutions for society.
        </p>
      </div>

      <section id="vision-mission">
        <div className="vision-container">
          <h2 className="vision-section-title">Vision and Mission</h2>
          <div className="vision-content">
            <div className="vision">
              <div className="vision1">
                <h3>Our Vision</h3>
                <p>
                  To be a <strong>world-class incubator</strong> that accelerates the commercialization of{' '}
                  <strong>innovative technologies</strong> and nurtures <strong>entrepreneurial talent</strong>, with a
                  focus on solving <strong>global challenges</strong>.
                </p>
              </div>
            </div>
            <div className="mission">
              <h3>Our Mission</h3>
              <ul>
                <li>
                  <strong>Nurture innovation</strong> by providing startups with <strong>resources, mentorship,</strong>{' '}
                  and <strong>infrastructure</strong> to help them thrive.
                </li>
                <li>
                  <strong>Bridge</strong> the gap between research and industry by fostering collaborations and
                  partnerships.
                </li>
                <li>
                  <strong>Support sustainable entrepreneurship</strong> that addresses key challenges in sectors like
                  healthcare, agriculture, clean energy, and manufacturing.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="journey">
        <h2>Our Journey</h2>
        <p>
          Founded with a vision to transform ideas into reality, dhaRti Foundation was established to support and nurture
          early-stage startups and innovations in the fields of technology, research, and development. The foundation’s
          journey began at IIT Dharwad, a hub of technical excellence and research, where we identified the need for a
          structured environment that could support entrepreneurs and innovators in bringing their solutions to market.
          Since its inception in 2022, dhaRti has played a key role in bridging the gap between academia and industry by
          providing resources, mentorship, and strategic support to emerging companies. Today, dhaRti continues to be a
          dynamic incubator where ideas are nurtured, technologies are developed, and businesses are built. Through
          partnerships with academic institutions, corporate sponsors, and government bodies, we are creating an ecosystem
          that enables startups to grow, scale, and make a meaningful impact on society.
        </p>
      </section>

      <section className="supported-section">
        <h2>Sectors we support</h2>
        <p>
          At DhaRTI, we support innovation across a broad spectrum of sectors, leveraging technology to address key
          challenges and opportunities. We provide our incubatees with the resources, infrastructure, and mentorship to
          help them succeed.
        </p>
        <div className="supported">
          <div className="supported-block1">
            <h4>Biosciences Innovation</h4>
          </div>
          <div className="supported-block2">
            <h4>Sustainable Food & Agriculture Innovation</h4>
          </div>
          <div className="supported-block3">
            <h4>Smart / Intelligent Manufacturning</h4>
          </div>
          <div className="supported-block4">
            <h4>Clean Energy & Sustainability</h4>
          </div>
        </div>
      </section>

      <section className="facilities-section">
        <h1 className="section-title">Our Facilities</h1>
        <div className="facilities-container">
          <div className="facility-block1">
            <h4>Cell Biology Lab</h4>
          </div>
          <div className="facility-block2">
            <h4>Molecular Biology Lab</h4>
          </div>
          <div className="facility-block3">
            <h4>Preclinical Facility</h4>
          </div>
          <div className="facility-block4">
            <h4>Boardroom</h4>
          </div>
          <div className="facility-block5">
            <h4>Seminar Hall</h4>
          </div>
          <div className="facility-block6">
            <h4>Dedicated workspace</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
