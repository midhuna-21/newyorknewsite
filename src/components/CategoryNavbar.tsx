'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const categories = [
    { label: 'Business', category: 'business' },
    { label: 'Technology', category: 'technology' },
    { label: 'Sports', category: 'sports' },
    { label: 'Health', category: 'health' },
    { label: 'Science', category: 'science' },
    { label: 'Politics', category: 'politics' },
];

const CategoryNavbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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
                padding: '14px 0',
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
                    gap: '20px',
                    justifyContent: 'center',
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                }}
            >
                {categories.map((item) => (
                    <Link
                        key={item.category}
                        href={`/${item.category}`}
                        title={item.label}
                        style={{
                            fontSize: '12px',
                            color: '#000000', 
                            fontWeight: 600,
                            fontFamily: 'Graphik, "Helvetica Neue", Helvetica, Arial, sans-serif',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap',
                            transition: 'color 0.3s ease',
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default CategoryNavbar;
