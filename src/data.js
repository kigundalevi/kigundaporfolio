// projectsData.js
import ibgroup from '/src/assets/images/stab-main.png';
import memento from '/src/assets/images/iphonemockup.png';
import acc from '/src/assets/images/acc-square.webp';
import daddy from '/src/assets/videos/carsawa.webm';
import sunnyside from '/src/assets/images/sunny-side-square.webp';

const projectsData = [
  {
    title: 'Stab application',
    description: 'Mobile application/ Frontend Development',
    imageSrc: ibgroup,
    link: 'https://stab-tau.vercel.app/'
  },
  {
    title: 'Memento Studio Landing Page',
    description: 'Web Design / Frontend Development',
    imageSrc: memento,
    link: 'https://mementostudio.netlify.app/'
  },
  {
    title: 'Real Business Accountants',
    description: 'Web Design / Frontend Development',
    imageSrc: acc,
    link: 'https://realbusinessaccountants.netlify.app'
  },
  {
    title: 'GoDaddy Landing Page Clone',
    description: 'Web Design / Frontend Development',
    videoSrc: daddy,
    link: 'https://godaddyuiclone.netlify.app'
  },
  {
    title: 'Sunnyside Landing Page',
    description: 'Web Design / Frontend Development',
    imageSrc: sunnyside,
    link: 'https://sunnysidechallenge.netlify.app'
  }
];

export default projectsData;