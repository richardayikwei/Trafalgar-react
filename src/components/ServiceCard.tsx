import { Service } from "../types/service";

type ServiceCardProps = {
  service: Service;
};

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <article className="flex-col max-w-[350px] h-[354px] md:border-transparent md:shadow-xl rounded-[20px]">
      <figure>
        <img
          src={service.icon}
          alt={service.alt}
          className=" ml-[37px] mt-[54px] h-20 "
        />
      </figure>

      <h1 className="ml-[39px] mt-[22.41px] text-[24px] leading-[56px] font-bold">
        {service.title}
      </h1>
      <p className=" text-[#7D7987] ml-[39px] font-[300px] max-w-[266px] text-[16px]">
        {service.description}
      </p>
    </article>
  );
};
