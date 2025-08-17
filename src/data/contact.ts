import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faBookmark } from '@fortawesome/free-regular-svg-icons/faBookmark';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faFileText } from '@fortawesome/free-regular-svg-icons/faFileText';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons/faPaperPlane';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/DavidChen0429',
    label: 'Github',
    icon: faGithub,
  },
  // {
  //   link: 'https://facebook.com/d',
  //   label: 'Facebook',
  //   icon: faFacebookF,
  // },
  // {
  //   link: 'https://www.instagram.com/dangelosaurus/',
  //   label: 'Instagram',
  //   icon: faInstagram,
  // },
  {
    link: 'https://www.linkedin.com/in/zekai-david-chen/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  // {
  //   link: 'https://angel.co/michael-d-angelo',
  //   label: 'Angel List',
  //   icon: faAngellist,
  // },
  // {
  //   link: 'https://twitter.com/dangelosaurus',
  //   label: 'Twitter',
  //   icon: faTwitter,
  // },
  {
    link: 'mailto:zkaichen@student.ubc.ca',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://scholar.google.com/citations?user=qHe4B1MAAAAJ&hl=en',
    label: 'Book',
    icon: faBookmark,
  },
  {
    link: '/CV_Zekai_Chen.pdf',
    label: 'CV',
    icon: faFileText,
  },
  {
    link: 'https://medium.com/@chenzk0429',
    label: 'Blogs and Social Events',
    icon: faPaperPlane,
  },
];

export default data;
