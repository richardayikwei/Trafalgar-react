import { Articles } from "../types/article";

type ArticleCardProps = {
  article: Articles,
  children: JSX.Element ,
}

const SectionFour = ({article, children}: ArticleCardProps) => {
  return (
    <div className="flex  flex-col max-w-[350px] md:h-[512px] md:border-transparent md:shadow-xl rounded-[20px] mb-10 ">
      <img
        src={article.image}
        alt={article.alt}
        className="md:w-[350px] md:h-[240px]"
      />
      <div className=" mt-[12px] space-y-[12px] flex flex-col md:mx-auto ml-2">

        <h1 className="h-[64px] max-w-[266px] text-[21px] font-bold leading-[32px] md:mb-5">
          {article.title}
        </h1>
     
        <p className="max-w-[266px] h-[84px] text-[16px] leading-[28px] font-[300] text-[#7D7987]">
          {article.text}
        </p>
      
        {children}
      </div>
    </div>
  );
};

export default SectionFour;
