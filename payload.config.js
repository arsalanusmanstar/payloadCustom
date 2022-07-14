import { buildConfig } from 'payload/config';
import path from 'path';
import s3Upload from 'payload-s3-upload';
import Users from './collections/Users';
import Posts from './collections/Posts';
import Media from './collections/Media';
import MediaStar from './collections/MediaStar';
import Projects from './collections/Projects';
import Pages from './collections/Pages';
import Bumblebee from './collections/Bumblebee';
import Digital from './collections/Digital';
import Jobs from './collections/Jobs';
import Teams from './collections/Teams';
import Inquires from './collections/Inquires';
import Locations from './collections/Locations';
import Admin from './collections/Admin';
import Announcement from './collections/Announcement';
export default buildConfig({
  // serverURL: 'http://payload-envv.eba-q53f6pxb.us-east-2.elasticbeanstalk.com',
  // serverURL: 'http://starmarketingstage.us-east-2.elasticbeanstalk.com',

  
// serverURL: 'http://payload-envv.eba-q53f6pxb.us-east-2.elasticbeanstalk.com',
 serverURL: 'http://localhost:3000',

  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- Star Marketing Online',
      // ogImage: Logo,
      // favicon: Favicon,
    },
  },
  collections: [
    Users,
    Posts,
    Pages,
    Projects,
    Jobs,
    Teams,
    Media,
    MediaStar,
    Digital,
    Locations,
    Inquires,
    Bumblebee
    // Add Collections here
    // Examples
  ],
  globals: [
    Announcement
  ],
  upload: {
    limits: {
      fileSize: 5000000, // 5MB, written in bytes
    }
  },
  plugins: [
    s3Upload({
      region: 'us-east-2',
      credentials: {
        accessKeyId: 'AKIAYNI2EN5M2RFMNF52',
        secretAccessKey:'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',
      },
    }),
  ],
});
