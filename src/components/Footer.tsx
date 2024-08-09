import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer>
      <div
        style={{backgroundImage: `url(${assets.bgimages.element2})`}}
        className=" h-20 mr-20 items-end bg-no-repeat bg-right-bottom   mt-20 "
      ></div>

      <div className=" flex flex-col md:flex-row bg-gradient-to-b from-blue-400 to-blue-500 justify-around p-20 space-y-6 ">
        <div
          style={{backgroundImage: `url(${assets.bgimages.element1})`}}
          className="w-20 -ml-28 -mb-20 items-end bg-no-repeat bg-left-bottom hidden md:flex"
        ></div>

        <div className="flex-col justify-center w-80 space-y-6 ">
          <div className="text-left">
            <h1 className="text-2xl font-bold text-white">
              <span className="rounded-full bg-white py-4 px-6 mr-3 text-blue-500">
                T
              </span>
              Trafalgar
            </h1>
          </div>

          <div className="text-left">
            <p className="text-white">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
          </div>

          <div className="text-left hidden md:flex">
            <p className="text-white">
              ©Trafalgar PTY LTD 2020. All rights reserved
            </p>
          </div>
        </div>

        <div className="flex-col justify-center space-y-4 ml-3">
          <h1 className="text-2xl text-white">Company</h1>

          <ul className="text-white space-y-3">
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

        <div className="flex-col justify-center space-y-4 ml-3">
          <h1 className="text-white text-2xl">Region</h1>

          <ul className="text-white space-y-3">
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

        <div className="flex-col justify-center space-y-4 ml-3">
          <h1 className="text-white text-2xl">Help</h1>
          <ul className="text-white space-y-3">
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
          <p className="text-white">©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer