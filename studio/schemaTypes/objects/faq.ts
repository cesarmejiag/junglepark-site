export default {
  type: 'object',
  name: 'faq',
  title: 'Faq',
  fields: [
    {
      type: 'string',
      name: 'question',
      title: 'Question',
      validation: (Rule: any) => Rule.required().min(5).max(80),
    },
    {
      type: 'portableText',
      name: 'answer',
      title: 'Answer',
      validation: (Rule: any) => Rule.required(),
    },
    {
      type: 'boolean',
      name: 'expanded',
      title: 'Expanded',
      description: 'Show as expanded when page initialize.'
    },
  ],
}
