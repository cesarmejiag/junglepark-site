import MainCta from "../objects/MainCta";
import ParallaxImg from "../objects/ParallaxImg";
import styles from "./Ribbon.module.css";

type TypeRibbon = {
  _key: string;
  _type: string;
  text: string;
  cta: any;
  ctas: any;
};

const elements = [
  { speed: 2, fileName: "girl.webp" },
  { speed: 5, fileName: "hat.svg" },
  { speed: 3, fileName: "cake.svg" },
  { speed: 4, fileName: "candle.svg" },
  { speed: 2, fileName: "boy.webp" },
  { speed: 5, fileName: "balloons.svg" },
];

export default function Ribbon({ text }: TypeRibbon) {
  return (
    <section className={`${styles.ribbon} pt-[90px]`}>
      <div className={`${styles.main} mx-auto`}>
        <div className={styles.logo}>
          <img src="/images/logo.webp" alt="Jungle Park Logo" />
        </div>
        <h2 className={styles.title}>{text}</h2>
        <div className={styles.buttons}>
          <MainCta className={styles.cta} label="Reservar" />
        </div>
        <div className={styles.parallaxElements}>
          {elements.map(({ fileName, speed }, i) => (
            <ParallaxImg
              key={`ribbon-element-${i}`}
              className={styles[fileName.split(".")[0]]}
              fileName={`ribbon-${fileName}`}
              speed={speed}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
