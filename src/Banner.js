import React from "react";
import Carousel from "./Carousel";

const App = () => {
  const images = [
    "https://source.unsplash.com/random/800x800",
    "https://source.unsplash.com/random/800×800/?city",
    "https://source.unsplash.com/random/800×800/?fruit",
  ];

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
};

export default App;
