// Portfolio.js (React Version)

import React from "react";
import "./Portfolio.css";
// Portfolio Component
const Portfolio = () => {
  const sections = [
    {
      title: "Board Members",
      subtitle: "Driving Innovation",
      description:
        "At IIT Dharwad and dhaRti Foundation, our team comprises visionary leaders, accomplished researchers, and experienced entrepreneurs who are committed to transforming ideas into impact. Together, we foster an environment of collaboration, creativity, and excellence, empowering startups and innovators to scale and succeed.",
      cards: [
        {
          title: "Chairman of BoD",
          image: "/director_crop2.jpg",
          name: "Prof Venkappayya R Desai",
          description:
            "They understood our brand and created a stunning website design. Professional, responsive, and on-time delivery. Highly recommended!",
          linkedin: "https://www.linkedin.com/in/venkappayya-r-desai-800a331a",
        },
        {
          title: "Board Director",
          image: "/prof_mahadev_p.jpg",
          name: "Prof Mahadev Prasanna",
          description:
            "They understood our brand and created a stunning website design. Professional, responsive, and on-time delivery. Highly recommended!",
          linkedin:
            "https://www.linkedin.com/in/prof-mahadeva-prasanna-1b238b1a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        // Add more cards as needed
        {
          title: "Board Director",
          image: "/prof_mahadev_p.jpg",
          name: "Prof Mahadev Prasanna",
          description:
            "They understood our brand and created a stunning website design. Professional, responsive, and on-time delivery. Highly recommended!",
          linkedin:
            "https://www.linkedin.com/in/prof-mahadeva-prasanna-1b238b1a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          title: "Board Director",
          image: "/prof_mahadev_p.jpg",
          name: "Prof Mahadev Prasanna",
          description:
            "They understood our brand and created a stunning website design. Professional, responsive, and on-time delivery. Highly recommended!",
          linkedin:
            "https://www.linkedin.com/in/prof-mahadeva-prasanna-1b238b1a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          title: "Board Director",
          image: "/prof_mahadev_p.jpg",
          name: "Prof Mahadev Prasanna",
          description:
            "They understood our brand and created a stunning website design. Professional, responsive, and on-time delivery. Highly recommended!",
          linkedin:
            "https://www.linkedin.com/in/prof-mahadeva-prasanna-1b238b1a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          title: "Board Director",
          image: "/prof_mahadev_p.jpg",
          name: "Prof Mahadev Prasanna",
          description:
            "They understood our brand and created a stunning website design. Professional, responsive, and on-time delivery. Highly recommended!",
          linkedin:
            "https://www.linkedin.com/in/prof-mahadeva-prasanna-1b238b1a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          title: "Board Director",
          image: "/prof_mahadev_p.jpg",
          name: "Prof Mahadev Prasanna",
          description:
            "They understood our brand and created a stunning website design. Professional, responsive, and on-time delivery. Highly recommended!",
          linkedin:
            "https://www.linkedin.com/in/prof-mahadeva-prasanna-1b238b1a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      ],
    },
    {
      title: "The Leadership Team",
      subtitle: "Catalyst for Change",
      description:
        "Our team of researchers, entrepreneurs, mentors, and support staff at dhaRti Foundation is passionate about helping startups grow, scale, and thrive. With expertise spanning multiple industries—including biotech, clean energy, agritech, AI, and manufacturing—our team provides hands-on guidance and strategic direction to early-stage ventures.",
      cards: [
        {
          title: "Project Investigator",
          image: "/Dr_Sudhanshu_S.jpg",
          name: "Dr Sudhanshu Shukla",
          description:
            "They understood our brand and created a stunning website design. Professional, responsive, and on-time delivery. Highly recommended!",
          linkedin:
            "https://www.linkedin.com/in/sudhanshu-shukla-42143520?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          title: "Co-Project Investigator",
          image: "/DrSwanandaMarathe.jpg",
          name: "Dr Swananda Marathe",
          description:
            "They understood our brand and created a stunning website design. Professional, responsive, and on-time delivery. Highly recommended!",
          linkedin:
            "https://www.linkedin.com/in/swananda-marathe-ba898522b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        // Add more cards as needed
        {
          title: "Co-Project Investigator",
          image: "/DrSwanandaMarathe.jpg",
          name: "Dr Swananda Marathe",
          description:
            "They understood our brand and created a stunning website design. Professional, responsive, and on-time delivery. Highly recommended!",
          linkedin:
            "https://www.linkedin.com/in/swananda-marathe-ba898522b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          title: "Co-Project Investigator",
          image: "/DrSwanandaMarathe.jpg",
          name: "Dr Swananda Marathe",
          description:
            "They understood our brand and created a stunning website design. Professional, responsive, and on-time delivery. Highly recommended!",
          linkedin:
            "https://www.linkedin.com/in/swananda-marathe-ba898522b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      ],
    },
  ];

  return (
    <>
      {sections.map((section, sectionIndex) => (
        <section className="section__container" key={sectionIndex}>
          <h2>{section.title}</h2>
          <h1>{section.subtitle}</h1>
          <p>{section.description}</p>
          <div className="section__grid">
            {section.cards.map((card, cardIndex) => (
              <div className="section__card" key={cardIndex}>
                <span>
                  <i className="ri-double-quotes-l"></i>
                </span>
                <h4>{card.title}</h4>
                <img src={card.image} alt={card.name} />
                <h5>{card.name}</h5>
                <p>{card.description}</p>
                <a
                  href={card.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <i className="bx bxl-linkedin-square"></i>
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

// Exporting Portfolio component for integration
export default Portfolio;
