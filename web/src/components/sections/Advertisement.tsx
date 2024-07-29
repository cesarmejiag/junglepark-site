import Image from "next/image";
import { urlFor } from "@/lib/api";
import BlockContent from "../objects/BlockContent";
import styles from "./Advertisement.module.css";

type AdvertisementType = {
  _key: string;
  _type: string;
  section: {
    _type: string;
    title: string;
    body: any;
    image: any;
  };
  cta: string;
  ctas: any;
};

export default function Advertisement({ section }: AdvertisementType) {
  const { title, body, image } = section;
  return (
    <section className={`${styles.advertisement} pt-52 pb-24`}>
      <div className="xl:container mx-auto px-2">
        <div className="flex">
          <div className="w-4/12 min-w-[457px]">
            <div className={`${styles.sign} mt-[-13rem] mb-16`}>
              <div className={styles.signText}>
                <h2>{title}</h2>
              </div>
            </div>
            <div className={styles.body}>
              <BlockContent blocks={body} />
            </div>
          </div>
          <div className="w-8/12 pl-4">
            <div className={styles.image}>
              <img src={urlFor(image).url()} alt={image.alt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
