export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        {type: 'carousel'},
        {type: 'about'},
        {type: 'ribbon'},
        {type: 'plans'},
        {type: 'faqs'},
        {type: 'gallery'},
        {type: 'advertisement'},
        {type: 'location'},
        {type: 'section'},
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
      rows: 3,
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image fopr sharing previews on Facebook, Twitter, etc.',
      fieldset: 'metadata',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
}
