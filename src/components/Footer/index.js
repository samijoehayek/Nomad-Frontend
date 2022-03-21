import "./styles.scss"
import {Button, Col, Container, Row} from "react-bootstrap";
import Brand from "../../assets/images/logo.png";
import React from "react";
import {FaTwitter} from "react-icons/fa";
import {RiDiscordLine} from "react-icons/ri";

const Footer = () => {
    return (
      <div className="footerPositioning">
          <Container>
              <Row>
                  <Col xs={{span:12, order:1}} lg={{span:4, order:1}} className="brandFooterPositioning">
                      <img src={Brand} alt="Logo" className="imageSizing"/>
                  </Col>
                  <Col xs={{span:12, order:2}} lg={{span:4, order:2}}>
                      <Row >
                          <Col className="d-flex justify-content-center">
                              <ul className="nomadFooterUL">
                                  <li className="nomadFooterLi">roadmap</li>
                                  <li className="nomadFooterLi">team</li>
                                  <li className="nomadFooterLi">gallery</li>
                                  <li className="nomadFooterLi">contact us</li>
                              </ul>
                          </Col>
                      </Row>
                      <br/>
                      <Row >
                          <Col className="d-flex justify-content-center">
                              <Button variant="light" className="nomadNavBarButtonDiscord rounded-0"><FaTwitter /></Button>{' '}
                              <Button variant="light" className="nomadNavBarButtonDiscord rounded-0"><RiDiscordLine /></Button>{' '}
                          </Col>
                      </Row>
                      <br/>
                      <br/>
                      <Row>
                          <Col className="d-flex justify-content-center">
                              <p className="stylingTandC">
                                  Privacy Policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Terms & Conditions
                              </p>
                          </Col>
                      </Row>
                  </Col>
                  <Col xs={{span:12, order:3}} lg={{span:4, order:3}}>

                  </Col>
              </Row>
          </Container>
      </div>
    );
};

export default Footer;