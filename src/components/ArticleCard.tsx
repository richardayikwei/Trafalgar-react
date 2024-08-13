import { Articles } from "../types/article";

type ArticleCardProps = {
  article: Articles,
  children: JSX.Element ,
}

const SectionFour = ({article, children}: ArticleCardProps) => {
  return (
      <div className="flex-col md:w-[350px] md:h-[512px] md:border-transparent md:shadow-xl rounded-[20px]  ">
        <img src={article.image} alt={article.alt} className="md:w-[350px] md:h-[240px]" />
        <h1 className="h-[64px] w-[251px] text-[21px] font-bold leading-[32px]">{article.title}</h1>
      <p className=" text-slate-500">{article.text}</p>
      {children}
      </div>

  );
};

export default SectionFour;
