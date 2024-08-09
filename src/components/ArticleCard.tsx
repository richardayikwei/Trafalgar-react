import { Articles } from "../types/article";

type ArticleCardProps = {
  article: Articles,
  children: JSX.Element ,
}

const SectionFour = ({article, children}: ArticleCardProps) => {
  return (
      <div className="flex-col md:w-72 md:border-transparent md:shadow-xl rounded-[20px]">
        <img src={article.image} alt={article.alt} className="p-3" />
        <h1 className="p-3 text-xl ">{article.title}</h1>
      <p className="p-3 text-slate-500">{article.text}</p>
      {children}
      </div>

  );
};

export default SectionFour;
