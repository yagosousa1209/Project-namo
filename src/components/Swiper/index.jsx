
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import { useState } from 'react';

export default function Swiper({ imgJSON }) {
  const [progress, setProgress] = useState(100 / imgJSON.length)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    afterChange: current => {
      setProgress(100 / (imgJSON.length) * (current + 1))
    }
  };
  return (
    <div>
      <Slider {...settings}>
        {imgJSON.map((e, index) => {
          return (
            <img className="object-cover h-96 rounded-b" key={index} src={e.image} alt='nãoPrecisa' />
          )
        })}
      </Slider>
      <div className="h-[2px] bg-terciary/50 w-full absolute -top-[5px] right-0">
        <div
          className="bg-primary/50 absolute h-[100%] transition-all" style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}
