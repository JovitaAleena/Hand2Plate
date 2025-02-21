import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="stroke-text">About Us</h1>
      <p>Welcome to our Food Donation App. We are dedicated to reducing food waste and helping those in need.</p>
      
      <section className="workflow">
        <h2 className="stroke-text">Our Workflow</h2>
        <div className="workflow-step">
          <h3>Donate</h3>
          <p>Individuals and businesses can donate surplus food through our app.</p>
        </div>
        <div className="workflow-step">
          <h3>Collect</h3>
          <p>Our volunteers collect the donated food from various locations.</p>
        </div>
        <div className="workflow-step">
          <h3>Distribute</h3>
          <p>The collected food is distributed to those in need through our network of partners.</p>
        </div>
      </section>

      <section className="mission-vision">
        <h2 className="stroke-text">Our Mission</h2>
        <p>To reduce food waste and fight hunger by connecting donors with those in need.</p>
        <h2 className="stroke-text">Our Vision</h2>
        <p>A world where no one goes hungry and food waste is a thing of the past.</p>
      </section>
    </div>
  );
};

export default About;