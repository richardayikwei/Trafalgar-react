import Button from "./Button";

const SectionFour = () => {
  return (
    <section>
      {/*Articles heading*/}
      <div className="flex flex-col items-center justify-around space-y-5 mt-24">
        <h1 className="text-3xl">Check out our latest article</h1>

        {/*Underline*/}
        <div className="flex justify-start p-3">
          <p className="border-b-2 w-10 border-black"></p>
        </div>
      </div>

      <div className="container flex flex-col mx-auto mt-16">
        {/*Articles*/}
        {/* <ServiceCards
          src0={articles[0].image}
          src1={articles[1].image}
          src2={articles[2].image}
          alt0={articles[0].alt}
          alt1={articles[1].alt}
          alt2={articles[2].alt}
          title0={articles[0].title}
          title1={articles[1].title}
          title2={articles[2].title}
          text0={articles[0].text}
          text1={articles[1].text}
          text2={articles[2].text}
          hiddenBtn={"flex"}
          groundImage3={element2}
          groundImage4={vector1}
        >
          <ArrowBtn />
        </ServiceCards> */}
        <Button btntext="View all" position="justify-center" />
      </div>
    </section>
  );
};

export default SectionFour;
