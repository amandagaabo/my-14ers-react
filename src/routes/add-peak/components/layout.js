import React from 'react';
import { Col } from 'react-bootstrap';
import AddPeakForm from './add-peak-form';

export default function Layout(props) {
  return (
    <main role="main" className="container">
      <Col xs={12} className="add-peak-container">
        <h1 className="form-header">Add Peak</h1>
        <AddPeakForm {...props} />
      </Col>
    </main>
  );
}
