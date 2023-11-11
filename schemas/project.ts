export default {
  name:'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the project',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Location of the project',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Description of the project',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Category of the project',
      options: {
        list: [
          { title: 'Property Valuation', value: 'property valuation' },
          { title: 'Quantity Surveying & Cost Estimation', value: 'quantity surveying & cost estimation' },
          { title: 'Project Planning & Management', value: 'project planning & management' },
          { title: 'Civil Engineering', value: 'civil engineering' },
          { title: 'Surveying', value: 'surveying' },
          { title: 'Real Estate', value: 'real estate' },
          { title: 'Architecture', value: 'architecture' },
        ],
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image of the project',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Slug of the project',
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