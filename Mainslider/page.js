import React, { useEffect, useRef } from 'react';
import './Mainslider.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


function MainSlider() {
  const containerRef = useRef(null);
  const leftButtonRef = useRef(null);
  const rightButtonRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const leftButton = leftButtonRef.current;
    const rightButton = rightButtonRef.current;

    function updateButtonState() {
      leftButton.disabled = container.scrollLeft <= 0;
      rightButton.disabled =
        container.scrollLeft + container.offsetWidth >= container.scrollWidth;
    }

    leftButton.addEventListener("click", function () {
      container.scrollBy({
        left: -container.offsetWidth / 2,
        behavior: "smooth",
      });
      updateButtonState(); // Update button state after scroll
    });

    rightButton.addEventListener("click", function () {
      container.scrollBy({ left: container.offsetWidth / 2, behavior: "smooth" });
      updateButtonState(); // Update button state after scroll
    });

    container.addEventListener("scroll", updateButtonState);
    updateButtonState();

    return () => {
      leftButton.removeEventListener("click", function () {
        container.scrollBy({
          left: -container.offsetWidth / 2,
          behavior: "smooth",
        });
      });

      rightButton.removeEventListener("click", function () {
        container.scrollBy({ left: container.offsetWidth / 2, behavior: "smooth" });
      });

      container.removeEventListener("scroll", updateButtonState);
    };
  }, []);

  return (
    <div className="container">
      <div className="main-slider">
        <div className="label-container">
          <h2>What's on your mind?</h2>
          <button ref={leftButtonRef} className="arrow-left"><i className="bi bi-arrow-left"></i></button>
          <button ref={rightButtonRef} className="arrow-right"><i className="bi bi-arrow-right"></i></button>
        </div>
        <div ref={containerRef} className="card-slider-main">
          <div className="card-wrapper">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png" alt="Pizza" />
          </div>
          <div className="card-wrapper">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png" alt="Samosas" />
          </div>
          <div className="card-wrapper">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png" alt="Biryani" />
          </div>
          <div className="card-wrapper">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png" alt="Shakes" />
          </div>
          <div className="card-wrapper">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png" alt="Shakes" />
          </div><div className="card-wrapper">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png" alt="Shakes" />
          </div><div className="card-wrapper">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png" alt="Shakes" />
          </div><div className="card-wrapper">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png" alt="Shakes" />
          </div><div className="card-wrapper">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png" alt="Shakes" />
          </div>
          {/* Add more card items as needed */}
        </div>
      </div>
    </div>
  );
}

export default MainSlider;
