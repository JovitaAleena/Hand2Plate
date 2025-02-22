import React from 'react';
import './ourwork.css';

const OurWork = () => {
  const orphanages = [
    { name: 'Orphanage A - Chennai', link: 'https://www.google.com/maps?q=Chennai' },
    { name: 'Orphanage B - Coimbatore', link: 'https://www.google.com/maps?q=Coimbatore' },
    { name: 'Orphanage C - Madurai', link: 'https://www.google.com/maps?q=Madurai' },
    { name: 'Orphanage D - Trichy', link: 'https://www.google.com/maps?q=Trichy' },
    { name: 'Orphanage E - Salem', link: 'https://www.google.com/maps?q=Salem' },
  ];

  return (
    <div className="ourwork-container">
      <header className="ourwork-header">
        <div className="header-left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/TamilNadu_Logo.svg" alt="Government Logo" className="gov-logo" />
          <span>GOVERNMENT OF TAMILNADU</span>
        </div>
        <div className="header-right">
          <span>Hand2Plate</span>
        </div>
      </header>
      
      <main className="ourwork-main">
        <div className="details-container">
          <h2>Our Contributions</h2>
          <p>We have donated food to several orphanages across Tamil Nadu. Here are some of the places we have reached:</p>
          <div className="orphanage-list">
            {orphanages.map((orphanage, index) => (
              <div
                key={index}
                className="orphanage-card"
                onClick={() => window.open(orphanage.link, '_blank')}
              >
                <div className="orphanage-card-content">
                  <h3>{orphanage.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <p>Our mission is to ensure that no one goes hungry and that surplus food is utilized effectively to help those in need.</p>
        </div>
      </main>

      <footer className="ourwork-footer">
        <p>Every plate shared is a symbol of hope. No act of kindness, including donating food, is ever too small to make a difference.</p>
      </footer>

      <section className="flowchart-section">
        <h2>Workflow of Our Web App</h2>
        <div className="flowchart">
          <div className="flowchart-step">Donor (Hotel/Restaurant)</div>
          <div className="flowchart-arrow">↓</div>
          <div className="flowchart-step">Collector</div>
          <div className="flowchart-arrow">↓</div>
          <div className="flowchart-step">Hub</div>
          <div className="flowchart-arrow">↓</div>
          <div className="flowchart-step">Distributor</div>
          <div className="flowchart-arrow">↓</div>
          <div className="flowchart-step">Receivers (NGO, Charity Homes, Orphanages)</div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;