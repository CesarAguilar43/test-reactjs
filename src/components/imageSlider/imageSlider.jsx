import { useState } from "react";
import { useSelector } from "react-redux";
import { ImageSliderStyles } from "./styles";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = useSelector((state) => state.images.slides);
  const handleToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const handleToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const handleToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const imagesContainerStyles = {
    ...ImageSliderStyles.slideStyles,
    backgroundImage: `url(${slides[currentIndex]})`,
  };

  return (
    <div style={ImageSliderStyles.sliderStyles}>
      <div>
        <div
          onClick={handleToPrevious}
          style={ImageSliderStyles.leftArrowStyles}
          className="leftArrowStyles"
        >
          ❰
        </div>
        <div
          onClick={handleToNext}
          style={ImageSliderStyles.rightArrowStyles}
          className="rightArrowStyles"
        >
          ❱
        </div>
      </div>
      <div style={imagesContainerStyles}></div>
      <div style={ImageSliderStyles.dotsContainerStyles}>
        {slides.map((_slide, slideIndex) => (
          <div
            style={ImageSliderStyles.dotStyle}
            key={slideIndex}
            onClick={() => handleToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
