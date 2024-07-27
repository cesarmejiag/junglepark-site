export default {
  type: 'object',
  name: 'ribbon',
  title: 'Ribbon',
  fields: [
    {
      type: 'string',
      name: 'text',
      title: 'Text',
    },
  ],
  preview: {
    select: {
      text: 'text',
    },
    prepare({text}: any) {
      return {
        title: 'Ribbon Section',
        subtitle: text,
      }
    },
  },
}
