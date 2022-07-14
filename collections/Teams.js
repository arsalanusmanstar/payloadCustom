// Example Collection - For reference only, this must be added to payload.config.js to be used.
import isAdminOrCreatedBy from './auth/isAdminOrCreatedBy';
const Teams = {
  slug: 'Teams',
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
      name: 'teamName',
      type: 'text',
    },
    {
      name: 'designation',
      type: 'text',
    },
    {
      name: 'teamImage',
      type: 'upload',
      relationTo: 'media',
      required: false
    }
  ]
}

export default Teams;