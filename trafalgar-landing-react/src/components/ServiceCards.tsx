

const ServiceCards = ({ src0, src1, src2, text0, text1, text2, title0, title1, title2, alt0, alt1, alt2,children, groundImage1, groundImage2, groundImage3, groundImage4 } : any) => {
  return (
    <div
      className="flex justify-center p-3  flex-col  md:flex-row md:space-x-3 md:mb-2  bg-no-repeat "
      style={{ backgroundImage: `url(${groundImage1}), url(${groundImage2})` }}
    >
      <div
        style={{
          backgroundImage: `url(${groundImage3})`,
        }}
        className="bg-no-repeat w-20 h-72   bg-left-top"
      ></div>

      <div className="flex-col md:w-72 md:border-transparent  md:shadow-xl">
        <img src={src0} alt={alt0} className="p-3" />

        <h1 className="p-3 text-xl ">{title0}</h1>

        <p className="p-3 text-slate-500">{text0}</p>
        {children}
      </div>
      <div className="flex-col md:w-72 md:border-transparent  md:shadow-xl">
        <img src={src1} alt={alt1} className="p-3" />

        <h1 className="p-3 text-xl ">{title1}</h1>

        <p className="p-3 text-slate-500">{text1}</p>
        {children}
      </div>
      <div className="flex-col md:w-72 md:border-transparent  md:shadow-xl">
        <img src={src2} alt={alt2} className="p-3" />

        <h1 className="p-3 text-xl ">{title2}</h1>

        <p className="p-3 text-slate-500">{text2}</p>
        {children}
      </div>

      <div
        style={{
          backgroundImage: `url(${groundImage4})`,
        }}
        className="bg-no-repeat w-20 h-72 bg-right"
      ></div>
    </div>
  );
}

export default ServiceCards