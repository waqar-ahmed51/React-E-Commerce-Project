import React from "react";
import Categories from "../components/Categories";
import NewsLetter from "../components/NewsLetter";
import PopularPorductsHeading from "../components/PopularPorductsHeading";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <PopularPorductsHeading />
      <Products />
      <NewsLetter />
    </div>
  );
};

export default Home;
