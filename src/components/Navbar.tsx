import Link from 'next/link';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const categories = [
     { label: 'Business', category: 'business' },
    { label: 'Sports', category: 'sports' },
    { label: 'Politics', category: 'politics' },
    { label: 'Technology', category: 'technology' },
    { label: 'Health', category: 'health' },
    { label: 'Science', category: 'science' },
    { label: 'Entertainment', category: 'entertainment' },
    { label: 'Education', category: 'education' },

];

const Navbar = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    return (

        <nav
            aria-label="Category Navigation"
            style={{
                backgroundColor: 'transparent',
                borderTop: '1px solid #ccc',
                borderBottom: '2px solid #ccc',
                padding: '7px 0',
                position: 'relative',
                zIndex: 10,
            }}
        >
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: '28px',
                                fontFamily: '"Poppins", "Segoe UI", sans-serif',
                                fontSize: '12.5px',
                                fontWeight: 700,
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                            }}
                        >
                            {categories.map((item) => (
                                <Link
                                    key={item.category}
                                    href={`/${item.category}`}
                                    title={item.label}
                                    style={{
                                        padding: '6px 10px',
                                        color: '#000',
                                        textDecoration: hovered === item.category ? 'underline' : 'none',
                                        textUnderlineOffset: '5px',
                                        fontFamily: '"Poppins", "Segoe UI", sans-serif',
                                        transition: 'text-decoration 0.3s ease',
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={() => setHovered(item.category)}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
};

export default Navbar;
