import { Metadata, ResolvingMetadata } from "next";
import { getGlobalConfig, getPage } from "@/lib/api";
import { Props } from "@/types/types";
import RenderSections from "@/components/RenderSections";

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { title, description } = await getGlobalConfig();
  return {
    title,
    description,
  };
}

export default async function Home() {
  const {
    frontpage: { content },
  } = await getPage("/");
  return <>{content && <RenderSections sections={content} />}</>;
}
