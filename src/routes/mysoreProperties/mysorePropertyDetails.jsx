import { useParams } from "react-router-dom";
import { bangalorePropertiesData } from "../../lib/dummyData";
import React from 'react';
import { Container, Row, Col, Card, CardImg, CardHeader } from 'react-bootstrap';

function BanglorePropertyDetail() {
    const { id } = useParams();
    const property = bangalorePropertiesData.find((p) => p.id === parseInt(id));
  
    if (!property) {
      return <div>Property not found</div>;
    }
  
    // Ensure property.img is always an array
    const images = Array.isArray(property.img) ? property.img : [property.img];
    const firstImage = images[1]; // Get the first image
  
    return (
      <Container>
        <Row className="my-5">
          <Col md={12}>
            <Card className="mb-4 shadow-sm">
              {/* Display only the first image */}
              <CardHeader>
              <Card.Img variant="top" src={property.img} className="img-fluid" />
              </CardHeader>
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                {property.extent && <Card.Text><strong>Extent:</strong> {property.extent}</Card.Text>}
                {property.location && <Card.Text><strong>Location:</strong> {property.location}</Card.Text>}
                {property.distance && <Card.Text><strong>Distance:</strong> {property.distance}</Card.Text>}
                {property.siteDimension && <Card.Text><strong>Site Dimension:</strong> {property.siteDimension}</Card.Text>}
                {property.totalPrice && <Card.Text><strong>Total Price:</strong> {property.totalPrice}</Card.Text>}
                <Card.Text>{property.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default BanglorePropertyDetail;
