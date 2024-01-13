"use client";
import data from "./mockData";
import Card from "../Card";
import { default as SlickSlider } from "react-slick";
import "slick-carousel/slick/slick.css";

import s from "./Slider.module.scss";
import clsx from "clsx";

const Slider = () => {
  return (
    <div className="container">
      <div className={s.slider__wrapper}>
        <SlickSlider
          slidesToShow={1}
          infinite={false}
          variableWidth
          prevArrow={
            <div title="Назад">
              <div className={clsx(s.slider__arrow, s.slider__arrow_prev)} />
            </div>
          }
          nextArrow={
            <div title="Вперёд">
              <div className={clsx(s.slider__arrow, s.slider__arrow_next)} />
            </div>
          }
        >
          {data.map((obj) => (
            <Card {...obj} key={obj.id} />
          ))}
        </SlickSlider>
        <div className={s.slider__arrows}></div>
      </div>
    </div>
  );
};

export default Slider;
