import React, { useState } from "react";
import { Button, Col, Container, Row, Image, Card } from "react-bootstrap";
import Navcomponent from "../Navbar/Navcomponent";
import "./Home.css";
import {
  FaGooglePlay,
  FaAppStore,
  FaFacebookF,
  FaTwitter,
  FaGooglePlus,
  FaInstagram,
  FaLongArrowAltUp,
} from "react-icons/fa";
import { GiArrowScope } from "react-icons/gi";

const Home = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <Navcomponent />
      <Container className="home__container">
        <Row className="row__container" id="home">
          <Col lg={5} className="intro__container">
            <h1 className="intro__text">Download your Kopwar App</h1>
            <p className="my-4 text-muted">
              Please download and install on your phone ..! Thanks
            </p>
            <div className="btn__container">
              <Button
                variant="warning"
                size="large"
                className="playstore__btn btn-lg"
              >
                <FaGooglePlay style={{ marginRight: 20 }} />
                Google Play
              </Button>
              <Button
                variant="warning"
                size="large"
                className="huawei__btn btn-lg"
              >
                For Huawei Phone
              </Button>
            </div>
            <h3 className="appstore__text my-4">
              <FaAppStore style={{ marginRight: 20 }} />
              Coming Soon Apple Store
            </h3>
          </Col>
          <Col md={6} className="img__container">
            <div className="device">
              <Image
                src="/images/mobile.png"
                alt="logo"
                className="intro__logo"
              />
            </div>
          </Col>
        </Row>
        <Row className="card__container" id="about">
          <Col md={4}>
            <Card className="pt-5 my-3 px-4 shadow card__item ">
              <Card.Body>
                <Image
                  src="/images/document.svg"
                  alt="document"
                  className="card__icon"
                />
                <h4 className=" py-4 firstCard__title">Kopwar Mart</h4>
                <p className="pb-4">
                  KOPWAR is an online store. Begin as a foodservice provider to
                  business and other service. By using our app, you will never
                  need to go to Market and get your hand dirty. *Currently
                  available in Yangon
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="pt-5 my-3 px-4 shadow card__item ">
              <Card.Body>
                <Image src="/images/map.svg" alt="map" className="card__icon" />
                <h4 className=" py-4 firstCard__title">Kopwar Life</h4>
                <p className="pb-4">
                  Now we opened KOPWAR ACADEMY for Student (Online Learning
                  System)
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="pt-5 my-3 px-4 shadow card__item ">
              <Card.Body>
                <GiArrowScope className="card__icon" />
                <h4 className=" py-4 firstCard__title">
                  Kopwar Services Provider
                </h4>
                <p className="pb-4">
                  With our fair and transparent pricing, you know you’ll always
                  get a good deal.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="footer__container">
          <Col md={3}>
            <Image
              src="/images/kopwar.jpeg"
              roundedCircle
              className="footer__img"
            />
            <p className="text-muted">
              KOPWAR is an online store. Begin as a foodservice provider to
              business and other service. By using our app, you will never need
              to go to Market and get your hand dirty.
            </p>
          </Col>
          <Col md={2}></Col>
          <Col md={2}></Col>
          <Col md={5} className="contact__container">
            <h3 className="footer__text mb-4">Contact Info</h3>
            <ul className="list-unstyled">
              <li className="mb-2 text-muted">
                Shwe Hintha Road 2, No. 58, Hlaing Township,Yangon
              </li>
              <li className="mb-2">
                <a className="footer__link" href="tel:09447407050">
                  09447407050
                </a>
              </li>
              <li className="mb-2">
                <a className="footer__link" href="mailto:sane.l.wunn@gmail.com">
                  sane.l.wunn@gmail.com
                </a>
              </li>
            </ul>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a
                  class="social__link"
                  href="https://m.facebook.com/kopwarmm/?comment_id=Y29tbWVudDoxNTIzNTk2MTYyODYwMzhfMTUyNzA2Nzc5NTg0NjU1"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  class="social__link"
                  href="https://m.facebook.com/kopwarmm/?comment_id=Y29tbWVudDoxNTIzNTk2MTYyODYwMzhfMTUyNzA2Nzc5NTg0NjU1"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  class="social__link"
                  href="https://m.facebook.com/kopwarmm/?comment_id=Y29tbWVudDoxNTIzNTk2MTYyODYwMzhfMTUyNzA2Nzc5NTg0NjU1"
                >
                  <FaGooglePlus />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  class="social__link"
                  href="https://m.facebook.com/kopwarmm/?comment_id=Y29tbWVudDoxNTIzNTk2MTYyODYwMzhfMTUyNzA2Nzc5NTg0NjU1"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="copyrights">
          <div className="container text-center py-4">
            <p className="mb-0 text-muted text-sm">
              {" "}
              Copyright © Kopwar Website 2021.
            </p>
          </div>
        </div>
        <Button
          className="scrollup__btn"
          style={{ display: visible ? "inline" : "none" }}
          onClick={scrollToTop}
        >
          <FaLongArrowAltUp />
        </Button>
      </Container>
    </div>
  );
};

export default Home;
