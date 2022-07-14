// Example Collection - For reference only, this must be added to payload.config.js to be used.
import isAdminOrCreatedBy from './auth/isAdminOrCreatedBy';

const Announcement = {
  slug: 'Announcement',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'uploadmedia',
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
    },
    {
      name: 'startedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'endDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ]
}

export default Announcement;