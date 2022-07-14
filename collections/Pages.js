// Example Collection - For reference only, this must be added to payload.config.js to be used.
import isAdminOrCreatedBy from './auth/isAdminOrCreatedBy';



const Regions = {
  slug: 'regions', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  fields: [ // required
    {
      name: 'regions', // required
      type: 'array', // required
      label: 'Regions',
      labels: {
        singular: 'Region',
        plural: 'Regions',
      },
      fields: [ // required
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'slug',
          type: 'text',
        },
        {
          name: 'regionImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'imageSlug',
          type: 'text',
        }
      ]
    },
  ]
};

const Pages = {
  slug: 'pages',
  access: {
    read:({ req: { user } })=>user.role === 'digital' || user.role === 'bumblebee' ? false: true,
    update: isAdminOrCreatedBy,
    delete: isAdminOrCreatedBy, 
  },
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
      name: 'content',
      type: 'richText',
      defaultValue: [{
        children: [{ text: 'Here is some default content for this field' }],
      }],
      required: true,
      admin: {
        elements: [
          'h2',
          'h3',
          'h4',
          'link'
        ],
        elements: [
          'bold',
          'italic'
        ]
      }
    },
    {
      name: 'layout', // required
      type: 'blocks', // required
      blocks: [ // required
        Regions
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

export default Pages;