export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'image', 
      title: 'Image',
      type: 'image'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {value: "surveying", title: "Surveying"},
          {value: "civil engineering", title: "Civil Engineering"},
          {value: "architecture", title: "Architecture"},
          {value: "project planning and management", title: "Project Planning and Management"},
          {value: "real estate", title: "Real Estate"},
          {value: "property valuation", title: "Property Valuation "},
          {value: "quantity surveying and cost planning", title: "Quantity Surveying and Cost Planning"}
        ]
      }
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
      name: 'date', 
      title: 'Date',
      type: 'date'
    },
    {
      name: 'details',
      title: 'Details',
      type: 'text'
    }
  ]
}