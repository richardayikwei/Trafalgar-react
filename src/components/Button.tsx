interface ButtonProps {
  btntext: string,
  position: string
}

const Button = ({btntext, position} : ButtonProps) => {
  return (
    <div className={`md:flex ${position} text-center mt-[70px]`}>
      <a
        href="#"
        className="bg-white  border-[#458FF6] text-[#458FF6] text-[18px] border-[1.4px] rounded-[55px] border-solid leading-[60px] hover:bg-blue-700 h-[60px] w-[200px] hover:text-white"
      >
        {btntext}
      </a>
    </div>
  );
}

export default Button