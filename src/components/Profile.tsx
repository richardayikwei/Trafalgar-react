import { profiles } from "../constants/data";
import headshot from "../assets/Group 5.png";
import { assets } from "../assets/assets";

const Profile = () => {
  return (
    <section>
      {/*Profile*/}
      <div
        className="container flex justify-center  flex-col mx-auto  md:space-x-16 mt-24  p-7  md:w-3/4 bg-no-repeat bg-left"
        style={{ backgroundImage: `url(${assets.element})` }}
      >
        <div className="bg-gradient-to-b from-blue-400 to-blue-500 rounded-3xl p-6">
          <div
            className="flex justify-center bg-no-repeat bg-right-top"
            style={{ backgroundImage: `url(${assets.element})` }}
          >
            <h1 className="text-3xl text-white p-7">
              What our customer are saying
            </h1>
          </div>

          {/*Underline*/}
          <div className="flex justify-center">
            <p className="border-b-2 w-10"></p>
          </div>

          <div className="flex md:flex-row flex-col justify-center md:space-x-9 space-y-6 items-center">
            <div className="">
              <img src={headshot} alt="headshot" className=" flex" />
            </div>

            <div className="flex flex-col md:w-52">
              <h1 className="text-white text-lg">{profiles[0].name}</h1>
              <p className="text-white text-sm">{profiles[0].position}</p>
            </div>

            <div className="flex text-white text-sm md:w-1/2 ">
              <p>{profiles[0].summary}</p>
            </div>
          </div>
        </div>
        {/*dots and arrows */}
        <div className="flex flex-row  justify-around md:w-3/4">
          <div className="h-0 text-4xl text-blue-300">
            <p>&#8592;</p>
          </div>

          <div className="flex flex-row h-0 mt-6 space-x-6">
            <div className="rounded-full p-1 bg-blue-600"></div>
            <div className="rounded-full p-1 bg-blue-300"></div>
            <div className="rounded-full p-1 bg-blue-300"></div>
          </div>
          <div className="h-0 text-4xl text-blue-600">
            <p>&#8594;</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
