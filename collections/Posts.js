// Example Collection - For reference only, this must be added to payload.config.js to be used.
import isAdminOrCreatedBy from './auth/isAdminOrCreatedBy';
// import  {ElementButton} from 'payload/components/rich-text/ElementButton';
// /home/asharib/Downloads/nodejs/node_modules/payload/components/rich-text.ts
// /home/asharib/Downloads/nodejs/node_modules/payload/dist/admin/components/elements/Table/index.js

const Posts = {
  slug: 'post',
  access: {
    read:({ req: { user } })=>user.role === 'digital' || user.role === 'blogs' || user.role === 'bumblebee'? false: true,
    update: isAdminOrCreatedBy,
    delete: isAdminOrCreatedBy, 
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'content', // required
      type: 'richText', // required
      defaultValue: [{
        children: [{ text: 'sdfgsdfgsdd' }],
      }],
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'time', // required
      type: 'date', // required
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'author', // required
      type: 'select', // required
      options: [
        {
          label: 'Aamir Saeeduddin',
          value: 'aamir_saeeduddin',
        },
        {
          label: 'Arif Mustafa',
          value: 'arif_mstafa',
        },
        {
          label: 'Haris Sonija',
          value: 'haris_sonija',
        },
        {
          label: 'Star Marketing',
          value: 'star_marketing',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
      // {
      //   name: 'content',
      //   type: 'richText',
      //   defaultValue: [{
      //     children: [{ text: 'Here is some default content for this field' }],
      //   }],
      //   required: true,
      // },
    {
      name: 'Categories', // required
      type: 'group', // required
      fields: [ // required
        {
          name: 'events',
          type: 'checkbox', // required
          label: 'Events',
          defaultValue: false,
        },
        {
          name: 'announcements',
          type: 'checkbox', // required
          label: 'Announcements',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'Video', // required
      type: 'group', // required
      fields: [ // required
        {
          name: 'isvideo',
          type: 'checkbox', // required
          label: 'IsVideo',
          defaultValue: false,
        }
      ],
    },
    {
      name: 'videoUrl',
      type: 'text',
    },
    {
      name: 'featuredImage',
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
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

export default Posts;