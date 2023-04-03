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
import Card1 from "../assets/card1.png";
import Card2 from "../assets/card2.png";
import Card3 from "../assets/card3.png";
import UpLeft from "../assets/upleft.png";
import ChooseDestinations from "../assets/ChooseDestinations.png";
import MakePayment from "../assets/MakePayment.png";
import ReachAirport from "../assets/ReachAirport.png";
import GirlRed from "../assets/girlRed.png";
import Leaf from "../assets/LEAF.png";
import MapIcon from "../assets/map-icon.png";
import Send from "../assets/send.png";
import Building from "../assets/building.png";
import Temple from "../assets/temple.png";
import Men from "../assets/men.png";
import Alitalia from "../assets/alitalia.png";
import Axon from "../assets/axon.png";
import Expedia from "../assets/expedia.png";
import Jetstar from "../assets/jetstar.png";
import Qantas from "../assets/qantas.png";

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
            Travel,
            <span>
              enjoy <img src={Underline} alt="Underline" />
            </span>
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
          <img src={Traveller} alt="traveler_image" />
        </div>
      </div>

      <div className="category container">
        <img className="bg-plus" src={BgPlus} alt="bg_image" />
        <h6>CATEGORY</h6>
        <h1>We Offer Best Services</h1>
        <img className="bg-orange" src={BgOrange} alt="background" />
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

      <div className="container destinations">
        <h6>Top Selling</h6>
        <h1>Top Destinations</h1>
        <div className="d-card-container">
          <div className="d-card">
            <img src={Card1} alt="card_image" />
            <div>
              <div className="writing-container flex flex-col">
                <span className="flex justify-between up-content">
                  <h4>Rome, italy</h4>
                  <h4>$5,42k</h4>
                </span>
                <span className="flex items-center down-content ">
                  <img src={UpLeft} alt="up_left_image" />
                  <h4>10 Days Trip</h4>
                </span>
              </div>
            </div>
          </div>
          <div className="d-card">
            <img src={Card2} alt="card_image" />
            <div>
              <div className="writing-container flex flex-col">
                <span className="flex justify-between up-content">
                  <h4>London, UK</h4>
                  <h4>$4.2k</h4>
                </span>
                <span className="flex items-center down-content ">
                  <img src={UpLeft} alt="" />
                  <h4>12 Days Trip</h4>
                </span>
              </div>
            </div>
          </div>
          <div className="d-card">
            <img src={Card3} alt="card_image" />
            <div>
              <div className="writing-container flex flex-col">
                <span className="flex justify-between up-content">
                  <h4>Full Europe</h4>
                  <h4>$15k</h4>
                </span>
                <span className="flex items-center down-content ">
                  <img src={UpLeft} alt="up_left_image" />
                  <h4>28 Days Trip</h4>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="easy-and-fast container flex justify-between items-center">
        <div className="writing-content">
          <h4>Easy and Fast</h4>
          <h1>Book your next trip in 3 easy steps</h1>
          <div className="img-side-content">
            <div>
              <img src={ChooseDestinations} alt="destinations" />
            </div>
            <div>
              <h5>Choose Destination</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
          <div className="img-side-content">
            <div>
              <img src={MakePayment} alt="Payment" />
            </div>
            <div>
              <h5>Make Payment</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
          <div className="img-side-content">
            <div>
              <img src={ReachAirport} alt="Airport" />
            </div>
            <div>
              <h5>Reach Airport on Selected Date</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="image-content">
          <img src={GirlRed} alt="girl" />
          <h4 className="trip">Trip To Greece</h4>
          <div className="date">
            <span>14-29 June</span>
            <span>|</span>
            <span>by Robbin joseph</span>
          </div>
          <div className="flex mt-4">
            <img className="mr-4" src={Leaf} alt="Leaf-Icon" />
            <img className="mr-4" src={MapIcon} alt="Map-Icon" />
            <img src={Send} alt="Send-Icon" />
          </div>
          <div className="flex building-container items-center justify-between mt-10">
            <span className="building flex">
              <img src={Building} alt="building-logo" />
              <h4>24 people going</h4>
            </span>
            <i class="fa-regular fa-heart"></i>
          </div>
          <div className="rel-container flex">
            <div>
              <img src={Temple} alt="temple" />
            </div>
            <div className="rel-writing">
              <h4>Ongoing</h4>
              <h2>Trip to rome</h2>
              <h5>
                <span>40%</span> completed
              </h5>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Testimonials container flex justify-between">
        <div className="test-writing">
          <h5>Testimonials</h5>
          <h1>What people say about Us.</h1>
          <div className="flex">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div className="icons">
          <i className="active" class="fa-solid fa-chevron-up"></i>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div className="test-card">
          <div className="t-card-1">
            <img src={Men} alt="men_image" />
            <p>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <h3>Mike taylor</h3>
            <h6>Lahore, Pakistan</h6>
          </div>
          <div className="test-card">
            <div className="t-card-1-border">
              <p>
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </p>
              <h3>Mike taylor</h3>
              <h6>Lahore, Pakistan</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="Logos container">
        <img src={Alitalia} alt="Logo_1" />
        <img src={Axon} alt="Logo_2" />
        <img src={Expedia} alt="Logo_3" />
        <img src={Jetstar} alt="Logo_4" />
        <img src={Qantas} alt="Logo_5" />
      </div>

      <div className="subscribe container">
        <div className="sub-container flex flex-col justify-center items-center">
          <h1>
            Subscribe to get information, latest news and other interesting
            offers about Cobham
          </h1>
          <div className="email-container justify-center flex items-center">
            <div className="email-field">
              <i class="fa-regular fa-envelope"></i>
              <input type="email" placeholder="Your email" />
            </div>
            <div>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer container">
         <div className="logo_container">
            <h1>Jadoo.</h1>
            <p>Book your trip in minute, get full Control for much longer.</p>
         </div>
         <div className="quick_container">
            <div className="company">
              <h4>About</h4>
              <h4>Careers</h4>
              <h4>Mobile</h4>
            </div>
            <div className="Contact">
              <h4>Help/FAQ</h4>
              <h4>Press</h4>
              <h4>Affiliates</h4>
            </div>
            <div className="more">
              <h4>Airline fees</h4>
              <h4>Airline</h4>
              <h4>Low fare tips</h4>
            </div>
         </div>
         <div>
          <div></div>
          <h2>Discover our app</h2>
          <div></div>
          <div></div>
         </div>
      </div>
    </>
  );
};

export default Navbar;
