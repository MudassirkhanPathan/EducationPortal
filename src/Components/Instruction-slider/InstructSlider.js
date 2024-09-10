import React, { useState, useEffect } from 'react'
import '../Instruction-slider/InstructSlider.css'
export default function InstructSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { img: "./images/slide1.png", content: "Content for Slide 1" },
    { img: "./images/slide2.png", content: "Content for Slide 2" },
    { img: "./images/slide3.png", content: "Content for Slide 3" }
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, totalSlides]);

  const showSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="slider">
      <h1>Instructions</h1>
      <div className="slides" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img className="slider-images" src={slide.img} alt={`Slide ${index + 1}`} />
            <br />
            {slide.content}
          </div>
        ))}
      </div>
      <div className="navigation-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => showSlide(index)}
          ></span>
        ))}
      </div>
    </div>

  )
}
