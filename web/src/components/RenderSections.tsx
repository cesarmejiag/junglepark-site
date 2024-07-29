"use client"

import { ParallaxProvider } from "react-scroll-parallax";
import * as SectionComponents from "./sections";
import { upperFirst } from "@/lib/utils";

function resolveSections(section: any): any {
  // TODO: Should not have any type.
  // eslint-disable-next-line import/namespace
  const Section = (SectionComponents as any)[upperFirst(section._type)];
  if (Section) {
    return Section;
  }
  console.error(`Can't find section ${section}.`);
  return null;
}

export default function RenderSections({ sections }: any) {
  if (!sections) {
    console.error(`Missing sections.`);
    return <div>Missing sections</div>;
  }
  return (
    <>
      <ParallaxProvider>
        {sections.map((section: any) => {
          const SectionComponent = resolveSections(section);
          if (!SectionComponent) {
            return (
              <div key={section._key}>Missing section {section._type}.</div>
            );
          }
          return <SectionComponent {...section} key={section._key} />;
        })}
      </ParallaxProvider>
    </>
  );
}
