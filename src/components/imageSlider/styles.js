export const ImageSliderStyles = {
  slideStyles: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  rightArrowStyles: {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#2a2a2a",
    zIndex: 1,
    cursor: "pointer",
  },
  leftArrowStyles: {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#2a2a2a",
    zIndex: 1,
    cursor: "pointer",
  },
  sliderStyles: {
    position: "relative",
    height: "100%",
  },
  dotsContainerStyles: {
    display: "flex",
    justifyContent: "center",
  },

  dotStyle: {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  },
};
