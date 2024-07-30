import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col } from 'react-bootstrap';
import img1 from "./images/home.jpg"
import pic from './images/swami.png';

function Header() {
  return (
    <div style={{border: '4px outset #000', backgroundColor: "#FFEEA9",borderRadius: '10px'}}>
      <div style={{ backgroundColor: "#FFDB00", padding: "15px 0px 0px", borderRadius: "150px", border: "1px 0px 1px 0px solid black" }}>
        <div style={{ backgroundColor: "#FFDB00" }}>
          <Container className="justify-content-center">
            <div style={{ fontWeight: 600 }} className="marathi-text"> || श्री कोळाईदेवी प्रसन्न ||</div>
          </Container>
        </div>
        {/* First */}
        <Navbar className="skinny-yellow-navbar" style={{ backgroundColor: "#FFDB00" }}>
          <Container style={{ backgroundColor: "#FFDB00" }}>
            <div style={{ fontWeight: 600 }} className="marathi-text"> || श्री गणेशाय नमः || </div>
          </Container >
          <Container className="justify-content-end" style={{ backgroundColor: "#FFDB00" }}>
            <div style={{ fontWeight: 600, backgroundColor: "#FFDB00" }} className="marathi-text">|| श्री स्वामी समर्थ ||</div>
          </Container>
        </Navbar>
        {/* Second */}<br/>
        <Navbar className="skinny-yellow-navbar" style={{ backgroundColor: "#FFDB00" }}>
          <Container>
            <Navbar.Brand className="marathi-text"><h3 style={{ backgroundColor: "#FFDB00",borderBottom: '4px groove #000',borderTop: '2px groove #000',borderRight: '2px  groove #000',borderLeft: '2px  groove #000', borderRadius: "300px", padding: "12px 20px 12px 20px" }}>
              <strong><img src={pic} alt="Logo" width="50" style={{ marginRight: '2px' }} />श्री स्वामी समर्थ मोटर्स &nbsp;</strong>
            </h3></Navbar.Brand>
          </Container>
        </Navbar>
        <br />
      </div>
      <br />
      {/* Third */}

      <Navbar className="skinny-yellow-navbar">
        {/* <Container className="justify-content-end"> */}

        <div style={{ color: 'black', fontWeight: 300 }}>💥&nbsp;सर्व प्रकारच्या फोर व्हिलर गाड्यांची योग्य दरात खरेदी-विक्री केली जाईल.</div>

      </Navbar>


      <Navbar className="skinny-yellow-navbar">

        <div style={{ color: 'black', fontWeight: 300 }}>💥&nbsp;शोरूम: नगर-दौण्ड हायवे कोळगाव फाटा ता.श्रीगोंदा जि.अ.नगर  </div>

      </Navbar>
      <br />
      
        <img src={img1} alt="hii" style={{ width: "100%", height: "100%", objectFit: "ConvolverNode", borderRadius: " 8px" }} />
        
      
      {/* Fourth */}
      <br /><br /><Container>
        <Row className="justify-content-center">
          <div className="names-numbers-container" style={{ backgroundColor: "#FFDB00", borderTopRightRadius: "20px", textDecoration: "none",borderTopLeftRadius: "20px" }}>
            <Col>
              <div className="name-number-item">
                <div className="name">प्रोप्रा. किशोरशेठ लगड</div>
                <div className="number">मो. 9561461564
                </div>
              </div>
            </Col>
            <Col>
              <div className="name-number-item">
                <div className="name">प्रोप्रा. तेजस झरेकर
                </div>
                <div className="number">मो. 9561461564
                </div>
              </div>
            </Col>
            <Col>
              <div className="name-number-item">
                <div className="name">प्रोप्रा. अविशेठ मचाले
                </div>
                <div className="number">मो. 862302613</div>
              </div>
            </Col>
          </div>

        </Row>
        </Container>
    </div>
  );
}

export default Header;