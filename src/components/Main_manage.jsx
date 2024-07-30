import React, { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import Tableproduct from './Tablepickup';
import Tableproduct2 from './Tablefour';
import Tableproduct4 from './Tabletract';

function Main_manage() {
  const [Id, setId] = useState("");
  const [CarName, setCarName] = useState("");
  const [ModelName, setModelName] = useState("");
  const [ModelYear, setModelYear] = useState("");
  const [Details, setDetails] = useState("");
  const [UniqueID, setUniqueID] = useState("");
  const [Status, setStatus] = useState("Available at Best Price");
  const [images, setImages] = useState([]);
  const [submitting, setSubmitting] = useState(false); // State to track form submission

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (submitting) return; // Prevent multiple submissions

    setSubmitting(true); // Set submitting state to true

    const formData = new FormData();
    formData.append("Id", Id);
    formData.append("CarName", CarName);
    formData.append("ModelName", ModelName);
    formData.append("ModelYear", ModelYear);
    formData.append("Status", Status);
    formData.append("Details", Details);
    formData.append("UniqueID", UniqueID);

    images.forEach((image, index) => {
      formData.append(`images`, image);
    });

    try {
      const endpointMap = {
        'Pickup / पिकअप': "https://sai-motors-backend.vercel.app/pic/upload-image",
        'Four Wheeler / फोर व्हिलर': "https://sai-motors-backend.vercel.app/four/upload-image",
        'Other / इतर': "https://sai-motors-backend.vercel.app/trac/upload-image"
        // Add other endpoints if necessary
      };
      if (endpointMap[Id]) {
        const response = await axios.post(endpointMap[Id], formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(response.data);
        // Reset form state
        setId("");
        setCarName("");
        setModelName("");
        setModelYear("");
        setDetails("");
        setUniqueID("");
        setStatus("Available at Best Price");
        setImages([]);

        // Clear file input value
        document.getElementById('image-input').value = "";
      } else {
        console.log("Invalid Id");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false); // Set submitting state to false after request is completed
    }
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  return (
    <div style={{ backgroundColor: '#F0EBE3' }}>
      <br /><br />
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={12} lg={12} xs={12}>
          <Card className="px-4" style={{ margin: '5px',border:'2px outset #000',
                      borderRadius: '50px', backgroundColor:'#E6E6FA'}}>            
              <div className="mb-3 mt-md-4">
                <h4 className=" mb-2 text-center text-uppercase" style={{ fontWeight: "bold", color: "#007bff",padding:'30px 0 0 0' }}>
                  Add Vehicle &nbsp;📝
                </h4>
                <br></br>
                <div className="mb-3">
                  <Form onSubmit={handleSubmit}>
                    <div style={{
                      backgroundColor: "#B4E380", border: '2px outset #000',
                      borderRadius: '20px', padding: '10px', margin:'0'
                    }}>
                      <h5 style={{ textAlign: "left", opacity: "0.6" }}># for technical use only</h5>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="UniqueID">
                          <Form.Label style={{ fontWeight: "bold", textAlign: "left", display: "block", padding: "20px 10px 0px 10px" }}><h5>Unique ID</h5></Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Unique Id"
                            value={UniqueID}
                            onChange={(e) => setUniqueID(e.target.value)}
                          />
                        </Form.Group>
                      </Row><Row>
                        <Form.Group as={Col} controlId="Type">
                          <Form.Label style={{ fontWeight: "bold", textAlign: "left", display: "block", padding: "20px 10px 0px 10px" }}><h5>Type</h5></Form.Label>
                          <Form.Select
                            defaultValue="Choose..."
                            type="text"
                            value={Id}
                            onChange={(e) => setId(e.target.value)}
                          >
                            <option>Select Id</option>
                            <option>Pickup / पिकअप</option>
                            <option>Four Wheeler / फोर व्हिलर</option>
                            <option>Other / इतर</option>
                            {/* Add other options if necessary */}
                          </Form.Select>
                        </Form.Group>
                      </Row><br />
                    </div>
                    <br />
                    <h5 style={{ textAlign: "left", opacity: "0.6" }}># for display use only</h5>
                    <Row>
                      <Form.Group as={Col} controlId="CarName">
                        <Form.Label style={{ fontWeight: "bold", textAlign: "left", display: "block", padding: "20px 10px 0px 10px" }}><h5>Car Name</h5></Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter car name"
                          value={CarName}
                          onChange={(e) => setCarName(e.target.value)}
                        />
                      </Form.Group>
                    </Row>
                    <br />
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="ModelName">
                        <Form.Label style={{ fontWeight: "bold", textAlign: "left", display: "block", padding: "20px 10px 0px 10px" }}><h5>Model Name</h5></Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter model name"
                          value={ModelName}
                          onChange={(e) => setModelName(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="ModelYear">
                        <Form.Label style={{ fontWeight: "bold", textAlign: "left", display: "block", padding: "20px 10px 0px 10px" }}><h5>Model Year</h5></Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter model year"
                          value={ModelYear}
                          onChange={(e) => setModelYear(e.target.value)}
                        />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group as={Col} controlId="Status">
                        <Form.Label style={{ fontWeight: "bold", textAlign: "left", display: "block", padding: "20px 10px 0px 10px" }}><h5>Status</h5></Form.Label>
                        <Form.Select
                          defaultValue="Choose..."
                          value={Status}
                          onChange={(e) => setStatus(e.target.value)}>
                          <option>Available at Best Price</option>
                          <option>Sold</option>
                          {/* Add other status options if necessary */}
                        </Form.Select>
                      </Form.Group>
                    </Row>

                    <Form.Group controlId="Details">
                      <Form.Label style={{ fontWeight: "bold", textAlign: "left", display: "block", padding: "20px 10px 0px 10px" }}><h5>Details</h5></Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter details"
                        value={Details}
                        onChange={(e) => setDetails(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group controlId="image">
                      <Form.Label style={{ fontWeight: "bold", textAlign: "left", display: "block", padding: "20px 10px 0px 10px" }}><h5>Add Photos</h5></Form.Label>
                      <Form.Control
                        id="image-input"
                        type="file"
                        accept="image/*"
                        multiple  // Allow multiple file selection
                        onChange={handleImageChange}
                      />
                    </Form.Group>

                    <br /><br />
                    <Button variant="primary" type="submit" disabled={submitting} style={{ padding: "10px 30px 10px 30px", borderRadius: "8px", backgroundColor: "#007bff", borderColor: "#007bff", fontWeight: "bold",
                border: '2px groove #000'}}>
                      {submitting ? 'Submitting...' : 'Submit'}
                    </Button>
                  </Form>
                </div>
              </div>
          </Card>
        </Col>
      </Row>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Tableproduct /><br />
      <Tableproduct2 /><br />
      <Tableproduct4 />
      <br />

    </div>
  );
}

export default Main_manage;
