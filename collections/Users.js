const Users = {
  slug: 'users',
  access: {
    read:({ req: { user } })=>user.role === 'developer' || user.role !== 'digital' ? true: false 
  },
  auth: {
    tokenExpiration: 99999999, // 2 hours
    verify: false,
    maxLoginAttempts: 5,
    lockTime: 600 * 1000, // lock time in ms
    useAPIKey: true,
    depth: 0,
    cookies: {
      secure: false,
      sameSite: 'lax',
      domain: undefined,
    },
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      access: {
        read:({ req: { user } })=>user.role === 'admin' ? true: false 
      },
      options: [
        'news',
        'blogs',
        'user',
        'admin',
        'editor',
        'developer',
        'digital',
        'bumblebee'
      ],
    },
    {
      name: 'apiKey',
      type: 'text',
      access: {
        read: ({ req: { user } }) => user.role === 'admin' ? true: false
      },
    },
  ],
  timestamps: true,
};

export default Users;