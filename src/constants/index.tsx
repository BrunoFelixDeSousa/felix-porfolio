import { Mail, MapPin, Phone } from 'lucide-react';
import backDev from '../assets/backend-dev.svg';
import logoCompass from '../assets/compass_uol_logo.jpg';
import fotoPerfil from '../assets/foto-perfil.png';
import frontDev from '../assets/fullstack.svg';
import java from '../assets/icons/Java-Dark.svg';
import javascript from '../assets/icons/JavaScript.svg';
import mongo from '../assets/icons/MongoDB.svg';
import mysSql from '../assets/icons/MySQL-Dark.svg';
import nest from '../assets/icons/NestJS-Dark.svg';
import next from '../assets/icons/NextJS-Dark.svg';
import node from '../assets/icons/NodeJS-Dark.svg';
import postgres from '../assets/icons/PostgreSQL-Dark.svg';
import react from '../assets/icons/React-Dark.svg';
import springBoot from '../assets/icons/Spring-Dark.svg';
import tailwindcss from '../assets/icons/TailwindCSS-Dark.svg';
import typescript from '../assets/icons/TypeScript.svg';

export const contactDetails = [
  { icon: Phone, text: '+55 (91) XXXX XXXX' },
  { icon: Mail, text: 'brunofelixdesousa@hotmail.com' },
  { icon: MapPin, text: 'Paragominas, Brasil' },
];

export const profileDetails = {
  name: 'Bruno Félix de Sousa',
  title: 'Desenvolvedor Backend',
  imageUrl: fotoPerfil,
};

export const profileCardDetails = [
  {
    title: 'Desenvolvimento Backend',
    imgUrl: backDev,
    alt: 'Backend Developer',
    description:
      'Com expertise em Node.js, NestJS e Java com Spring Boot, desenvolvo sistemas backend robustos e escaláveis, garantindo alto desempenho e segurança. Tenho experiência na criação de APIs RESTful, integração com bancos de dados como MongoDB e MySQL.',
  },
  {
    title: 'Desenvolvimento Frontend',
    imgUrl: frontDev,
    alt: 'Frontend Developer',
    description:
      'Estudando desenvolvimento de interfaces dinâmicas e responsivas, utilizando tecnologias modernas como React.js, Next.Js e Tailwind para criar experiências interativas e intuitivas.',
  },
];

export const experiencesDetails = [
  {
    id: '1',
    company: 'Compass UOL',
    logo: logoCompass,
    role: 'Desenvolvedor Backend - Trainee',
    period: '08/2024 - Presente',
    description: 'Atuando com Microserviços, APIs, BFF (Backend for Frontend).',
  },
  {
    id: '2',
    company: 'Compass UOL',
    logo: logoCompass,
    role: 'Desenvolvedor Fullstack - Estagiário',
    period: '01/2024 - 06/2024',
    description:
      'Bolsista de um programa intensivo focado em capacitar profissionais para se tornarem desenvolvedores Fullstack proficientes em tecnologias de ponta, incluindo Node.js, React.js e AWS.',
  },
];

export const skills = [
  {
    id: '2',
    name: 'Node.js',
    icon: node,
  },
  {
    id: '3',
    name: 'NestJS',
    icon: nest,
  },
  {
    id: '4',
    name: 'Java',
    icon: java,
  },
  {
    id: '5',
    name: 'Spring Boot',
    icon: springBoot,
  },
  {
    id: '6',
    name: 'React.js',
    icon: react,
  },
  {
    id: '7',
    name: 'Next.js',
    icon: next,
  },
  {
    id: '8',
    name: 'Tailwind CSS',
    icon: tailwindcss,
  },
  // {
  //   id: '9',
  //   name: 'AWS',
  //   icon: aws,
  // },
  {
    id: '10',
    name: 'MongoDB',
    icon: mongo,
  },
  {
    id: '11',
    name: 'MySQL',
    icon: mysSql,
  },
  {
    id: '12',
    name: 'PostgreSQL',
    icon: postgres,
  },
  {
    id: '13',
    name: 'Typescript',
    icon: typescript,
  },
  {
    id: '1',
    name: 'JavaScript',
    icon: javascript,
  },
];
