import { Metadata, ResolvingMetadata } from "next";
import { getPage, urlFor } from "@/lib/api";
import { Props } from "@/types/types";
import RenderSections from "@/components/RenderSections";

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return { title: "Something", description: "Description" };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const {
    page: { content },
  } = await getPage(`/${params.slug}`);
  return <>{content && <RenderSections sections={content} />}</>;
}
