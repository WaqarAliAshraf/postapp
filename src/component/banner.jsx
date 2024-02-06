
import img from "../images/banner-image.png";
import PersonList from "./PersonalList";


const Banner = () => {


  return (
    <div className="banner-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <h1>
              Articles for <br />
              <span>front-end devs</span>
            </h1>
            <p>Articles on web performance, responsive web design and more</p>
          </div>
          <div className="col-sm-12 col-md-7">
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>
        <PersonList/>
        <div className="container">
        </div>
      </div>
    </div>
  );
};

export default Banner;
