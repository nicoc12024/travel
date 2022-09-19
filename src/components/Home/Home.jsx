import "./home.css";
import { useEffect } from "react";
import video from "../../assets/video.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted typeof="video/mp4"></video>

      <div data-aos="fade-down" className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Our Packages</span>
          <h1 data-aos="fade-down" className="homeTitle">
            Search Your Holiday
          </h1>
        </div>

        <div data-aos="fade-down" className="cardDiv grid">
          <div className="distinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here..." />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="labelTotal flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
