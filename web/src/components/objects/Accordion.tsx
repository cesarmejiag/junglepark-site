import { useState } from "react";
import BlockContent from "./BlockContent";

import styles from "./Accordion.module.css";

type ItemType = {
  key: string;
  selector: string;
  content: any;
};

type AccordionType = {
  items: ItemType[];
  singleExpansion?: boolean;
  expandedItems?: string[];
};

export default function Accordion({
  items,
  singleExpansion = true,
  expandedItems = [],
}: AccordionType) {
  const [expanded, setExpanded] = useState<string[]>(expandedItems);
  const toggle = (key: string): void => {
    if (expanded.includes(key)) {
      if (singleExpansion) {
        setExpanded([]);
      } else {
        setExpanded((oldExpanded) =>
          oldExpanded.filter((item) => item !== key)
        );
      }
    } else {
      if (singleExpansion) {
        setExpanded([key]);
      } else {
        setExpanded([...expanded, key]);
      }
    }
  };

  return (
    <div className={styles.accordion}>
      {items.map(({ key, selector, content }) => {
        const classExpanded = expanded.includes(key) ? styles.itemExpanded : "";
        return (
          <div className={`${styles.item} ${classExpanded} py-7`} key={key}>
            <h3>
              <button className={styles.selector} onClick={() => toggle(key)}>
                {selector}
              </button>
            </h3>
            <div className={`${styles.content} pt-7`}>
              <BlockContent blocks={content} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
