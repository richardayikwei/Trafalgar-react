import Navbar from "./components/Navbar";
import Illustration from "./components/Illustration";
import { services } from "./constants/data";
import Profile from "./components/Profile";
import ArticleCard from "./components/ArticleCard";
import Footer from "./components/Footer";
import { assets } from "./assets/assets";
import Button from "./components/Button";
import { ServiceCard } from "./components/ServiceCard";
import { articles } from "./constants/data";
import ArrowBtn from "./components/ArrowBtn";

function App() {
  return (
    <>
      <Navbar />

      <div className="hidden w-[131.58px] h-[115px] mt-[63px] md:flex ">
        <img src={assets.bgimages.element} alt="element" />
      </div>

      <section className="container md:mx-auto">
        <div className="flex flex-col-reverse md:flex-row md:mt-0 mt-[200px] justify-between">
          <div className="flex flex-col md:w-[445px] space-y-9 w-[445px] h-[338px] rounded-[55px]">
            <h1 className="text-[48px] h-[112px] md:text-left text-center w-[427px] font-bold leading-[56px]">
              Virtual healthcare for you
            </h1>

            <p className="text-[#7D7987] md:text-left text-center text-[21px] leading-[32px] font-[300]">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>

            <div className="md:justify-start justify-center flex  md:flex-row ">
              <button className="bg-blue-400 font-bold text-[18px] leading-[60px] rounded-[55px] text-white text-center hover:bg-blue-700 w-[200px] h-[60px]">
                Consult today
              </button>
            </div>
          </div>
          <div className="md:w-[693px] md:h-[598px] -mt-16">
            <img src={assets.images.illustration} alt="illustration" />
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center space-y-5 md:h-[177px] md:w-[952px] mt-[200px] container mx-auto ">
        <div className="w-[212px] font-bold leading-[56px] text-[36px]">
          <h1>Our services</h1>
        </div>

        <div className="flex ">
          <p className="border-b-2 w-[56px] border-black"></p>
        </div>

        <div className="md:w-[952px] md:h-[60px] font-[300] text-[#7D7987] text-center leading-[30px]">
          <p>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
      </div>
      <section className="hidden md:flex">
        <div className=" flex flex-col mx-auto mt-16 container md:w-[1120px] h-[745px] ">
          <div className="md:grid md:grid-cols-3 md:gap-x-[34px] md:gap-y-[37px]">
            {services.slice(0, 6).map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>

          <Button btntext="Learn more" position="justify-center" />
        </div>
      </section>
      {services.slice(6, 7).map((service, idx) => (
        <Illustration
          key={idx}
          service={service}
          direction={"flex-row"}
          btnText={"Learn more"}
          position="justify-start"
          widthDescription="md:w-[450px]"
          widthTitle="md:w-[481px]"
        />
      ))}
      {services.slice(7, 8).map((service, idx) => (
        <Illustration
          key={idx}
          service={service}
          direction={"flex-row-reverse"}
          btnText={`Download \u2193 `}
          position="justify-start"
          widthDescription="md:w-[420px]"
          widthTitle="md:w-[254px]"
        />
      ))}
      <Profile />
      <section className="md:mt-[216px] container mx-auto">
        <div className="mx-auto flex flex-col md:w-[462px] md:h-[84px] mt-24">
          <h1 className="text-[36px] font-bold leading-[56px]">Check out our latest article</h1>

          <div className="flex justify-center p-3">
            <p className="border-b-2 w-[56px] border-black"></p>
          </div>
        </div>
        <div className=" flex flex-col mt-16  md:w-[1118px] h-[512px]  container mx-auto">
          <div className="md:grid md:grid-cols-3 md:gap-x-[34px]">
            {articles.map((article, idx) => (
              <ArticleCard key={idx} article={article}>
                <ArrowBtn />
              </ArticleCard>
            ))}
          </div>
        </div>
        <Button btntext="View all" position="justify-center" />
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default App;
