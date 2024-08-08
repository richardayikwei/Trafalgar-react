import Button from "./Button"


const SectionThree = ({direction, src, text, statement, btntext, position}:any) => {
  return (
       <section id='sectionthree'>

        <div className={`container flex justify-center flex-col md:${direction} mx-auto md:w-4/5 md:space-x-16 mt-24`}>
            <div className="flex justify-center  md:justify-start">
                <img src={src} alt="illustration" className="md:h-96 " />
            </div>


            <div className="flex flex-col  text-left md:w-96">

                <h1 className="p-3 text-xl md:mt-14">{statement}</h1>

                {/*Underline*/}
                <div className="flex justify-start p-3">
                    <p className="border-b-2 w-10 border-black"></p>
                </div>

                  <p className="p-3 text-slate-500">{text}</p>

                  <Button btntext={ btntext} position={position} />

            </div>
        </div>
    </section>
  )
}

export default SectionThree