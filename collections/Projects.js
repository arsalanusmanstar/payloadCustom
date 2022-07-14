import isAdminOrCreatedBy from './auth/isAdminOrCreatedBy';
// Example Collection - For reference only, this must be added to payload.config.js to be used.
const Projects = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  
  access: {
    read:({ req: { user } })=>user.role === 'digital' || user.role === 'bumblebee'? false: true,
    update: isAdminOrCreatedBy,
    delete: isAdminOrCreatedBy, 
  },
  fields: [
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
      access: {
        update: () => false,
      },
      admin: {
        readOnly: true,
        position: 'sidebar',
        condition: data => Boolean(data?.createdBy)
      },
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'isHot',
      type: 'checkbox',
      defaultValue: false,
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
      name: 'content',
      type: 'richText',
      defaultValue: [{
        children: [{ text: 'Here is some default content for this field' }],
      }],
      required: true
      
    },
    {
      name: 'featuredImage',
      type: 'upload', // required
      relationTo: 'starmedia', // required
      required: false,
    },
    {
      name: 'tagline',
      type: 'text',
    },
    {
      name: 'video',
      type: 'text',
    },
    {
      name: 'bannerImage',
      type: 'upload', // required
      relationTo: 'starmedia', // required
      required: false,
    },
    {
      name: 'completed', // required
      type: 'checkbox', // required
      label: 'This is completed project',
      defaultValue: false,
    },
    {
      name: 'Upcoming', // required
      type: 'checkbox', // required
      label: 'This is upcoming project',
      defaultValue: false,
    },
    {
      name: 'Country',
      type: 'text',
    },
    {
      name: 'Region',
      type: 'text',
    },
    {
      name: 'City',
      type: 'text',
    }, 
    {
      name: 'Categories', // required
      type: 'group', // required
      fields: [ // required
        {
          name: 'shops',
          type: 'checkbox', // required
          label: 'Shops',
          defaultValue: false,
        },
        {
          name: 'apartments',
          type: 'checkbox', // required
          label: 'Apartments',
          defaultValue: false,
        },
        {
          name: 'offices',
          type: 'checkbox', // required
          label: 'Offices',
          defaultValue: false,
        },
        {
          name: 'houses',
          type: 'checkbox', // required
          label: 'Houses',
          defaultValue: false,
        },
        {
          name: 'plots',
          type: 'checkbox', // required
          label: 'Plots',
          defaultValue: false,
        },
        {
          name: 'penthouses',
          type: 'checkbox', // required
          label: 'Penthouses',
          defaultValue: false,
        },
        {
          name: 'warehouses',
          type: 'checkbox', // required
          label: 'Warehouses',
          defaultValue: false,
        },
        {
          name: 'hotelRooms',
          type: 'checkbox', // required
          label: 'Hotel Rooms',
          defaultValue: false,
        }
      ],
    },
    {
      name: 'Feature',
      type: 'checkbox', // required
      label: 'Feature',
      defaultValue: false,
    },
    {
      name: 'Facilities', // required
      type: 'group', // required
      fields: [ // required
        {
          name: 'beach',
          type: 'checkbox', // required
          label: 'Beach',
          defaultValue: false,
        },
        {
          name: 'security',
          type: 'checkbox', // required
          label: '24/7 Security',
          defaultValue: false,
        },
        {
          name: 'gated',
          type: 'checkbox', // required
          label: 'Gated',
          defaultValue: false,
        },
        {
          name: 'lounge',
          type: 'checkbox', // required
          label: 'Lounge',
          defaultValue: false,
        },
        {
          name: 'playarea',
          type: 'checkbox', // required
          label: 'Play Area',
          defaultValue: false,
        },
        {
          name: 'gym',
          type: 'checkbox', // required
          label: 'Gym',
          defaultValue: false,
        },
        {
          name: 'swimming',
          type: 'checkbox', // required
          label: 'Swimming',
          defaultValue: false,
        },
        {
          name: 'gaming',
          type: 'checkbox', // required
          label: 'Gaming',
          defaultValue: false,
        },
        {
          name: 'foodcourt',
          type: 'checkbox', // required
          label: 'Food Court',
          defaultValue: false,
        },
        {
          name: 'cinema',
          type: 'checkbox', // required
          label: 'Cinema',
          defaultValue: false,
        }
      ],
    },
    {
      name: 'Address Information', // required
      type: 'group', // required
      fields: [ // required
        {
          name: 'shop',
          type: 'text',
          required: false,
        },
        {
          name: 'phone',
          type: 'text',
          required: false,
        },
        {
          name: 'map',
          type: 'text',
          required: false,
        },
        {
          name: 'address',
          type: 'text',
          required: false,
        }
      ],
    },
    {
      name: 'property', // required
      type: 'array', // required
      label: 'Property Portfolio',
      labels: {
        singular: 'Property',
        plural: 'Properties',
      },
      fields: [ // required
        {
          name: 'image',
          type: 'upload',
          relationTo: 'starmedia',
        },
        {
          name: 'fileTitle',
          type: 'text',
        }
      ]
    },
    {
      name: 'gallery', // required
      type: 'array', // required
      label: 'Gallery Images',
      labels: {
        singular: 'Gallery',
        plural: 'Galleries',
      },
      fields: [ // required
        {
          name: 'image',
          type: 'upload',
          relationTo: 'starmedia',
        },
        {
          name: 'caption',
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

export default Projects;