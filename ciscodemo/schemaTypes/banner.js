export default {
    name: 'banner',
    title: 'Banner',
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
        name: 'btnText',
        title: 'Button Text',
        type: 'string',
      },
      {
        name: 'bannerImage',
        title: 'Banner Image',
        type: 'image',
        options: {
          hotspot: true,
        }
      }
    ]
  }