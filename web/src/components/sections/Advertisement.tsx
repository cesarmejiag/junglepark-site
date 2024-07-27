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
    image: any;
    body: any;
  };
  cta: string;
  ctas: any;
};

export default function Advertisement({ section }: AdvertisementType) {
  const { image, body } = section;

  return (
    <section className={`${styles.advertisement} pt-52 pb-24`}>
      <div className="xl:container mx-auto px-2">
        <div className="flex">
          <div>
            <BlockContent blocks={body} />
          </div>
          <div>
            <div>
              <img src={urlFor(image).url()} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
