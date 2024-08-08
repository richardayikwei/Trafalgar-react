interface ButtonProps {
  btntext: string,
  position: string
}

const Button = ({btntext, position} : ButtonProps) => {
  return (
    <div className={`flex ${position}`}>
      <a
        href="#"
        className="bg-white text-blue-400 border-blue-400 border-2 rounded-3xl border-solid px-9 mt-20 py-2 hover:bg-blue-700 hover:text-white"
      >
        {btntext}
      </a>
    </div>
  );
}

export default Button