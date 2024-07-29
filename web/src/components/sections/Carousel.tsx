import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Video from "../objects/Video";
import { urlFor } from "@/lib/api";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./Carousel.module.css";

type TypeCarousel = {
  _key: string;
  _type: string;
  logo?: {
    _type: string;
    alt?: string;
    asset?: {
      _ref: string;
      _type: string;
    };
  };
  autoplay?: boolean;
  slides?: {
    _key: string;
    _type: string;
    video?: any;
    title?: string;
    image?: any;
    description?: string;
  }[];
  cta?: any;
  ctas?: any;
};

// Reference: https://react-scroll-parallax.damnthat.tv/docs/intro#example
export default function Carousel({
  logo,
  slides,
  autoplay = false,
}: TypeCarousel) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${styles.customBullet} ${className}">${index}</span>`;
    },
  };

  return (
    <section>
      <Swiper
        loop={true}
        slidesPerView={1}
        pagination={pagination}
        // autoplay={{ delay: 2500, disableOnInteraction: true }}
        modules={[Autoplay, Pagination]}
      >
        {slides?.map((slide) => (
          <SwiperSlide key={slide._key}>
            <div className={styles.slide}>
              <div className={styles.background}>
                {slide.video ? (
                  <Video
                    srcRef={slide.video}
                    posterRef={slide?.image}
                    autoPlay
                    muted
                    loop
                  />
                ) : (
                  <img src={urlFor(slide.image).url()} alt={slide.title} />
                )}
              </div>
              <div className={styles.wrapper}>
                <div className={styles.logo}>
                  <img src={urlFor(logo?.asset).url()} alt={logo?.alt} />
                </div>
                <h2 className={styles.title}>{slide.title}</h2>
                <div className={styles.description}>{slide.description}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
