const BumbleBeeSlider = {
  slug: 'bumblebee_slider', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'SliderSections',
  fields: [ // required
    {
      name: 'slider', // required
      type: 'array', // required
      label: 'Slider',
      labels: {
        singular: 'Slider',
        plural: 'Sliders',
      },
      fields: [ // required
        {
          name: 'image',
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
    }
  ]
};

const BumbleBeeTestimonials = {
  slug: 'bumblebee_testimonials', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'TestimoialsSections',
  fields: [ // required
    {
      name: 'testimonial', // required
      type: 'array', // required
      label: 'Testimonial',
      labels: {
        singular: 'Testimonial',
        plural: 'Testimonials',
      },
      fields: [ // required
        {
          name: 'person',
          type: 'text',
        },
        {
          name: 'content',
          type: 'textarea', // required
          label: 'Content',
        }
      ]
    }
  ]
};

const BumbleBeeBrands = {
  slug: 'bumblebee_brands', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'BrandsSections',
  fields: [ // required
    {
      name: 'brands', // required
      type: 'array', // required
      label: 'Brands',
      labels: {
        singular: 'Brands',
        plural: 'Brands',
      },
      fields: [ // required
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'content',
          type: 'textarea', // required
          label: 'Content',
        },        {
          name: 'link',
          type: 'text',
        },
      ]
    }
  ]
};

const BumbleBeePortfolio = {
  slug: 'bumblebee_portfolio', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'PortfolioSections',
  fields: [ // required
    {
      name: 'portfolio', // required
      type: 'array', // required
      label: 'Portfolio',
      labels: {
        singular: 'Portfolio',
        plural: 'Portfolios',
      },
      fields: [ // required
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ]
    }
  ]
};

const BumbleBeeTeam = {
  slug: 'bumblebee_team', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'TeamSections',
  fields: [ // required
    {
      name: 'team', // required
      type: 'array', // required
      label: 'Team',
      labels: {
        singular: 'Team',
        plural: 'Teams',
      },
      fields: [ // required
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'designation',
          type: 'text',
        },
        {
          name: 'details',
          type: 'textarea', // required
          label: 'details',
        },        {
          name: 'link',
          type: 'text',
        },
      ]
    }
  ]
};

const BumbleBeeAcordien = {
  slug: 'bumblebee_Acordien', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'AcordienSections',
  fields: [ // required
    {
      name: 'acordien', // required
      type: 'array', // required
      label: 'Acordien',
      labels: {
        singular: 'Acordien',
        plural: 'Acordiens',
      },
      fields: [ // required

        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'desceiption',
          type: 'textarea',
        },{
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
        },
      ]
    }
  ]
};

const BumbleBeeAbout = {
  slug: 'bumblebee_about', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'AboutSections',
  fields: [ // required
    {
      name: 'about', // required
      type: 'array', // required
      label: 'About',
      labels: {
        singular: 'About',
        plural: 'Abouts',
      },
      fields: [ // required

        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'desceiption',
          type: 'textarea',
        },
      ]
    }
  ]
};

const Bumblebee = {
  slug: 'bumblebee',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [ // required
        BumbleBeeSlider,
        BumbleBeeAbout,
        BumbleBeeAcordien,
        BumbleBeeTeam,
        BumbleBeePortfolio,
        BumbleBeeTestimonials,
        BumbleBeeBrands
      ]
    }
  ]
}

export default Bumblebee;