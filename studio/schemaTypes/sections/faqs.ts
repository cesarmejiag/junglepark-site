export default {
  type: 'object',
  name: 'faqs',
  title: 'Faqs',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'array',
      name: 'faqs',
      title: 'Faqs',
      of: [{type: 'faq'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}: any) {
      return {
        title: 'Faqs Section',
        subtitle: title,
      }
    },
  },
}
