
import React from 'react';

export default function BlogsImageSection() {
    return (
        <div className="relative w-full h-[520px] overflow-hidden">
            <img
                src="/images/blogs/blog2.jpeg"
                alt="Medical imaging professional reviewing scans"
                className="w-full h-full object-cover " //object-top
            />
        </div>
    );
}
