'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <div
     style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 999,
        backgroundColor: '#000',
        color: '#fff',
        padding: '15px 0',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={4}></Col>
          <Col xs={4} className="text-center">
            <h1
              style={{
                fontFamily: 'serif',
                fontWeight: 'normal',
                margin: 0,
                fontSize: '1.8rem',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
              }}
            >
              THE NEW YORKER <span style={{ opacity: 0.5 }}>100</span>
            </h1>
          </Col>

          <Col
            xs={4}
            className="d-flex justify-content-end align-items-center gap-3"
          >
            {/* <a href="#" style={{
              fontSize: '12px',
              color: 'white',
              fontWeight: 500,
              fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif', textDecoration: 'none'
            }}>
              Newsletter
            </a> */}
            {/* <a href="#" style={{
              fontSize: '12px',
              color: 'white',
              fontWeight: 500,
              fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif', textDecoration: 'none'
            }}>
              Sign In
            </a> */}

            {/* <Button
              style={{
                fontSize: '12px',
                backgroundColor: '#0787CA',
                color: 'white',
                fontWeight: 500,
                fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
                padding: '4px 14px',
                borderRadius: '2px',

              }}
            >
              Subscribe
            </Button> */}
            {/* <span role="button" style={{ fontSize: '1.2rem', cursor: 'pointer' }}>
              🔍
            </span> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
