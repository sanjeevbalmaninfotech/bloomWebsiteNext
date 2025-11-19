import React from 'react';

export default function FooterImage() {
  return (
    <section className="w-full pt-4 bg-gray-50">
      {/* Responsive Image Container */}
      <div className="w-full">
        <img
          src="/FAQ1.png"
          alt="Footer"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Alternative with specific height constraints for different screens */}
      {/* 
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
        <img
          src="/your-footer-image.jpg"
          alt="Footer"
          className="w-full h-full object-cover"
        />
      </div>
      */}

      {/* Alternative with aspect ratio (16:9) */}
      {/* 
      <div className="w-full aspect-video">
        <img
          src="/your-footer-image.jpg"
          alt="Footer"
          className="w-full h-full object-cover"
        />
      </div>
      */}

      {/* Alternative with max-width constraint */}
      {/* 
      <div className="w-full max-w-7xl mx-auto px-4">
        <img
          src="/your-footer-image.jpg"
          alt="Footer"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      */}
    </section>
  );
}