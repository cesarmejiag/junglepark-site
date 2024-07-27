export default {
  type: 'object',
  name: 'gallery',
  title: 'Gallery',
  fieldsets: [
    {
      title: 'Configuration',
      name: 'configuration',
    },
  ],
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'array',
      name: 'slides',
      title: 'Slides',
      of: [
        {
          type: 'object',
          name: 'slide',
          title: 'Slide',
          fields: [
            {
              type: 'img',
              name: 'image',
              title: 'Image',
              validation: (Rule: any) => Rule.required(),
            },
          ],
          preview: {
            select: {
              media: 'image',
              title: 'image.alt',
            },
            prepare({media, title}: any) {
              return {
                media,
                title,
              }
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      list: 'slides',
    },
    prepare({list}: any) {
      const length = list.length
      const media = length > 0 ? list[0].image : null
      const subtitle = length > 0 ? `${length} image(s).` : `no images.`
      return {
        title: 'Gallery Section',
        media,
        subtitle,
      }
    },
  },
}
