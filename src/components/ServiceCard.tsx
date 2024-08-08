import { Service } from "../types/service";

type ServiceCardProps = {
  service: Service;
};

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="flex-col md:w-72 md:border-transparent md:shadow-xl rounded-[20px]">
      <img src={service.icon} alt={service.alt} className="p-3" />
      <h1 className="p-3 text-xl ">{service.title}</h1>
      <p className="p-3 text-slate-500">{service.description}</p>
    </div>
  );
};
