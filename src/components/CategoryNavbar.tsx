'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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

const CategoryNavbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hovered, setHovered] = useState<string | null>(null);


    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            const scrollingDown = currentY > lastScrollY;

            if (scrollingDown && currentY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (

        <nav
            aria-label="Category Navigation"
            style={{
                position: 'fixed',
                top: '70px',
                left: 0,
                width: '100%',
                zIndex: 998,
                backgroundColor: '#fff',
                borderTop: '1px solid #ccc',
                borderBottom: '2px solid #ccc',
                padding: '7px 0',
                boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.6s ease-in-out',
            }}
        >


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
        </nav>
    );
};

export default CategoryNavbar;
