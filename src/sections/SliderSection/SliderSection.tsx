'use client';

import React from 'react';
import styles from './SliderSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { sliderData } from './data';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

const SliderSection = () => {
  return (
    <section className={styles.root}>
      <div className={styles.text}>
        <h2>The Constitution of Zorg</h2>
        <h1>Ratified by the Supreme Council in the Galactic Year 42.0</h1>
      </div>
      <div className={styles.slider}>
        <Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
          {sliderData.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className={styles.slide}>
                <Image src={slide.img} width={300} height={140} alt='' />
                <h2>{slide.subtitle}</h2>
                <h1>{slide.title}</h1>
                <p className={styles.description}>{slide.description}</p>
                <p>{slide.description2}</p>
                <p>{slide.description3}</p>
                <p>{slide.description4}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderSection;
