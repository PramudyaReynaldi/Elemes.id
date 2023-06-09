import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonAllReceipt from "./Buttons/ButtonAllReceipt";
import imgPizza from "../assets/images/pizza.png";
import imgPizza2 from "../assets/images/pizza2.png";
import imgKebab from "../assets/images/kebab.png";
import imgSalmon from "../assets/images/sushi.png";
import imgCake from "../assets/images/cake.png";
import imgDonut from "../assets/images/donut.png";
import imgDonut2 from "../assets/images/donut2.png";
import imgFood from "../assets/images/food.png";
import imgRate5 from "../assets/images/rate_5.png";
import imgRate4 from "../assets/images/rate_4.png";
import imgRate3 from "../assets/images/rate_3.png";

function Trending() {
  return (
    <>
      <Container className="hero__content">
        <h2>Browser Our Trending Receipt</h2>
        <h2 style={{ color: "#8BAC3E" }}>Receipt</h2>
      </Container>
      <div className="container-fluid">
        <Row className="card__food justify-content-center">
          <Col lg={3} xs={12} className="list__foods">
            <img src={imgPizza} />
            <p className="brand__text pt-3">Pizza Paperoni</p>
            <p className="model__food">Pizza</p>
            <img src={imgRate4} />
          </Col>
          <Col lg={3} xs={12} className="list__foods">
            <img src={imgPizza2} />
            <p className="brand__text pt-3">Pizza Meat</p>
            <p className="model__food">Pizza</p>
            <img src={imgRate3} />
          </Col>
          <Col lg={3} xs={12} className="list__foods">
            <img src={imgKebab} />
            <p className="brand__text pt-3">Doner Kebab</p>
            <p className="model__food">Kebab</p>
            <img src={imgRate5} />
          </Col>
          <Col lg={3} xs={12} className="list__foods">
            <img src={imgSalmon} />
            <p className="brand__text pt-3">Salmon Roll</p>
            <p className="model__food">Salmon</p>
            <img src={imgRate4} />
          </Col>
          
          <Col lg={3} xs={12} className="list__foods">
            <img src={imgCake} />
            <p className="brand__text pt-3">Cupcake Choco</p>
            <p className="model__food">Cupcake</p>
            <img src={imgRate4} />
          </Col>
          <Col lg={3} xs={12} className="list__foods">
            <img src={imgDonut} />
            <p className="brand__text pt-3">Doughnut Milk</p>
            <p className="model__food">Doughnut</p>
            <img src={imgRate4} />
          </Col>
          <Col lg={3} xs={12} className="list__foods">
            <img src={imgDonut2} />
            <p className="brand__text pt-3">Doughnut Unicorn</p>
            <p className="model__food">Doughnut</p>
            <img src={imgRate4} />
          </Col>
          <Col lg={3} xs={12} className="list__foods">
            <img src={imgFood} />
            <p className="brand__text pt-3">Kathi Kebab</p>
            <p className="model__food">Kebab</p>
            <img src={imgRate4} />
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <ButtonAllReceipt />
        </div>
      </div>
    </>
  );
}

export default Trending;
