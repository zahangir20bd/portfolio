import React from "react";
import "./PricingCard.css";
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
    <div className="pricing w-full py-24 px-4 bg-[#000]">
      <dir className="pricing-container max-w-[1140px] m-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">$ 100</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact">
            <button className="button card-button"> Purchase Now</button>
          </Link>
        </div>
        <div className="card">
          <h3>- Premium -</h3>
          <span className="bar"></span>
          <p className="btc">$ 250</p>
          <p>- 2 Days -</p>
          <p>- 5 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact">
            <button className="button card-button"> Purchase Now</button>
          </Link>
        </div>
        <div className="card">
          <h3>- Business -</h3>
          <span className="bar"></span>
          <p className="btc">$ 500</p>
          <p>- 5 Days -</p>
          <p>- 8 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact">
            <button className="button card-button"> Purchase Now</button>
          </Link>
        </div>
      </dir>
    </div>
  );
};

export default PricingCard;
