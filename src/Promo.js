import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <h1 class="text-2xl font-bold text-blue-600 mt-8 ml-4 mb-6">
          promo minggu ini
        </h1>
        <Slider {...settings}>
          <div>
            <div class="text-center bg-slate-600 mx-4">
              <a href="asdsad" class="block  p-2 rounded-lg w-24 h-24 "></a>
            </div>
          </div>
          <div>
            <div class="text-center bg-slate-600 mx-4">
              <a href="asdsad" class="block  p-2 rounded-lg w-24 h-24 "></a>
            </div>
          </div>
          <div>
            <div class="text-center bg-slate-600 mx-4">
              <a href="asdsad" class="block  p-2 rounded-lg w-24 h-24 "></a>
            </div>
          </div>
          <div>
            <div class="text-center bg-slate-600 mx-4">
              <a href="asdsad" class="block  p-2 rounded-lg w-24 h-24 "></a>
            </div>
          </div>
          <div>
            <div class="text-center bg-slate-600 mx-4">
              <a href="asdsad" class="block  p-2 rounded-lg w-24 h-24 "></a>
            </div>
          </div>
          <div>
            <div class="text-center bg-slate-600 mx-4">
              <a href="asdsad" class="block  p-2 rounded-lg w-24 h-24 "></a>
            </div>
          </div>
          <div>
            <div class="text-center bg-slate-600 mx-4">
              <a href="asdsad" class="block  p-2 rounded-lg w-24 h-24 "></a>
            </div>
          </div>
          <div>
            <div class="text-center bg-slate-600 mx-4">
              <a href="asdsad" class="block  p-2 rounded-lg w-24 h-24 "></a>
            </div>
          </div>
          <div>
            <div class="text-center bg-slate-600 mx-4">
              <a href="asdsad" class="block  p-2 rounded-lg w-24 h-24 "></a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
