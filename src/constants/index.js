import { yuush } from '../assets/images';
import {
  car,
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mui,
  rhino,
  webversum,
  hoshizora,
  react,
  redux,
  sass,
  tailwindcss,
  threejs,
  typescript,
  wordpress,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: threejs,
    name: 'Three.js',
    type: '3D Models',
  },
  {
    imageUrl: wordpress,
    name: 'Wordpress',
    type: 'Gutenberg & Elementor',
  },
];

export const experiences = [
  {
    title: ' Web & Wordpress Developer',
    company_name: 'Yuush',
    icon: yuush,
    iconBg: '#c6ecbe',
    date: 'Lipiec 2022 - Październik 2022',
    points: [
      'Torzenie strony i osadzanie ich na Wordpressie aby klient mógł sam zarządzać treścią',
      'Tworzenie stron od podstaw z wykorzystaniem HTML, CSS, JavaScript',
      'Optymalizacja stron pod kątem SEO',
      'Uczestniczenie w przeglądach kodu i udzielanie konstruktywnej informacji zwrotnej innym programistom.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/YourGitHubUsername',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  },
];

export const projects = [
  {
    iconUrl: rhino,
    theme: 'btn-back-green',
    name: 'Rhino Energy',
    description:
      'Strona internetowa dla firmy zajmującej się instalacją oraz pielęgnacją liczników za media takie jak energia elektryczna, woda, ciepło.',
    tech: '[ WordPress, Tailwind, Docker, HTML, JS, Git ]',
    link: 'https://rhino.energy/en-us/',
  },
  {
    iconUrl: webversum,
    theme: 'btn-back-purple',
    name: 'WebVersum',
    description: 'Strona internetowa stworzona na zmianę brandu firmowego z Yuush na WebVersum.',
    tech: '[ React Native, SCSS, Typescript, Git ]',
    link: 'https://webversum.com/',
  },
  {
    iconUrl: hoshizora,
    theme: 'btn-back-blue',
    name: 'Hoshizora Restaurant',
    description:
      'Dynamiczna strona stworzona dla fikcyjnej restauracji Hoshizora, która oferuje japońskie jedzenie. Strona zawiera animacje oraz efekty przewijania oraz jest w pełni responsywna.',
    tech: '[ React JS, Modules: [GSAP, Observer and ScrollTrigger], CSS with BEM, Git ]',
    link: 'https://sirszkudlarek.github.io/hoshizora_restaurant/',
  },
];
