export default {
  type: 'object',
  name: 'about',
  title: 'About',
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
        title: 'About Section',
        subtitle: title,
      }
    },
  },
}
