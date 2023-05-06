export default {
  name: 'service',
  type: 'document',
	title: 'Service',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'serviceImage',
      title: 'ServiceImg',
      type: 'image'
    },
    {
      name: 'serviceIcon',
      title: 'ServiceIcon',
      type: 'image'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90
      }
    },
    {
      name: 'details',
      title: 'Details',
      type: 'text'
    }
  ]
}