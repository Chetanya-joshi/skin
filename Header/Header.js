"use client"
import { useEffect, useState } from 'react';
import './Header.css';
import banner from '../public/banner.png'
import banner1 from '../public/banner1.jpg';
import banner2 from '../public/banner2.jpg';
import banner3 from '../public/banner3.jpg';
function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    'https://honasa-strapi-production.s3.ap-south-1.amazonaws.com/1920x512_sunscreen_copy_6e813fb7da.jpg?q=40',
    'https://honasa-strapi-production.s3.ap-south-1.amazonaws.com/Website_2df53be54d.jpg?q=40',
    'https://honasa-strapi-production.s3.ap-south-1.amazonaws.com/BANNERS_66abb289fe.jpg?q=40',
    // 'https://assets.codepen.io/573855/less-rain-dummy-03.jpg',
    // 'https://assets.codepen.io/573855/less-rain-dummy-04.jpg',
    // 'https://assets.codepen.io/573855/less-rain-dummy-05.jpg',
    // 'https://assets.codepen.io/573855/less-rain-dummy-06.jpg',
  ];
  const slideInterval = 4000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, slideInterval);
    return () => clearInterval(intervalId);
  }, []);

  const showSlide = (index) => {
    const slideElems = document.querySelectorAll('.slide');
    slideElems.forEach((slide) => {
      slide.style.opacity = '0';
    });

    const currentSlide = slideElems[index];
    currentSlide.style.opacity = '1';

    const img = currentSlide.querySelector('img');
    img.style.animation = 'none';
    void img.offsetWidth;
    switch (index % 4) {
      case 0:
        img.style.animation = 'panRight 7s ease-in-out infinite';
        break;
      case 1:
        img.style.animation = 'panDown 7s ease-in-out infinite';
        break;
      case 2:
        img.style.animation = 'panLeft 7s ease-in-out infinite';
        break;
      case 3:
        img.style.animation = 'panUp 7s ease-in-out infinite';
        break;
    }
  };

  useEffect(() => {
    showSlide(currentIndex);
  }, [currentIndex]);

  return (
    <div className="wrapper">
      <div id="carousel" className="carousel">
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
