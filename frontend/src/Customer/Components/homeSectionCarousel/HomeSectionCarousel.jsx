import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
    <HomeSectionCard />
  ));
  return (
    <div className="px-4 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
        />
        <Button
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translate(50%) rotate(180deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <ChevronLeftIcon sx={{ color: "black" }} />
        </Button>
        <Button
          variant="contained"
          className="z-50 bg-white"
          sx={{ position: "absolute", top: "8rem", bgcolor: "white" ,transform: "translate(-50%)",}}
          aria-label="next"
        >
          <ChevronLeftIcon sx={{ color: "black" }} />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
