import Navbar from "./components/Navbar";
import SectionThree from "./components/SectionThree";
import ServiceStatement from "./components/ServiceStatement";
import { services } from "./constants/data";
import Profile from "./components/Profile";
import SectionFour from "./components/SectionFour";
import Footer from "./components/Footer";
import { assets } from "./assets/assets";
import Button from "./components/Button";
import { ServiceCard } from "./components/ServiceCard";

function App() {
  return (
    <>
      <Navbar />
      <section>
        <div className="hidden md: md:flex ">
          <img src={assets.images.element} alt="element" />
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center container mx-auto ">
          <div className="flex flex-col md:w-1/2 space-y-12 max-w-md mb-32 ">
            <h1 className="text-4xl md:text-left text-center max-w-md">
              Virtual healthcare for you
            </h1>

            <p className="text-slate-500 md:text-left text-center max-w-sm">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>

            <button className="bg-blue-400 w-fit rounded-3xl text-white px-5 py-3 text-center md:justify-start  hover:bg-blue-700">
              Consult today
            </button>
          </div>
          <div>
            <img src={assets.images.illustration} alt="illustration" />
          </div>
        </div>
      </section>
      <ServiceStatement />
      <section>
        <div className="w-fit flex flex-col mx-auto mt-16">
          <div className="grid grid-cols-3 gap-x-[34px] gap-y-[37px]">
            {services.slice(0, 6).map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>

          <Button btntext="Learn more" position="justify-center" />
        </div>
      </section>
      <SectionThree
        direction={"flex-row"}
        src={services[6].icon}
        statement={services[6].title}
        text={services[6].description}
        btntext={"Learn more"}
        position="justify-start"
      />
      <SectionThree
        direction={"flex-row-reverse"}
        src={services[7].icon}
        statement={services[7].title}
        text={services[7].description}
        btntext="Download &#8595;"
        position="justify-start"
      />
      <Profile />
      <SectionFour />
      <Footer />
    </>
  );
}

export default App;
