'use client';
import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaTiktok, FaThreads, FaXTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#0d0d0d', color: '#fff', paddingTop: '40px', fontSize: '0.95rem', paddingBottom: '30px', marginTop: "40px" }}>
            <Container>
                <Row className="gy-4 gx-0">
                    <Col xs={12} md={4}>
                        <div className="text-center text-md-start">
                            <Image
                                src="/images/logo-anniversary.png"
                                alt="The New Yorker 100th Anniversary"
                                width={180}
                                height={180}
                            />
                        </div>
                    </Col>

                    <Col xs={6} md={4} style={{ padding: '0 10px' }}>
                        <h6 style={{
                            fontFamily: '"Georgia", serif',
                            fontSize: '14px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            fontWeight: 400,
                        }}
                        >Categories</h6>
                        <ul style={{
                            fontSize: '14px',
                            color: '#A2A2A2',
                            fontWeight: 600,
                            fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap',
                            transition: 'color 0.3s ease', listStyle: 'none', padding: 0, margin: 0, lineHeight: '1.8'
                        }}>
                            <li>Business</li>
                            <li>Science</li>
                            <li>Politics</li>
                            <li>Technology</li>
                            <li>Sports</li>
                            <li>Health</li>
                        </ul>
                    </Col>

                    <Col xs={6} md={4} style={{ padding: '0 10px' }}>
                        <h6 style={{
                            fontFamily: '"Georgia", serif',
                            fontSize: '14px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            fontWeight: 400,
                        }}>About</h6>
                        <ul style={{
                            fontSize: '14px',
                            color: '#A2A2A2',
                            fontWeight: 600,
                            fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap',
                            transition: 'color 0.3s ease', listStyle: 'none', padding: 0, margin: 0, lineHeight: '1.8'
                        }}>
                            <li>Our Company</li>
                            <li>Our Editorial Approach</li>
                            <li>Our Mission</li>
                            <li>Editorial Standards & Ethics</li>
                        </ul>
                    </Col>
                </Row>
                <hr style={{ backgroundColor: '#444', margin: '30px 0' }} />

                <Row className="align-items-center text-center">
                    <Col md={9} className="mb-3 mb-md-0 text-center text-md-start">
                        <p
                            style={{
                                color: '#aaa',
                                fontSize: '0.85rem',
                                marginBottom: '0',
                                lineHeight: '1.6',
                            }}
                        >
                            © 2025 Condé Nast. All rights reserved. <em>The New Yorker</em> may earn a portion of sales from products that are purchased through our site as part of our Affiliate Partnerships with retailers.
                            The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of Condé Nast.{' '}
                            <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>Ad Choices</a>
                        </p>
                    </Col>

                    <Col md={3}>
                        <div className="d-flex justify-content-center gap-3">
                            <a href="#" aria-label="Instagram"><FaInstagram color="#fff" /></a>
                            <a href="#" aria-label="TikTok"><FaTiktok color="#fff" /></a>
                            <a href="#" aria-label="Threads"><FaThreads color="#fff" /></a>
                            <a href="#" aria-label="Twitter"><FaXTwitter color="#fff" /></a>
                            <a href="#" aria-label="Facebook"><FaFacebookF color="#fff" /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedinIn color="#fff" /></a>
                            <a href="#" aria-label="YouTube"><FaYoutube color="#fff" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
