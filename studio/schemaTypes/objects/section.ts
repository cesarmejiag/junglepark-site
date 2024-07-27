export default {
  type: 'object',
  name: 'section',
  title: 'Section',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (Rule: any) => Rule.required().min(5).max(80),
    },
    {
      type: 'portableText',
      name: 'body',
      title: 'Text',
    },
    {
      type: 'img',
      name: 'image',
      title: 'Image',
    },
  ],
}
