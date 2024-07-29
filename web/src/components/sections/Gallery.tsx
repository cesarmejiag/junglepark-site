import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import styles from "./Gallery.module.css";
import { urlFor } from "@/lib/api";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

type TypeGallery = {
  _key: string;
  _type: string;
  title: string;
  slides: {
    _key: string;
    _type: string;
    image: any;
  }[];
};

export default function Gallery({ title, slides }: TypeGallery) {
  return (
    <section className={`${styles.gallery} py-44`}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
      >
        {slides?.map((slide: any) => (
          <SwiperSlide className={styles.swiperSlide} key={slide._key}>
            <div className={styles.slide}>
              <img
                src={urlFor(slide.image.asset).url()}
                alt={slide.image.alt}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
