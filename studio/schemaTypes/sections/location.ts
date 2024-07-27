export default {
  type: 'object',
  name: 'location',
  title: 'Location',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'portableText',
      name: 'body',
      title: 'Text',
    },
    /* {
      type: 'geopoint',
      name: 'geopoint',
      title: 'Geolocation',
    }, */
    {
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      of: [{type: 'socialLink'}],
      validation: (Rule: any) => [Rule.max(5).warning('Are you sure you want more than 10 items?')],
    },
    {
      name: 'image',
      type: 'img',
      title: 'Image',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      description: 'Google Maps Link.',
    },
  ],
  preview: {
    select: {
      media: 'image',
      title: 'title',
    },
    prepare({media, title}: any) {
      return {
        media,
        title: 'Location Section',
        subtitle: title,
      }
    },
  },
}
