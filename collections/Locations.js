// Example Collection - For reference only, this must be added to payload.config.js to be used.

import isAdminOrCreatedBy from './auth/isAdminOrCreatedBy';
const Locations = {
  slug: 'Locations',
  access: {
    read:({ req: { user } })=>user.role === 'digital' || user.role === 'bumblebee'? false: true,
    update: isAdminOrCreatedBy,
    delete: isAdminOrCreatedBy, 
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'Region',
      type: 'text',
    },
    {
      name: 'order', // required
      type: 'number', // required
      index: true,
      admin: {        
        step: 1,
        position: 'sidebar',
      },
    },
    {
      name: 'isFooter',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'fax',
      type: 'text',
    },
    {
      name: 'tollFree',
      type: 'text',
    },
    {
      name: 'map',
      type: 'text',
    },
    {
      name: 'location',
      type: 'textarea',
    },
    {
      name: 'locationLink',
      type: 'text',
    },
  ]
}

export default Locations;