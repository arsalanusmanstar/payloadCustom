

// Example Collection - For reference only, this must be added to payload.config.js to be used.
const Media = {
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    disableLocalStorage: true,    
    mimeTypes: ['image/*', 'application/pdf'],
    s3: {
      bucket: 'starnewsformbbd4e22507e44405a64778be964267bd130756-dev',
      prefix: 'starmarketingonline', // files will be stored in bucket folder images/xyz
      // prefix: ({ doc }) => `assets/${doc.type}`, // dynamic prefixes are possible too
      commandInput: {
        // optionally, use here any valid PutObjectCommandInput property
        // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/putobjectcommandinput.html
        ACL: 'public-read',  
      },
    },
    adminThumbnail: ({ doc }) =>
      `https://starnewsformbbd4e22507e44405a64778be964267bd130756-dev.s3.us-east-2.amazonaws.com/starmarketingonlinedeveloper/${doc.filename}`,
  },
  
}

export default Media;