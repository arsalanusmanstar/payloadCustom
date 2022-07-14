// Example Collection - For reference only, this must be added to payload.config.js to be used.
const Digital = {
  slug: 'digital', 
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read:({ req: { user } })=>user.role === 'digital'? true: false 
  },
  fields: [ 
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'Banner', // required
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
        },
        {
          name: 'getstarted',
          type: 'text', // required
          label: 'Get Started Button',
        },
        {
          name: 'BannerImage', // required
          type: 'upload', // required
          relationTo: 'media', // required
          required: false,
        }
      ],
      
    },

    {
      name: 'logos', // required
      type: 'array', // required
      label: 'Company Logos',
      labels: {
        singular: 'Company Logo',
        plural: 'Companies Logos',
      },
      fields: [ // required
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'url',
          type: 'textarea', // required
        }
      ]
    },
    {
      name: 'AboutUs', // required
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
        },
        {
          name: 'points', // required
          type: 'array', // required
          label: 'Points',
          labels: {
            singular: 'Point',
            plural: 'Points',
          },
          fields: [ // required
            {
              name: 'number',
              type: 'text',
            },
            {
              name: 'title',
              type: 'text',
            }
          ]
        },// required
        {
          name: 'about_boxes', // required
          type: 'array', // required
          label: 'Boxes',
          labels: {
            singular: 'Box',
            plural: 'Boxes',
          },
          fields: [ // required
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'boxesImage',
              type: 'upload',
              relationTo: 'media',
            }
          ]
        },// required
      ],
      
    },
    {
      name: 'Skillsets', // required
      type: 'group', // required
      fields: [ // required
        {
          name: 'title',
          type: 'text', // required
          label: 'Title',
        },
        {
          name: 'Percents', // required
          type: 'array', // required
          label: 'Percents',
          labels: {
            singular: 'Percent',
            plural: 'Percents',
          },
          fields: [ // required
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'percent',
              type: 'text',
            }
          ]
        },// required
        {
          name: 'getstarted',
          type: 'text', // required
          label: 'Get Started Button',
        },
        {
          name: 'BannerImage', // required
          type: 'upload', // required
          relationTo: 'media', // required
          required: true,
        },
      ]
    },
    {
      name: 'we Can Help', // required
      type: 'group', // required
      fields: [ // required
        {
          name: 'title',
          type: 'text', // required
          label: 'Title',
        },
        {
          name: 'helpBoxes', // required
          type: 'array', // required
          label: 'Help Boxes',
          labels: {
            singular: 'helpBox',
            plural: 'helpBoxes',
          },
          fields: [ // required
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'description',
              type: 'textarea', // required
              label: 'Description',
            }
          ]
        },// required
        {
          name: 'getstarted',
          type: 'text', // required
          label: 'Get Started Button',
        }
      ]
    },
    {
      name: 'Why we choose', // required
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
        },
        {
          name: 'Points', // required
          type: 'array', // required
          label: 'Points',
          labels: {
            singular: 'Point',
            plural: 'Points',
          },
          fields: [ // required
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'description',
              type: 'textarea', // required
              label: 'Description',
            }
          ]
        },// required
        {
          name: 'BannerImage', // required
          type: 'upload', // required
          label: 'Banner Image',
          relationTo: 'media', // required
          required: true,
        },
      ]
    },
    {
      name: 'letsTalk', // required
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
        },
        {
          name: 'contact', // required
          type: 'array', // required
          label: 'Contact',
          labels: {
            singular: 'Contact',
            plural: 'Contact',
          },
          fields: [ // required
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'description',
              type: 'textarea', // required
              label: 'Description',
            }
          ]
        },
      ]
    },
    {
      name: 'Portfolio', // required
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
        },
        {
          name: 'BannerImage', // required
          type: 'upload', // required
          label: 'Banner Image',
          relationTo: 'media', // required
          required: true,
        },
        {
          name: 'portfolio', // required
          type: 'array', // required
          label: 'portfolio',
          labels: {
            singular: 'portfolio',
            plural: 'portfolio',
          },
          fields: [ // required
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'Categories', // required
              type: 'group', // required
              fields: [ // required
                {
                  name: 'youtube',
                  type: 'checkbox', // required
                  label: 'Youtube',
                  defaultValue: false,
                },
                {
                  name: 'socialmedia',
                  type: 'checkbox', // required
                  label: 'Social media',
                  defaultValue: false,
                }
              ],
            },
            {
              name: 'url',
              type: 'textarea', // required
              label: 'Url',
            }
          ]
        },
      ]
    },
    {
      name: 'Testimonials', // required
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
        },
        {
          name: 'Testimonial', // required
          type: 'array', // required
          label: 'Testimonial',
          labels: {
            singular: 'Testimonial',
            plural: 'Testimonials',
          },
          fields: [ // required
            {
              name: 'person',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'description',
              type: 'textarea', // required
              label: 'Description',
            }
          ]
        },
      ]
    },
  ],
}

export default Digital;