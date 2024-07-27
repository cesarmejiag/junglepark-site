export default {
  type: 'object',
  name: 'cta',
  title: 'Call to action',
  validation: (Rule: any) =>
    Rule.custom(
      (fields: any = {}) => !fields.route || !fields.link || 'Only one link type is allowed.',
    ),
  fieldsets: [{title: 'Link', name: 'link'}],
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'reference',
      name: 'route',
      title: 'Internal link',
      description: 'Use this to link between pages on the website.',
      to: [{type: 'route'}],
      fieldset: 'link',
    },
    {
      type: 'url',
      name: 'link',
      title: 'External link',
      fieldset: 'link',
    },
  ],
  preview: {
    select: {
      title: 'title',
      routeTitle: 'route.title',
      slug: 'route.slug.current',
      link: 'link',
    },
    prepare({title, routeTitle = '', slug, link}: any) {
      const subtitleExtra = slug ? `Slug:/${slug}` : link ? `External link: ${link}` : 'Not set'
      return {
        title: `${title}`,
        subtitle: `${routeTitle} ${subtitleExtra}`,
      }
    },
  },
}
