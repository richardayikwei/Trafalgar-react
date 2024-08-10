import { Service } from "../types/service";
import { assets } from "../assets/assets";
import { Articles } from "../types/article";
import { Profile } from "../types/profile";

export const profiles: Profile[] = [
  {
    name: "Edward Newgate",
    position: "Founder Circle",
    summary:
      "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",
    headshot: assets.profilepics.headshot,

  },
  {
    name: "Richard Ayikwei",
    position: "Frontend Developer",
    summary:
      "“Change is constant so elavate your accuracy”",
    headshot: assets.profilepics.headshot3,

  },
  {
    name: "Alfred Sosu",
    position: "Mentor",
    summary:
      "“Eno easy feeling dey”",
    headshot: assets.profilepics.headshot2,
  },
];

export const articles: Articles[] = [
  {
    title: "Disease detection, check up in the laboratory",
    text: "In this case, the role of the health laboratory is very important to do a disease detection...",
    image: assets.images.injection,
    alt: "injection",
  },
  {
    title: "Herbal medicines that are safe for consumption",
    text: "Herbal medicine is very widely used at this time because of its very good for your health...",
    image: assets.images.microscoping,
    alt: "microscoping",
  },
  {
    title: "Natural care for healthy facial skin",
    text: "A healthy lifestyle should start from now and also for your skin health. There are some...",
    image: assets.images.facial,
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
    icon: assets.icons.bottleIcon,
    alt: "bottle",
  },
  {
    title: "Consultation",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
    icon: assets.icons.infoIcon,
    alt: "info",
  },
  {
    title: "Details info",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
    icon: assets.icons.chartIcon,
    alt: "chart",
  },
  {
    title: "Emergency care",
    description:
      "You can get 24/7 urgent care for yourself or your children and your lovely family",
    icon: assets.icons.bagIcon,
    alt: "bag",
  },
  {
    title: "Tracking",
    description: "Track and save your medical history and health data",
    icon: assets.icons.info2Icon,
    alt: "info2",
  },
  {
    title: "Learning Healthcare providers",
    description:
      "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver",
    icon: assets.images.illustration2,
    alt: "illustrations02",
  },
  {
    title: "Download our mobile apps",
    description:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    icon: assets.images.illustration3,
    alt: "illustrations03",
  },
];
