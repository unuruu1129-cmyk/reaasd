import { Clock4, ArrowUpRight } from "lucide-react";
import Link from "next/link";
type ArticleCard = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string;
  content: string[];
};

export const ArticleCard = (props: ArticleCard) => {
  const { title, description, author, date, image, slug, imageAlt, category } = props;
  const initials = author
    .split(" ")
    .map((items) => items[0])
    .join("");

  return (
    <Link
      href={`/news/${slug}`}
      className="max-w-94 w-full rounded-3xl border border-[#E7E5E4] overflow-hidden bg-[#FFFFFF] group transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-500 hover:shadow-xl "
    >
      <div className="relative w-full h-58.75">
        <img src={image} alt={imageAlt} className="h-full w-full relative object-cover transition-transform duration-300 group-hover:scale-105 " />
        <h5 className="absolute top-4 left-4 bg-[#ECFDF5] text-[10px] font-bold text-[#065F46] rounded-2xl px-3 py-1.5">{category}</h5>
        <div className=" absolute top-50.5 text-[#FFFFFF] font-light left-4 text-xs flex flex-row items-center">
          <Clock4 className="size-2" />1 min read
        </div>
      </div>
      <div className="w-full flex flex-col px-6 mb-6">
        <div className="flex flex-col justify-center pt-6">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-sm text-[#57534E] font-light mt-3">{description}</p>
        </div>
        <div className="flex flex-row justify-between items-center mt-11 pt-4 border-t border-[#E2E2DA]">
          <div className="flex h-10 w-10 justify-center items-center rounded-full bg-[#ECFDF5] text-xs text-[#065F46] font-bold ">{initials}</div>
          <div className="flex flex-col w-56.5">
            <p className="text-xs font-bold">{author}</p>
            <p className="text-[11px] text-[#78716C] pt-1">{date}</p>
          </div>
          <div className="flex justify-center items-center w-9 h-9 rounded-full bg-[#FFF7ED]">
            <ArrowUpRight className="size-4.5 text-[#C44724]" />
          </div>
        </div>
      </div>
    </Link>
  );
};
