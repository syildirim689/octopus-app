import React from 'react';

export default function Container({children, className}: React.PropsWithChildren<{ className?: string }>) {
    return (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className && className}`}>
            {children}
        </div>
    );
}
