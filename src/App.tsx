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
      <section>
        <div className="hidden w-[131.58px] mt-[160px] md:flex ">
          <img src={assets.bgimages.element} alt="element" />
        </div>
        <div className="flex flex-col md:flex-row   container mx-auto md:mt-0 mt-[200px]">
          <div className="flex flex-col md:w-1/2 space-y-12 w-[445px] h-[338px] rounded-[55px] mt-[] ">
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
      <div className="flex flex-col items-center justify-around space-y-5">
        <h1 className="text-3xl">Our services</h1>

        <div className="flex justify-start p-3">
          <p className="border-b-2 w-10 border-black"></p>
        </div>

        <p className="text-slate-500 mx-5 text-left md:w-1/2">
          We provide to you the best choices for you. Adjust it to your health
          needs and make sure undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>
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
      {services.slice(6, 7).map((service, idx) => (
        <Illustration
          key={idx}
          service={service}
          direction={"flex-row"}
          btnText={"Learn more"}
          position="justify-start"
        />
      ))}
      {services.slice(7, 8).map((service, idx) => (
        <Illustration
          key={idx}
          service={service}
          direction={"flex-row-reverse"}
          btnText={`Download \u2193 `}
          position="justify-start"
        />
      ))}
      <Profile />
      <section>

        <div className="flex flex-col items-center justify-around space-y-5 mt-24">
          <h1 className="text-3xl">Check out our latest article</h1>

          <div className="flex justify-start p-3">
            <p className="border-b-2 w-10 border-black"></p>
          </div>
        </div>
        <div className="w-fit flex flex-col mx-auto mt-16">
          <div className="grid grid-cols-3 gap-x-[34px] gap-y-[37px]">
            {articles.map((article, idx) => (
              <ArticleCard key={idx} article={article} >
                <ArrowBtn />
              </ArticleCard>
            ))}
          </div>
        </div>
        <Button btntext="View all" position="justify-center" />
      </section>
      <Footer />
    </>
  );
}

export default App;
