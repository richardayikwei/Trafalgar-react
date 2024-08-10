import { useState, useEffect } from "react";
import { profiles } from "../constants/data";
import { assets } from "../assets/assets";

const Profile = () => {
  const [index, setIndex] = useState(0);
  const [circle0, setCircle0] = useState("bg-blue-600");
  const [circle1, setCircle1] = useState("bg-blue-300");
  const [circle2, setCircle2] = useState("bg-blue-300");

  useEffect(() => {
    let slideShow = setTimeout(() => {
      index < profiles.length - 1 ? setIndex(index + 1) : setIndex(0);
      setCircle0(index === 2 ? "bg-blue-600" : "bg-blue-300");
      setCircle1(index === 0 ? "bg-blue-600" : "bg-blue-300");
      setCircle2(index === 1 ? "bg-blue-600" : "bg-blue-300");
    }, 3000);
    return () => clearTimeout(slideShow);
  });

  const handleClickForward = () => {
    index < profiles.length - 1
      ? setIndex(index + 1)
      : setIndex(0);
    setCircle0((index === 2 ? "bg-blue-600" : "bg-blue-300"));
    setCircle1((index === 0 ? "bg-blue-600" : "bg-blue-300"));
    setCircle2((index === 1 ? "bg-blue-600" : "bg-blue-300"));
      console.log(index);

  }
  const handleClickBackward = () => {
    index > 0 ? setIndex(index - 1) : setIndex(profiles.length - 1);
    
  }

  let nextProfile = profiles[index];

  return (
    <section>
      <div
        className="container flex justify-center  flex-col mx-auto  md:space-x-16 mt-24  p-7  md:w-3/4 bg-no-repeat bg-left"
        style={{ backgroundImage: `url(${assets.bgimages.element})` }}
      >
        <div className="bg-gradient-to-b from-blue-400 to-blue-500 rounded-3xl p-6">
          <div
            className="flex justify-center bg-no-repeat bg-right-top"
            style={{ backgroundImage: `url(${assets.bgimages.element})` }}
          >
            <h1 className="text-3xl text-white p-7">
              What our customer are saying
            </h1>
          </div>

          <div className="flex justify-center">
            <p className="border-b-2 w-10"></p>
          </div>

          <div className="flex md:flex-row flex-col justify-center md:space-x-9 space-y-6 items-center">
            <div className="">
              <img
                src={nextProfile.headshot}
                alt="headshot"
                className=" flex w-32 rounded-full"
              />
            </div>

            <div className="flex flex-col md:w-52">
              <h1 className="text-white text-lg">{nextProfile.name}</h1>
              <p className="text-white text-sm">{nextProfile.position}</p>
            </div>

            <div className="flex text-white text-sm md:w-1/2 ">
              <p>{nextProfile.summary}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row  justify-around md:w-3/4">
          <div className="h-0 text-4xl hover:text-blue-600 text-blue-300">
            <button onClick={handleClickBackward}>&#8592;</button>
          </div>

          <div className="flex flex-row h-0 mt-6 space-x-6">
            <div className={`rounded-full p-1 ${circle0}`}></div>
            <div className={`rounded-full p-1 ${circle1}`}></div>
            <div className={`rounded-full p-1 ${circle2}`}></div>
          </div>
          <div className="h-0 text-4xl hover:text-blue-600 text-blue-300">
            <button onClick={handleClickForward}>&#8594;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
