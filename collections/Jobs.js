// Example Collection - For reference only, this must be added to payload.config.js to be used.
import isAdminOrCreatedBy from './auth/isAdminOrCreatedBy';
const Jobs = {
  slug: 'Jobs',
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
      name: 'jobCategory', // required
      type: 'select', // required
      hasMany: false,
      options: [
        {
          label: 'Human Resource',
          value: 'Human Resource',
        },
        {
          label: 'Sales & Marketing',
          value: 'Sales & Marketing',
        },
        {
          label: 'Information Technology',
          value: 'Information Technology',
        },
        {
          label: 'Accounts & Finance',
          value: 'Accounts & Finance',
        },
        {
          label: 'Administration',
          value: 'Administration',
        },
      ],
    },
    {
      name: 'designation',
      type: 'text',
    },
    {
      name: 'jobType',
      type: 'text',
    },
    {
      name: 'noOfVacancies',
      type: 'text',
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'city',
      type: 'text',
    },
    {
      name: 'startingDate',
      type: 'text',
    },
    {
      name: 'endingDate',
      type: 'text',
    },
    {
      name: 'salaryRange',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'skills', // required
      type: 'array', // required
      label: 'Skills',
      labels: {
        singular: 'Skills',
        plural: 'Skills',
      },
      fields: [ // required
        {
          name: 'Skill Title',
          type: 'text',
        }
      ]
    },
    {
      name: 'Trending', // required
      type: 'group', // required
      fields: [ // required
        {
          name: 'yes',
          type: 'checkbox', // required
          label: 'Yes',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'benefits', // required
      type: 'array', // required
      label: 'Benefits',
      labels: {
        singular: 'Benefits',
        plural: 'Benefits',
      },
      fields: [ // required
        {
          name: 'Benefits Title',
          type: 'text',
        }
      ]
    },
    {
      name: 'seo', // required
      type: 'group', // required
      fields: [ // required
        {
          name: 'title',
          type: 'text', // required
          label: 'Title',
        },
        {
          name: 'description',
          type: 'textarea', // required
          label: 'Description',
        }
      ],
    },
  ]
}

export default Jobs;