export default {
  name: 'route',
  type: 'document',
  title: 'Route',
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'page',
      type: 'reference',
      description: 'Select the page that this route should point to.',
      to: [
        {
          type: 'page',
        },
      ],
    },
    {
      name: 'disallowRobots',
      type: 'boolean',
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines',
    },
  ],
  preview: {
    select: {
      slug: 'slug.current',
      pageTitle: 'page.title',
    },
    prepare({slug, pageTitle}: any) {
      return {
        title: slug === '/' ? '/' : `${slug}`,
        subtitle: `Page: ${pageTitle}`,
      }
    },
  },
}
