interface ButtonProps {
  btntext: string,
  position: string
}

const Button = ({btntext, position} : ButtonProps) => {
  return (
    <div className={`flex ${position} text-center leading-[60px] text-[#458FF6] `}>
      <a
        href="#"
        className="bg-white  border-[#458FF6]  border-[1.4px] rounded-[55px] border-solid  mt-20 w-[200px] h-[60px]  hover:bg-blue-700 hover:text-white"
      >
        {btntext}
      </a>
    </div>
  );
}

export default Button