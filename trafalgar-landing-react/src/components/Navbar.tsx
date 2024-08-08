

const Navbar = () => {


  return (
      <nav className="container mx-auto p-9">
        <div className="flex flex-col md:flex-row justify-between items-center ">
        {/*Logo*/}
            <div className="text-3xl my-6">
                <h1><span className="rounded-full bg-blue-400 py-3 px-6 mr-3 text-white">T</span>Trafalgar</h1>
            </div>
            {/*ages*/}
            <div className="space-x-6 md:flex sm:text-left">
                <a href="#" className="font-bold text-black hover:bg-slate-400 hover:text-white">Home</a>
                <a href="#" className=" text-slate-500 hover:bg-slate-400 hover:text-white">Find a doctor</a>
                <a href="#" className="text-slate-500 hover:bg-slate-400 hover:text-white">Apps</a>
                <a href="#" className="text-slate-500 hover:bg-slate-400 hover:text-white">Testimonials</a>
                <a href="#" className="text-slate-500 hover:bg-slate-400 hover:text-white">About Us</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar