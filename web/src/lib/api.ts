import imageUrlBuilder from "@sanity/image-url";
import { getFileAsset } from "@sanity/asset-utils";
import client from "./client";

const clientConfig = client.config();
const builder = imageUrlBuilder(client);

export async function getGlobalConfig() {
  try {
    return await client.fetch(`
      *[_id == "global-config"] {
        ...,
        logo {asset->{extension, url}},
        mainNavigation[] -> {
          ...,
          "title": page->title
        },
        socialLinks[] {
          ...,
          "icon": icon.asset->url
        }
      }[0]
    `);
  } catch (err) {
    console.error(`Can't retreive global config. ${err}`);
  }
  return {};
}

export async function getLang() {
  try {
    return await client.fetch(`*[_id == "global-config"] {lang}[0]`);
  } catch (err) {
    console.error(`Can't retreive lang. ${err}`);
  }
  return {};
}

export async function getPage(slug: string) {
  const contentTemplate = `
    {
      ...,
      content[] {
        ...,
        cta {
          ...,
          route->
        },
        ctas[] {
          ...,
          route->
        },
      }
    }
  `;

  if (slug === "/") {
    return await client.fetch(`
      *[_id == "global-config"][0] {
        frontpage -> ${contentTemplate}
      }
    `);
  } else {
    return await client.fetch(
      `
      *[_type == "route" && slug.current == $slug][0] {
        page-> ${contentTemplate}
      }
    `,
      { slug }
    );
  }
}

export function urlFor(source: any) {
  return builder.image(source);
}

// Reference: https://github.com/sanity-io/asset-utils
export function getVideoUrl(source: any) {
  const { projectId, dataset } = clientConfig;
  const asset = getFileAsset(source, { projectId, dataset });
  return asset.url;
}
