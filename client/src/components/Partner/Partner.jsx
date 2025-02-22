import React from "react";
import Card from "../UI/Card";
import "./Partner.css";

const Partner = () => {
  const data = [
    {
      id: 1,
      name: "The Red Cafe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOknLWygwp1R6G05O4KKu8d8YpBExS-0HuVA&s",
      description:
        "The Red Cafe is a organisation that provides the surplus food to communities to serve the less fortunate.The lesser fortunate sections of society we serve include homeless families and orphans",
    },
    {
      id: 2,
      name: "A2B",
      img: "https://www.a2bnewjersey.com/wp-content/uploads/2022/08/A2B-Logo-PDF-1.png",
      description:
        "A2B is a reputed Restaurant, committed to making a positive impact in the lives of underprivileged families in India. We offer a range of programs, including food donation, old clothes donation and unused medicine donation. ",
    },
    {
      id: 3,
      name: "Feed India",
      img: "https://cdn-images-1.medium.com/max/1200/1*REBDuJ5U4usD7krlVQXuiw.png",
      description:
        "All efforts are concerted towards providing better food to more people. Through our targeted interventions for child and maternal malnutrition, we are working towards bringing large-scale systemic transformation.",
    },
  ];
  return (
    <div className="partner-page">
      <div className="title">
        <h1>Our Partnered Restaurants</h1>
      </div>
      <div className="partner">
        {data.map((partner) => {
          return (
            <Card
              name={partner.name}
              des={partner.description}
              img={partner.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Partner;
