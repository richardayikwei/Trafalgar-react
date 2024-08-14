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
    <section className="container mx-auto hidden md:flex">
      <div
        className="container items-center mx-auto flex flex-col mt-[251px] md:w-[1219.58px] md:h-[502px] bg-no-repeat bg-left"
        // style={{ backgroundImage: `url(${assets.bgimages.element})` }}
      >
        <div className="bg-gradient-to-b from-[#67C3F3] to-[#5A98F2] rounded-[24px] md:w-[1120px] md:h-[425px]">
          <div
            className="flex justify-center bg-no-repeat bg-right-top"
            // style={{ backgroundImage: `url(${assets.bgimages.element})` }}
          >
            <h1 className="text-[36px] font-bold leading-[48px] text-white mt-[64px]">
              What our customer are saying
            </h1>
          </div>

          <div className="flex justify-center mt-[25px]">
            <p className="border-b-2 w-[56px]"></p>
          </div>

          <div className="flex md:flex-row flex-col items-center mt-[68px]">
            <div className="">
              <img
                src={nextProfile.headshot}
                alt="headshot"
                className=" flex w-[141px] rounded-full md:ml-[118px]"
              />
            </div>

            <div className="flex flex-col md:ml-[29px]">
              <h1 className="text-white text-[22px] leading-[48px] font-bold md:h-[48px] md:w-[184px]">
                {nextProfile.name}
              </h1>
              <p className="text-white text-[18px] font-[400]">
                {nextProfile.position}
              </p>
            </div>

            <div className="flex md:ml-[110px] font-[400px] text-white text-[19px] md:w-[420px] md:h-[120px]">
              <p>{nextProfile.summary}</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-[42px] flex flex-row justify-between md:w-[336.43px]">
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
