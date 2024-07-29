import Accordion from "../objects/Accordion";
import ParallaxImg from "../objects/ParallaxImg";
import styles from "./Faqs.module.css";

type FaqsType = {
  _key: string;
  _type: string;
  title?: string;
  faqs?: {
    _key: string;
    _type: string;
    answer: any;
    question: string;
  }[];
  cta?: null;
  ctas?: null;
};

const elements = [
  { speed: 1, fileName: "girl.webp" },
  { speed: 3, fileName: "boy.webp" },
  { speed: 2, fileName: "circles.svg" },
];

export default function Faqs({ title, faqs = [] }: FaqsType) {
  const items = faqs.map((faq) => ({
    key: faq._key,
    selector: faq.question,
    content: faq.answer,
  }));
  return (
    <section className={`${styles.faqs} pt-52 pb-20`}>
      <div className="xl:container mx-auto px-5">
        <div className="flex">
          <div className="w-1/2">
            <div className={styles.parallaxElements}>
              <img
                className={styles.logo}
                src="/images/logo.webp"
                alt="Jungle Park logo"
              />
              <img
                className={styles.shape}
                src="/images/faqs-shape.svg"
                alt="Faqs shape"
              />
              {elements.map(({ fileName, speed }, i) => (
                <ParallaxImg
                  key={`faqs-element-${i}`}
                  className={styles[fileName.split(".")[0]]}
                  fileName={`faqs-${fileName}`}
                  speed={speed}
                />
              ))}
            </div>
          </div>
          <div className="w-1/2">
            <h1 className={`${styles.faqsTitle} mb-20`}>{title}</h1>
            <Accordion items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
