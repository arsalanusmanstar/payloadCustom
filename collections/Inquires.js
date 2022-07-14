// Example Collection - For reference only, this must be added to payload.config.js to be used.
const Inquires = {
  slug: 'Inquires',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'email',
      type: 'text',
    },
    {
      name: 'details',
      type: 'textarea',
    },
    {
      name: 'website',
      type: 'text',
    }
  ],
}

export default Inquires;