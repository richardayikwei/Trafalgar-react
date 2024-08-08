import ServiceCards from "./ServiceCards";
import { services } from "./Data";
import Button from "./Button";
import Vector from '../assets/Vector.png'
import element from "../assets/element.png";

const SectionTwo = () => {
  return (
    <section id="sectionTwo">
      <div className="container flex flex-col mx-auto mt-16">
        {/*First 3 services*/}
        <ServiceCards
          src0={services[0].image}
          src1={services[1].image}
          src2={services[2].image}
          title0={services[0].service}
          title1={services[1].service}
          title2={services[2].service}
          text0={services[0].text}
          text1={services[1].text}
          text2={services[2].text}
          alt0={services[0].alt}
          alt1={services[1].alt}
          alt2={services[2].alt}
          groundImage1={Vector}
          groundImage2={element}
          
        />

        {/*Second 3 services*/}

        <ServiceCards
          src0={services[3].image}
          src1={services[4].image}
          src2={services[5].image}
          title0={services[3].service}
          title1={services[4].service}
          title2={services[5].service}
          text0={services[3].text}
          text1={services[4].text}
          text2={services[5].text}
          alt0={services[3].alt}
          alt1={services[4].alt}
          alt2={services[5].alt}
        />

        <Button btntext="Learn more" position="justify-center" />
      </div>
    </section>
  );
};

export default SectionTwo;
