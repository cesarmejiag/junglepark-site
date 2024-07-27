export default {
  type: 'object',
  name: 'advertisement',
  title: 'Information',
  fields: [
    {
      type: 'section',
      name: 'section',
    },
  ],
  preview: {
    select: {
      media: 'section.image',
      title: 'section.title',
    },
    prepare({media, title}: any) {
      return {
        media,
        title: 'Advertisement Section',
        subtitle: title,
      }
    },
  },
}
