'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const categories = [
    { label: 'Business', category: 'business' },
    { label: 'Technology', category: 'technology' },
    { label: 'Sports', category: 'sports' },
    { label: 'Health', category: 'health' },
    { label: 'Science', category: 'science' },
    { label: 'Politics', category: 'politics' },
];

const CategoryNavbar = () => {
    return (
        <nav
            aria-label="Category Navigation"
            style={{
                backgroundColor: '#fff',
                borderBottom: '1px solid #ddd',
                padding: '10px 0',
            }}
        >
            <Container fluid>
                <Row>
                    <Col>
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '20px',
                                justifyContent: 'center',
                                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                                fontSize: '0.95rem',
                                fontWeight: 600,
                            }}
                        >
                            {categories.map((category, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    style={{
                                        fontSize: '12px',
                                        color: '#000000',
                                        fontWeight: 500,
                                        fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
                                        textDecoration: 'none',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {category.label}
                                </a>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
};

export default CategoryNavbar;
