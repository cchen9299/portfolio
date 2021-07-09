import cheersImage from './img/cheers.png';
import ssgo from './img/ssgo.png';
import sereneguide from './img/sereneguide.png';
import maverick from './img/maverick.png';

const projectData = {
  lab: [
    {
      name: 'Cheers',
      year: '2021',
      association: 'Personal Project',
      tags: ['ReactJS', 'CSS', 'Styled Components', 'HTML', 'Responsive'],
      image: cheersImage,
      url: 'https://cheers.hankchen.space',
      github: 'https://github.com/cchen9299/cheers',
    },
  ],
  work: [
    {
      name: 'SilverSneakers Go',
      year: '2019-2021',
      association: 'Synapse Studios',
      tags: ['React Native StyleSheet', 'RN Animation', 'UIUX Design', 'UX Research', 'Senior Centered'],
      image: ssgo,
      url: 'https://www.synapsestudios.com/work/ssgo/',
      github: null,
      appstore: 'https://apps.apple.com/us/app/silversneakers-go/id1410437380',
      playstore: 'https://play.google.com/store/apps/details?id=com.tivityhealth.silversneakersgo&hl=en_US&gl=US',
    },
    {
      name: 'Serene Guide',
      year: '2021',
      association: 'Freelance',
      tags: ['UIUX Design', 'Project Planning', 'Responsive', 'Webflow'],
      image: sereneguide,
      url: 'https://www.sereneguide.com/',
      github: null,
      appstore: null,
      playstore: null,
    },
    {
      name: 'Tivity Prime',
      year: '2019-2021',
      association: 'Synapse Studios',
      tags: ['React Native StyleSheet', 'RN Animation', 'UIUX Design', 'UX Research'],
      image: '',
      url: null,
      github: null,
      appstore: 'https://apps.apple.com/us/app/well-ontarget-fitness-program/id1453242180',
      playstore: 'https://play.google.com/store/apps/details?id=com.tivityhealth.prime.wellontarget&hl=en_US&gl=US',
    },
    {
      name: 'Maverick',
      year: '2018',
      association: 'Dauntless Studio',
      tags: ['UIUX Design', 'CSS'],
      image: maverick,
      url: 'https://cchen9299.wixsite.com/portfolio/pae',
      github: null,
      appstore: null,
      playstore: null,
    },
  ],
};

export default projectData;
