import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './layout.css';

export default function Layout() {
  return (
    <main role="main" className="home">
      <Jumbotron>
        <div className="container">
          <h1>
            Track your Colorado 14ers
          </h1>
        </div>
      </Jumbotron>
    </main>
  );
}
