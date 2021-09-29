import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Reviews.css";
import shape from "../../../src/img/Reviews/shape-bg.png";
import lady from '../../../src/img/Reviews/lady.png';
import mike from '../../../src/img/Reviews/mike.png';
import man from '../../../src/img/Reviews/man.png';

export default function Reviews(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Reviews"}
        subHeading={"What My Clients Say About Me"}
      />
      <section className="Reviews-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="reviews-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="review-item">
                  <div className="review-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I patronized Josh and when He delivered, I honestly fell
                      in love with the project He is a very honest guy and he
                      delivers on time.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={lady}
                      alt="no internet connection"
                    ></img>
                    <h5>Megan Miller</h5>
                    <p>CEO InansGlobal</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="review-item">
                  <div className="review-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      It was nice hiring Josh for my e-commerce project. He
                      delivered even more than I can imagine. Absolutely amazing!
                    
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={mike}
                      alt="no internet connection"
                    ></img>
                    <h5>Mike McCormick</h5>
                    <p>CEO MikeTech</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="review-item">
                  <div className="review-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I decided to hire Josh to get some work done. And I
                      couldn't be any happier of the results that I received.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={man}
                      alt="no internet connection"
                    ></img>
                    <h5>Todd Smith</h5>
                    <p>Bnaker</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className='footer-image'>
        <img src={shape} alt='image not responding'/>
      </div>
    </div>
  );
}
