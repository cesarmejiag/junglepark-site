import { urlFor } from "@/lib/api";
import BlockContent from "../objects/BlockContent";
import styles from "./About.module.css";

export type TypeAbout = {
  _type: string;
  _key: string;
  section: {
    _type: string;
    title: string;
    body: any;
    image: {
      _type: string;
      alt: string;
      asset: any;
    };
  };
  cta: any;
  ctas: any;
};

export default function About({ section }: TypeAbout) {
  const { title, body, image } = section;
  return (
    <section className={`${styles.about} pt-32 pb-28`}>
      <div className="xl:container mx-auto px-5">
        <div className="flex">
          <div className="w-5/12">
            <div className="max-w-[457px] mx-auto">
              <div className="">
                <div>
                  <h4>Exploradores</h4>
                  <h3>¡Bienvenidos!</h3>
                </div>
              </div>
              <h1 className={styles.title}>{title}</h1>
              <div className={`${styles.body} rte-editor`}>
                <BlockContent blocks={body} />
              </div>
            </div>
          </div>
          <div className="w-7/12">
            <div className={styles.image}>
              <img src={urlFor(image?.asset).url()} alt={image?.alt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
