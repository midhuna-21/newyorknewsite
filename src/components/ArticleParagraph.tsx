'use client';

import React from 'react';

interface ArticleParagraphProps {
    data: {
        description?: string;
    };
}

const ArticleParagraphWith = ({ data }: ArticleParagraphProps) => {
    const description = data.description ?? '';
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <p
                        style={{
                            fontFamily: `'Georgia', serif`,
                            fontSize: '20px',
                            lineHeight: 1.5,
                            color: '#111',
                            textAlign: 'justify',
                        }}
                    >
                        <span
                            style={{
                                float: 'left',
                                fontSize: '56px',
                                paddingRight: '6px',
                                fontWeight: 600,
                            }}
                        >
                            {description.charAt(0)}
                        </span>
                        {description.slice(1)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArticleParagraphWith;
