import search from "../assets/search.png";
import bottle from "../assets/bottle.png";
import info from "../assets/info.png";
import chart from "../assets/chart.png";
import bag from "../assets/bag.png";
import info2 from "../assets/info2.png";
import illustrations02 from "../assets/trafalgar-illustration sec02 1.png";
import illustrations03 from "../assets/trafalgar-illustration sec03 1.png";
import injection from '../assets/Mask Group.png';
import microscoping from '../assets/image 2.png'
import facial from '../assets/image 3.png'

export const profiles = [
  {
    id: 0,
    name: "Edward Newgate",
    position: "Founder Circle",
    summary:
      "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",
  },
];

export const articles = [
  {
    title: 'Disease detection, check up in the laboratory',
    text: 'In this case, the role of the health laboratory is very important to do a disease detection...',
    image: injection,
    alt: 'injection'
  },
  {
    title: 'Herbal medicines that are safe for consumption',
    text: 'Herbal medicine is very widely used at this time because of its very good for your health...',
    image: microscoping,
    alt: 'microscoping'
  },
  {
    title: 'Natural care for healthy facial skin',
    text: 'A healthy lifestyle should start from now and also for your skin health. There are some...',
    image: facial,
    alt: 'facial'
  },
]

export const services = [
  {
    id: 0,
    service: "Search doctor",
    text: "Choose your doctor from thousands of specialist, general and trusted hospitals",
    image: search,
    alt: 'search'
  },
  {
    id: 1,
    service: "Online pharmacy",
    text: "Buy your medicines with our mobile application with a simple delivery system",
    image: bottle,
    alt: 'bottle'
  },
  {
    id: 2,
    service: "Consultation",
    text: "Free consultation with our trusted doctors and get the best recomendations",
    image: info,
    alt: 'info'
  },
  {
    id: 3,
    service: "Details info",
    text: "Free consultation with our trusted doctors and get the best recomendations",
    image: chart,
    alt: 'chart'
  },
  {
    id: 4,
    service: "Emergency care",
    text: "You can get 24/7 urgent care for yourself or your children and your lovely family",
    image: bag,
    alt: 'bag'
  },
  {
    id: 5,
    service: "Tracking",
    text: "Track and save your medical history and health data",
    image: info2,
    alt: 'info2'
  },
  {
    id: 6,
    statement: "Learning Healthcare providers",
    text: "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver",
    image: illustrations02,
    alt: 'illustrations02',
    
  },
  {
    id: 7,
    statement: "Download our mobile apps",
    text: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    image: illustrations03,
    alt: 'illustrations03',
  },
];
