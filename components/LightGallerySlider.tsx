import React, { useRef } from 'react';
import LightGallery from 'lightgallery/react';

// Import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-zoom.css';

// Import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgZoom from 'lightgallery/plugins/zoom';

const LightGallerySlider: React.FC = () => {
  const lightGallery = useRef(null);

  const onInit = (detail) => {
    if (lightGallery.current) {
      lightGallery.current.instance = detail.instance;
    }
  };

  return (
    <div className="carousel-container">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgFullscreen, lgZoom]}
      >
        <a href="/1.jpg" className="carousel-item">
          <img alt="Gallery Image 1" src="/1.jpg" />
        </a>
        <a href="/2.jpg" className="carousel-item">
          <img alt="Gallery Image 2" src="/2.jpg" />
        </a>
        <a href="/3.jpg" className="carousel-item">
          <img alt="Gallery Image 3" src="/3.jpg" />
        </a>
        {/* Agrega más imágenes según sea necesario */}
      </LightGallery>
    </div>
  );
};

export default LightGallerySlider;
