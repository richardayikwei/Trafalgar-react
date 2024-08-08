import bottle from "../assets/bottle.png";
import info from "../assets/info.png";
import chart from "../assets/chart.png";
import bag from "../assets/bag.png";
import info2 from "../assets/info2.png";
import illustrations02 from "../assets/trafalgar-illustration sec02 1.png";
import illustrations03 from "../assets/trafalgar-illustration sec03 1.png";
import injection from "../assets/Mask Group.png";
import microscoping from "../assets/image 2.png";
import facial from "../assets/image 3.png";
import { Service } from "../types/service";
import { assets } from "../assets/assets";

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
    title: "Disease detection, check up in the laboratory",
    text: "In this case, the role of the health laboratory is very important to do a disease detection...",
    image: injection,
    alt: "injection",
  },
  {
    title: "Herbal medicines that are safe for consumption",
    text: "Herbal medicine is very widely used at this time because of its very good for your health...",
    image: microscoping,
    alt: "microscoping",
  },
  {
    title: "Natural care for healthy facial skin",
    text: "A healthy lifestyle should start from now and also for your skin health. There are some...",
    image: facial,
    alt: "facial",
  },
];

export const services: Service[] = [
  {
    title: "Search doctor",
    description:
      "Choose your doctor from thousands of specialist, general and trusted hospitals",
    icon: assets.icons.searchIcon,
    alt: "search",
  },
  {
    title: "Online pharmacy",
    description:
      "Buy your medicines with our mobile application with a simple delivery system",
    icon: bottle,
    alt: "bottle",
  },
  {
    title: "Consultation",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
    icon: info,
    alt: "info",
  },
  {
    title: "Details info",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
    icon: chart,
    alt: "chart",
  },
  {
    title: "Emergency care",
    description:
      "You can get 24/7 urgent care for yourself or your children and your lovely family",
    icon: bag,
    alt: "bag",
  },
  {
    title: "Tracking",
    description: "Track and save your medical history and health data",
    icon: info2,
    alt: "info2",
  },
  {
    title: "Learning Healthcare providers",
    description:
      "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver",
    icon: illustrations02,
    alt: "illustrations02",
  },
  {
    title: "Download our mobile apps",
    description:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    icon: illustrations03,
    alt: "illustrations03",
  },
];
