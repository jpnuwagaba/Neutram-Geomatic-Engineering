export default {
  name: 'service',
  title: 'Service',
  type: 'document', 
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the service',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Description of the service',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image of the service',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      description: 'Icon to describe the service',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Slug of the service',
      options: {
        source: 'title',
        maxLength: 96,
      },
      Rule: {
        required: true,
      },
    },
  ],
}