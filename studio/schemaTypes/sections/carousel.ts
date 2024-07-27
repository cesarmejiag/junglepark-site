export default {
  type: 'object',
  name: 'carousel',
  title: 'Carousel',
  fieldsets: [
    {
      title: 'Configuration',
      name: 'configuration',
    },
  ],
  fields: [
    {
      type: 'img',
      name: 'logo',
      title: 'Brand logo',
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
            {
              type: 'file',
              name: 'video',
              title: 'Video',
            },
            {
              type: 'string',
              name: 'title',
              title: 'Title',
            },
            {
              type: 'text',
              name: 'description',
              title: 'Description',
              rows: 3,
            },
          ],
          preview: {
            select: {
              media: 'image',
              title: 'title',
            },
            prepare({media, title}: any) {
              return {media, title}
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      media: 'logo',
      list: 'slides',
    },
    prepare({media, list}: any) {
      const length = list.length
      return {
        media,
        title: 'Carousel Section',
        subtitle: length > 0 ? `${length} slide(s).` : `no slides.`,
      }
    },
  },
}
