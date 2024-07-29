import { urlFor } from "@/lib/api";
import BlockContent from "../objects/BlockContent";
import styles from "./Location.module.css";

type TypeLocation = {
  _key: string;
  _type: string;
  title: string;
  body: any;
  socialLinks: {
    icon: any;
    href: string;
    label: string;
    _key: string;
    _type: string;
  }[];
  image: any;
  url: string;
  cta: any;
  ctas: any;
};

export default function Location({
  title,
  body,
  socialLinks,
  url,
  image,
}: TypeLocation) {
  return (
    <section className={styles.location}>
      <div className="flex">
        <div className="w-[35%]">
          <div className="max-w-[527px] ml-auto px-4 py-24">
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.body}>
              <BlockContent blocks={body} />
            </div>
            <ul className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <li key={link._key}>
                  <a href={link.href} target="_blank">
                    <img src={urlFor(link.icon).url()} alt={link.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[65%]">
          <div className={styles.image}>
            <a href={url} target="_blank">
              <img src={urlFor(image.asset).url()} alt={image.alt} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
