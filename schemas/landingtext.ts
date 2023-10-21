// Import the necessary types from the Sanity client
export default {
  name: 'landingText',
  title: 'Landing Text',
  type: 'document',
  fields: [
    {
      name: 'landingText',
      title: 'Landing Text',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
