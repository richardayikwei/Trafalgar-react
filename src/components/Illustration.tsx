import { Service } from "../types/service"
import Button from "./Button"

type Illustration = {
  direction: string;
  service: Service;
  btnText: any;
  position: string;
  widthDescription: string;
  widthTitle: string;
}


const Illustration = ({direction, service , btnText, position, widthDescription, widthTitle}: Illustration) => {
  return (
    <div
      className={`container flex justify-center flex-col md:${direction} mx-auto md:w-[1273px] md:h-[477px] md:space-x-16 mt-[220px]`}
    >
      <div className="flex justify-center  md:justify-start">
        <img
          src={service.icon}
          alt={service.alt}
          className="md:h-[477px] md:w-[650px]"
        />
      </div>

      <div className="flex flex-col text-left md:w-[486px] md:h-[388px]">
        <h1 className={`md:h-[112px] ${widthTitle} leading-[56px] text-[36px] md:mt-14 font-bold`}>
          {service.title}
        </h1>

        <div className="flex justify-start p-3">
          <p className="border-b-2 w-[56px] border-black"></p>
        </div>

        <p className={`md:h-[120px] ${widthDescription} leading-[30px] font-[300px] text-[18px] text-[#7D7987]`}>{service.description}</p>

        <Button btntext={btnText} position={position} />
      </div>
    </div>
  );
}

export default Illustration