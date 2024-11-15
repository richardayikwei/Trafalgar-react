interface ButtonProps {
  btntext: string;
  position: string;
}

const Button = ({ btntext, position }: ButtonProps) => {
  return (
    <div className={`flex ${position} text-center mt-[70px]`}>
      <a
        className="bg-white  border-[#458FF6] text-[#458FF6] text-[18px] border-[1.4px] rounded-[55px] border-solid leading-[60px] md:hover:bg-blue-700 min-h-[60px] min-w-[200px] md:hover:text-white py-[10px] px-[5px] md:py-0 md:px-0 active:opacity-5"
      >
        {btntext}
      </a>
    </div>
  );
};

export default Button;
