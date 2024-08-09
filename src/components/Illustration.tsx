import { Service } from "../types/service"
import Button from "./Button"

type Illustration = {
  direction: string;
  service: Service;
  btnText: any;
  position: string;
}


const Illustration = ({direction, service , btnText, position}: Illustration) => {
  return (

        <div className={`container flex justify-center flex-col md:${direction} mx-auto md:w-4/5 md:space-x-16 mt-24`}>
            <div className="flex justify-center  md:justify-start">
                <img src={service.icon} alt={service.alt} className="md:h-96 " />
            </div>


            <div className="flex flex-col  text-left md:w-96">

                <h1 className="p-3 text-xl md:mt-14">{service.title}</h1>

                <div className="flex justify-start p-3">
                    <p className="border-b-2 w-10 border-black"></p>
                </div>

                  <p className="p-3 text-slate-500">{service.description}</p>

                  <Button btntext={ btnText} position={position} />

            </div>
        </div>
  )
}

export default Illustration