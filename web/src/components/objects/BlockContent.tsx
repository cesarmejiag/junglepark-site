import { PortableText } from "next-sanity";
import components from "./components";

export default function BlockContent({ blocks }: any) {
  if (!blocks) {
    console.error(`Missing blocks.`);
    return null;
  }
  return <PortableText value={blocks} components={components} />;
}
