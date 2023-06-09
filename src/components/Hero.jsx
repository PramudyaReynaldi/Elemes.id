import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgHero from "../assets/images/Group_385.png";
import imgHeroMobile from "../assets/images/Group_mobile.png";
import ButtonAbout from "./Buttons/ButtonAboutUs";

export default function Hero() {
  const [imageUrl, setImage] = useState(imgHero);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImage(imgHeroMobile);
      } else {
        setImage(imgHero);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container className="hero__content">
      <Row>
        {isMobile ? (
          <>
            <Col sm={12}>

            <h1 style={{ fontSize: "64px", color: "#8BAC3E" }}>
              Good Food Us Good Mood
            </h1>
            <Col sm={12}>
              <img src={imageUrl} className="img-fluid img__hero" />
            </Col>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "300",
                  lineHeight: "29px",
                }}
              >
                I would think that conserving our natural resources should be a
                conservative position: Not to waste food, and not to throw away
                a lot of the food that we buy.
              </p>
              <button type="button" className="button__hero mt-4">
                Daftar Sekarang
              </button>
              <ButtonAbout />
            </Col>
          </>
        ) : (
          <>
            <Col lg={6} sm={12}>
              <h1 style={{ fontSize: "64px", color: "#8BAC3E" }}>
                Good Food Us Good Mood
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "300",
                  lineHeight: "29px",
                }}
              >
                I would think that conserving our natural resources should be a
                conservative position: Not to waste food, and not to throw away
                a lot of the food that we buy.
              </p>
              <button type="button" className="button__hero">
                Daftar Sekarang
              </button>
              <ButtonAbout />
            </Col>
            <Col lg={6} sm={12}>
              <img src={imageUrl} className="img-fluid img__hero" />
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
}
