export default {
  type: 'object',
  name: 'plans',
  title: 'Plans',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Título',
    },
    {
      type: 'portableText',
      name: 'body',
      title: 'Text',
    },
    {
      type: 'array',
      name: 'plans',
      title: 'Plans',
      of: [
        {
          type: 'object',
          name: 'plan',
          title: 'Plans',
          fields: [
            {
              type: 'string',
              name: 'title',
              title: 'Title',
            },
            {
              type: 'string',
              name: 'description',
              title: 'Description',
            },
            {
              type: 'number',
              name: 'price60',
              title: 'Price (60 mins)',
            },
            {
              type: 'number',
              name: 'price120',
              title: 'Price (120 mins)',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      list: 'plans',
    },
    prepare({list}: any) {
      const length = list.length;
      return {
        title: 'Plans Section',
        subtitle: length > 0 ? `${length} plan(s).` : `no plans.`
      }
    },
  },
}
