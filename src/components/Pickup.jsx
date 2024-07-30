import React, { useEffect, useState } from 'react';
import { Container, Image, Button, Row, Card, Col, ListGroup, CardBody } from 'react-bootstrap';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';


const Pickup = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShow(true);
  };

  useEffect(() => {
    axios.get("https://sai-motors-backend.vercel.app/pic/get-image")
      .then(res => {
        console.log(res.data);
        setData(res.data.data); // Make sure to use the correct property from the response
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid><br />
      <Navbar.Brand>
        <h6 style={{ padding: "10px" }}>
          <span style={{ color: "white", backgroundColor: "#272829", borderStyle: 'ridge', borderWidth: '5px', borderRadius: "30px", padding: "15px 20px", textDecoration: "none" }}>PICKUP / पिकअप  🛻</span>
        </h6><br />
      </Navbar.Brand>
      <Row>
        {data.map((vehicle) => (
          <Col key={vehicle.UniqueID} xs={12} sm={6} md={4} className="mb-4">
            <Card className="card-hover" style={{
              border: '2px outset #000',
              borderRadius: '20px',
              padding: '4px 12px',
              backgroundColor: 'white',
              boxShadow: 'inset 0 0 15px 10px #FFD35A'
            }}>
              <div className="card-img-container" style={{ width: '100%', height: 'auto', padding: '10px 0px 10px 0px' }} onClick={() => handleShow(vehicle)}>
                {vehicle.images && vehicle.images[0] && (
                  <Image
                    src={vehicle.images[0]}
                    thumbnail
                    style={{
                      height: '283px', width: 'auto', border: '1px groove #939185',
                      borderRadius: '10px'
                    }}
                  />
                )}
              </div>
              <ListGroup style={{ borderRadius: '300px', border: 'none' }}>
                <ListGroup.Item><Card.Text style={{ textTransform: "uppercase",color:"#ff8c00"}}><h5><strong>{vehicle.CarName}</strong></h5></Card.Text>
                </ListGroup.Item>
                <ListGroup.Item><Card.Text><strong>Model Name:</strong> {vehicle.ModelName}</Card.Text></ListGroup.Item>
                <ListGroup.Item><Card.Text><strong>Model Year:</strong> {vehicle.ModelYear}</Card.Text></ListGroup.Item>
                <ListGroup.Item><Card.Text><strong>Status:</strong> {vehicle.Status}</Card.Text></ListGroup.Item>

                <ListGroup.Item>
                  <Card.Text>
                    {vehicle.Details}
                  </Card.Text>
                </ListGroup.Item>
              </ListGroup>
              <Button variant="primary" style={{
                color: '#ffffff',
                backgroundColor: '#007bff',
                border: '3px groove #000',
                borderRadius: '10px',
                padding: '6px 0px',
                margin: '12px 12px'
              }} onClick={() => handleShow(vehicle)}><strong>More Images</strong></Button>{' '}

            </Card>

            {selectedVehicle && (
              <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>{selectedVehicle.CarName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {selectedVehicle.images && selectedVehicle.images.map((image, idx) => (
                    <Image
                      key={idx}
                      src={image}
                      thumbnail
                      style={{ marginRight: '10px', width: '100%' }}
                    />
                  ))}
                </Modal.Body>
              </Modal>
            )}
          </Col>
        ))}
      </Row>
      <hr style={{border: '4px inset #000'}}/>
    </Container>
  );
}

export default Pickup;
