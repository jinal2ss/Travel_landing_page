import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../assets/Logo.png";
import Underline from "../assets/underline.png";
import Traveller from "../assets/traveller.png";
import BgPlus from "../assets/plus.png";
import Weather from "../assets/weather.png";
import Plane from "../assets/plane.png";
import Voice from "../assets/voice.png";
import Settings from "../assets/settings.png";
import BgOrange from "../assets/bg-orange.png";

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto mt-6 flex justify-between items-center">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>

        <div className="quick-links">
          <a>
            <Link to="/destinations">Destinations</Link>
          </a>
          <a>
            <Link to="/hotels">Hotels</Link>
          </a>
          <a>
            <Link to="/flights">Flights</Link>
          </a>
          <a>
            <Link to="/bookings">Bookings</Link>
          </a>
          <a className="login">
            <Link to="/login">Login</Link>
          </a>
          <a>
            <button className="btn">
              <Link to="/signup">Sign up</Link>
            </button>
          </a>
          <a className="language">
            <Link to="/language">
              EN{" "}
              <span>
                <i class="fa-solid fa-angle-down"></i>
              </span>
            </Link>
          </a>
        </div>
      </nav>

      <div className="header container mx-auto flex justify-between items-center">
        <div className="left">
          <h4>Best Destinations around the world</h4>
          <h1>
            Travel,{" "}
            <span>
              enjoy <img src={Underline} />{" "}
            </span>{" "}
            and live a new and full life
          </h1>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          <div className="btn-container">
            <button className="btn-left">Find out more</button>
            <button className="btn-right">
              <i class="fa-solid fa-circle-play"></i>Play Demo
            </button>
          </div>
        </div>
        <div className="right">
          <img src={Traveller} />
        </div>
      </div>

      <div className="category container">
        <img className="bg-plus" src={BgPlus} />
        <h6>CATEGORY</h6>
        <h1>We Offer Best Services</h1>
        <img className="bg-orange" src={BgOrange} alt="background"/>
        <div className="flex justify-between items-center">

          <div className="card">
            <img src={Weather} alt="weather" />
            <h3>Calculated Weather</h3>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>

          <div className="card-2">
            <div className="card mx-auto">
              <img src={Plane} alt="weather" />
              <h3>Best Flights</h3>
              <p>Engrossed listening. Park gate sell they west hard for the.</p>
            </div>
          </div>

          <div className="card">
            <img src={Voice} alt="weather" />
            <h3>Local Events</h3>
            <p>
              Barton vanity itself do in it. Prefer to men it engrossed
              listening.{" "}
            </p>
          </div>

          <div className="card">
            <img src={Settings} alt="weather" />
            <h3>Customization</h3>
            <p>
              We deliver outsourced aviation services for military customers
            </p>
          </div>
        </div>
      </div>

      <div className="destinations">
         <h6>Top Selling</h6>
         <h1>Top Destinations</h1>
        <div className="d-card-container">
          <div className="d-card">
            
          </div>
        </div>
        

      </div>
    </>
  );
};

export default Navbar;
