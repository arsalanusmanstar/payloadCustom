const Admin = {
    slug: "admins",
    labels: {
      singular: "Admin",
      plural: "Admins",
    },
    auth: {
      tokenExpiration: 7200, // 2 hours
      verify: false,
      maxLoginAttempts: 5,
      lockTime: 600 * 1000, // lock time in ms
      useAPIKey: true,
      depth: 0,
      cookies: {
        secure: false,
        sameSite: "lax",
        domain: undefined,
      },
    },
    fields: [],
    timestamps: true,
    admin: {
      useAsTitle: "email",
    },
  };