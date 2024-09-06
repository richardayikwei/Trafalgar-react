import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer>
      <div 
        style={{ backgroundImage: `url(${assets.bgimages.element2})` }}
        className=" h-20 mr-20 items-end bg-no-repeat bg-right-bottom mt-20 "
      ></div>

      <div className=" flex flex-col md:flex-row bg-gradient-to-b from-[#67C3F3] to-[#5A98F2] justify-around p-20 space-y-6 ">
        <div
          style={{ backgroundImage: `url(${assets.bgimages.element1})` }}
          className="w-20 -ml-28 -mb-20 items-end bg-no-repeat bg-left-bottom hidden md:flex"
        ></div>

        <div className="flex-col justify-center md:w-[391px] h-[201px] space-y-[31px] ">
          <div className="text-left w-[201px]">
            <h1 className="text-[24px] leading-[30.12px] font-bold text-white">
              <span className="rounded-full bg-white text-[26px] h-[41px] w-[41px] py-[17px] px-[24px] font-bold mr-[12px] text-[#5B9BF3]">
                T
              </span>
              Trafalgar
            </h1>
          </div>

          <div className="text-left mt-[17px]">
            <p className="text-white md:w-[391px] text-[18px] leading-[28px] font-[300]">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
          </div>

          <div className="text-left hidden md:flex mt-[31px]">
            <p className="text-white text-[16px] font-[300]">
              ©Trafalgar PTY LTD 2020. All rights reserved
            </p>
          </div>
        </div>

        <div className="flex-col justify-center space-y-4 ml-3 h-[214px]">
          <h1 className="text-[20px] font-bold leading-[60px] text-white md:h-[60px]">
            Company
          </h1>

          <ul className="text-white space-y-3 text-[18px] font-[300]">
            <li>
              <a href="#" className="hover:text-blue-700">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                Find a doctor
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                Apps
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-col justify-center space-y-4 ml-3 h-[214px]">
          <h1 className="text-[20px] font-bold leading-[60px] text-white md:h-[60px]">
            Region
          </h1>

          <ul className="text-white space-y-3 text-[18px] font-[300]">
            <li>
              <a href="#" className="hover:text-blue-700">
                Indonesia
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                Singapore
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                Hongkong
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                Canada
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-col justify-center space-y-4 ml-3 h-[214px]">
          <h1 className="text-[20px] font-bold leading-[60px] text-white md:h-[60px]">
            Help
          </h1>
          <ul className="text-white space-y-3 text-[18px] font-[300]">
            <li>
              <a href="#" className="hover:text-blue-700">
                Help center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                Contact support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                Instructions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">
                How it works
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex justify-center ml-3">
          <p className="text-white">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer