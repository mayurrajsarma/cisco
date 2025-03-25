export default {
    name: 'card',
    title: 'Card',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'linkText',
        title: 'Link Text',
        type: 'string',
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url',
      },
      {
        name: 'cardImage',
        title: 'Card Image',
        type: 'image',
        options: {
          hotspot: true,
        }
      }
    ]
  }