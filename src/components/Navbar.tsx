

const Navbar = () => {


  return (
    <nav className="container">
      <div className="flex flex-col md:flex-row justify-between ">
        {/*Logo*/}
        <div className=" flex flex-col md:flex-row w-[160px] h-[41px] mt-[56px] md:ml-[191px] ml-[50px]">
          <h1 className="text-[#233348] font-bold text-[24px]">
            <span className="rounded-full bg-[#458FF6] text-[26px] py-3 px-6 mr-3 font-bold  text-white">
              T
            </span>
            Trafalgar
          </h1>
        </div>
       
        <div className="flex flex-col md:flex-row justify-between  w-[545px] h-[23px] mt-[70px] ml-[50px] text-[18px] text-[#1F1534]">
          <a
            href="#"
            className="font-bold hover:bg-[#1F1534] w-[51px] hover:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className=" hover:bg-[#1F1534] hover:text-white w-[110px]"
          >
            Find a doctor
          </a>
          <a href="#" className=" w-[44px] hover:bg-[#1F1534] hover:text-white">
            Apps
          </a>
          <a
            href="#"
            className=" w-[104px] hover:bg-[#1F1534] hover:text-white"
          >
            Testimonials
          </a>
          <a href="#" className=" w-[76px] hover:bg-[#1F1534] hover:text-white">
            About Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar