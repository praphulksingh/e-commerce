import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const HomeSectionCarousel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); // Ref to control the carousel

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = data.slice(0, 10).map((product) => (
    <HomeSectionCard product={product} key={product.id} />
  ));

  const maxIndex = items.length - Math.ceil(responsive[1024].items); // Max allowed index

  const slidePrev = () => {
    const newIndex = Math.max(activeIndex - 1, 0);
    setActiveIndex(newIndex);
    carouselRef.current.slideTo(newIndex); // Slide the carousel to the new index
  };

  const slideNext = () => {
    const newIndex = Math.min(activeIndex + 1, maxIndex);
    setActiveIndex(newIndex);
    carouselRef.current.slideTo(newIndex); // Slide the carousel to the new index
  };

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef} // Assign ref to carousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          infinite={false} // Disable infinite for now
        />
        {activeIndex < maxIndex && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translate(50%) rotate(180deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ color: "black" }} />
          </Button>
        )}

        {activeIndex > 0 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              bgcolor: "white",
              transform: "translate(-50%)",
            }}
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon sx={{ color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
