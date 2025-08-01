import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0d0d0d',
        color: '#fff',
        paddingTop: '40px',
        paddingBottom: '30px',
        fontSize: '0.95rem',
        marginTop: '10px',
      }}
    >
      <Container>
        <Row className="gy-4 gx-0">
          {/* Logo */}
          <Col xs={12} md={4}>
            <div className="text-center text-md-start">
              <Link href="/">
                <Image
                  src="/images/nystatenews-white-logo.webp"
                  alt="Nystate News logo"
                  width={200}
                  height={50}
                  style={{
                    height: '35px',
                    width: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </Link>
            </div>
          </Col>

          {/* Link Sections */}
          <Col xs={12} md={8}>
            <div
              className="d-flex flex-wrap gap-4 px-2"
              style={{ justifyContent: 'start' }}
            >
              {/* Categories Column 1 */}
              <div style={{ minWidth: '120px' }}>
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 400,
                    marginBottom: '6px',
                    color: '#fff',
                    borderBottom: '1px solid #fff',
                    paddingBottom: '4px',
                    display: 'inline-block',
                  }}
                >
                  Categories
                </h3>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '1.8' }}>
                  <li><Link href="/business" style={{ color: '#fff', textDecoration: 'none' }}>Business</Link></li>
                  <li><Link href="/health" style={{ color: '#fff', textDecoration: 'none' }}>Health</Link></li>
                  <li><Link href="/politics" style={{ color: '#fff', textDecoration: 'none' }}>Politics</Link></li>
                  <li><Link href="/science" style={{ color: '#fff', textDecoration: 'none' }}>Science</Link></li>
                </ul>
              </div>

              {/* Categories Column 2 */}
              <div style={{ minWidth: '120px' }}>
                <h3
                  className="invisible"
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 400,
                    marginBottom: '6px',
                    borderBottom: '1px solid #fff',
                    paddingBottom: '4px',
                    display: 'inline-block',
                  }}
                >
                  Categories
                </h3>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '1.8' }}>
                  <li><Link href="/technology" style={{ color: '#fff', textDecoration: 'none' }}>Technology</Link></li>
                  <li><Link href="/sports" style={{ color: '#fff', textDecoration: 'none' }}>Sports</Link></li>
                  <li><Link href="/entertainment" style={{ color: '#fff', textDecoration: 'none' }}>Entertainment</Link></li>
                  <li><Link href="/education" style={{ color: '#fff', textDecoration: 'none' }}>Education</Link></li>
                </ul>
              </div>

              {/* About Section */}
              <div style={{ minWidth: '160px' }}>
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 400,
                    marginBottom: '6px',
                    color: '#fff',
                    borderBottom: '1px solid #fff',
                    paddingBottom: '4px',
                    display: 'inline-block',
                  }}
                >
                  About
                </h3>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '1.8' }}>
                  <li><Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>Our Company</Link></li>
                  <li><Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link></li>
                  <li><Link href="/editorial-policy" style={{ color: '#fff', textDecoration: 'none' }}>Our Editorial Policy & Standards</Link></li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>

        <hr style={{ backgroundColor: '#444', margin: '30px 0' }} />

        {/* Bottom Row */}
        <Row className="align-items-center text-center text-md-start">
          <Col md={9} className="mb-3 mb-md-0">
            <p
              className="px-2 px-md-0"
              style={{
                color: '#aaa',
                fontSize: '0.85rem',
                marginBottom: '0',
                lineHeight: '1.6',
              }}
            >
              <span className="d-none d-sm-inline">
                © 2025 nystatenews. All rights reserved. Content may not be reproduced or
                distributed without permission. Some links may earn us a commission through affiliate partnerships.
              </span>
              <span className="d-inline d-sm-none" style={{ fontSize: '0.7rem' }}>
                © 2025 nystatenews. All rights reserved.
              </span>
            </p>
          </Col>

          <Col md={3}>
            <div className="d-flex justify-content-center justify-content-md-end gap-3 flex-wrap mt-2 mt-md-0">
              <a href="#" aria-label="Instagram"><FaInstagram color="#fff" /></a>
              <a href="https://x.com/NYSN_Official" aria-label="Twitter"><FaXTwitter color="#fff" /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF color="#fff" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
