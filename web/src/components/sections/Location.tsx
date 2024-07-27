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

export default function Location({ title, body, socialLinks }: TypeLocation) {
  return (
    <section className={styles.location}>
      <div className="flex">
        <div>
          <h2 className="title">{title}</h2>
          <div>
            <BlockContent blocks={body} />
          </div>
          <div>
            <ul>
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
        <div></div>
      </div>
    </section>
  );
}
