import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function SearchBar() {
  return (
    <Container className="mt-5 d-flex justify-content-center mb-5">
      <Row>
        <Col sm={8} md={6} lg={4}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill flex-grow-1"
              aria-label="Search"
              style={{ minWidth: '500px' }} // Set minimum width for the search bar
            />
            <Button className="rounded-pill" variant="outline-primary" style={{ minWidth: '80px' }}>
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
