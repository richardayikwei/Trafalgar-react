import element from '../assets/element.png'
import illustration from '../assets/illustration.png'

const SectionOne = () => {
  return (
      <section id="sectionOne">
          
              <div className="hidden md: md:flex ">
        <img src={element} alt="element" />
    </div>

        <div className="flex flex-col md:flex-row justify-around items-center container mx-auto ">

            <div className="flex flex-col md:w-1/2 space-y-12 max-w-md mb-32 ">

                <h1 className="text-4xl md:text-left text-center max-w-md">
                    Virtual healthcare for you
                </h1>

                <p className="text-slate-500 md:text-left text-center max-w-sm">
                    Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for
                    everyone
                </p>

                {/*Buttton*/}
                <div className="md:justify-start justify-center">
                    <a href="#"
                        className="bg-blue-400 rounded-3xl text-white px-5 py-3 text-center md:justify-start  hover:bg-blue-700">Consult
                        today</a>
                </div>

            </div>
            {/*Image*/}
            <div className="md:w-1/">
                <img src={illustration} alt="illustration" />
            </div>
        </div>
    </section>
  )
}

export default SectionOne