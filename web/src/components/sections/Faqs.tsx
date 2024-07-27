import Accordion from "../objects/Accordion";
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
          <div className="w-1/2"></div>
          <div className="w-1/2">
            <h1 className={`${styles.faqsTitle} mb-20`}>{title}</h1>
            <Accordion items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
