import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import imgNavbar from "../assets/images/image_55.png";
import iconMail from "../assets/images/mail.png";
import iconPhone from "../assets/images/phone.png";
import iconInsta from "../assets/images/insta.png";

export default function Footer() {
  return (
    <footer className="pt-5 mt-5">
      <Container>
        <div className="bg-light rounded p-5">
          <Row>
            <Col cols="12" md="4" sm="6">
              <div className="px-8 pr-md-0 pt-6">
                <Image width="150" src={imgNavbar} alt="Logo Elemes" fluid />
                <p className="mt-5 text-muted">
                  Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
                  Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus
                  Ibukota Jakarta 12950
                </p>
                <div>
                  <a href="mailto:elemesid@gmail.com">
                    <img src={iconMail} />
                  </a>
                  <a color="primary" href="tel:+6288811112222">
                    <img src={iconPhone} className="m-3" />
                  </a>
                  <a color="primary">
                    <img src={iconInsta} />
                  </a>
                </div>
              </div>
            </Col>
            <Col cols="12" md="2" sm="6">
              <h2 className="font__footer">Categories</h2>
              <div className="px-8 px-md-0 pt-6 text-muted">
                <p>Cupcake</p>
                <p>Pizza</p>
                <p>Kebab</p>
                <p>Salmon</p>
                <p>Dougnut</p>
              </div>
            </Col>
            <Col cols="12" md="2" sm="6">
                <h2 className="font__footer">About Us</h2>
                <div className="px-8 px-md-0 pt-6 text-muted">
                <p>About Us</p>
                <p>FAQ</p>
                <p>Report Problem</p>
              </div>
            </Col>
            <Col cols="12" md="4" sm="6">
              <div className="px-8 pl-md-0 pt-6">
                <h2 className="mb-6 font__footer">Newsletter</h2>
                <p className="text-muted">
                  Get now free 50% discount for all products on your first order
                </p>
                <div className="d-flex mb-3">
                  <input type="email" placeholder="Email" className="rounded" />
                  <Button
                    style={{ background: "#8BAC3E", border: "none" }}
                    className="rounded"
                  >
                    SEND
                  </Button>
                </div>
                <div className="d-flex align-center">
                  <a
                    href="mailto:elemesid@gmail.com"
                    className="text-decoration-none py-1"
                  >
                    <img src={iconMail} />
                    <span className="text-muted">elemesid@gmail.com</span>
                  </a>
                </div>
                <div className="d-flex align-center">
                  <a
                    href="tel:+6288811112222"
                    className="text-decoration-none py-1"
                  >
                    <img src={iconMail} />
                    <span className="text-muted">0888 1111 2222</span>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="text-center pt-8 body-2 grey--text">
          <span>
            &copy; {new Date().getFullYear()}{" "}
            <a href="/" className="text-decoration-none text-dark">
              Elemes.id
            </a>{" "}
            All rights reserved
          </span>
        </div>
      </Container>
    </footer>
  );
}
