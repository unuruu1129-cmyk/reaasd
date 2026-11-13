import { notFound } from "next/navigation";
import Link from "next/link";
import data from "@/data/news.json";
import type { Metadata } from "next";
import articles from "@/data/news.json";
import { ArticleCard } from "@/components/ArticleCard";

type ArticleDetailPageType = { params: Promise<{ slug: string }> };
type Props = { params: Promise<{ slug: string }> };

export const instant = false;
export const generateStaticParams = () => {
  return data.map((article) => ({ slug: article.slug }));
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = data.find((article) => article.slug === slug);
  if (!article) notFound();
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      type: "article",
      siteName: "The Daily",
      title: article.title,
      description: article.description,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

const ArticleDetailPage = async ({ params }: ArticleDetailPageType) => {
  const { slug } = await params;
  const foundArticle = data.find((article) => article.slug === slug);

  if (!foundArticle) notFound();
  const related = articles.filter((element) => foundArticle.category === element.category && foundArticle.id !== element.id);

  const initials = foundArticle.author
    .split(" ")
    .map((items) => items[0])
    .join("");
  return (
    <div id="main" className="max-w-7xl w-full mx-auto px-5 md:px-8 bg-[#FAF9F6]">
      <header className="py-6 flex flex-row text-xs">
        <Link href="/" className="font-bold">
          ← All stories
        </Link>
        <div className="text-[#65675F] pl-3">/</div>
        <div className="text-[#65675F] pl-3">{foundArticle?.category}</div>
      </header>
      <div className="w-full flex flex-col lg:px-20">
        <div className="flex flex-row w-37.75 items-center mt-[41.5px] md:mt-[61.5px] lg:mt-14">
          <div className="bg-[#ECFDF5] py-1.5 px-3 rounded-xl text-[10px] text-[#065F46] font-bold">{foundArticle?.category}</div>
          <div className="text-[11px] pl-3">— THE DAILY</div>
        </div>
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold mt-5">{foundArticle?.title}</div>
        <div className="text-lg md:text-xl text-[#57534E] my-5">{foundArticle?.description}</div>
        <div className="flex flex-row pt-5 mb-8 lg:mb-10 border-t border-[#E2E2DA]">
          <div className="p-3 rounded-full bg-[#ECFDF5] text-[#065F46] mr-3.5 font-bold text-sm ">{initials}</div>
          <div className="max-w-37.5 w-full">
            <div className="text-[10px] text-[#65675F] font-bold">WRITTEN BY</div>
            <div className="text-sm font-bold mt-1">{foundArticle?.author}</div>
          </div>
          <div className="max-w-28.75 w-full">
            <div className="text-[10px] text-[#65675F] font-bold">PUBLISHED</div>
            <div className="text-[#22241F] text-sm mt-1.5">{foundArticle?.date}</div>
          </div>
          <div>
            <div className="text-[10px] text-[#65675F] font-bold">READING TIME</div>
            <div className="text-[#22241F] text-sm mt-1.5">1 min read</div>
          </div>
        </div>
      </div>
      <img src={foundArticle?.image} alt={foundArticle?.imageAlt} className="max-w-296 w-full h-[262.5px] md:h-88 lg:h-[514.78px] rounded-2xl" />
      <div className="text-[10px] text-[#65675F] flex flex-row justify-between mt-3">
        <p>Modern architecture surrounded by greenery</p>
        <p>Illustrative photography · Unsplash</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col bg-[#FFFFFF] justify-center items-center border rounded-xl border-[#E2E2DA] p-10 mt-14 lg:w-3xl">
          <div className="">
            <div className="text-[#C44724] text-[10px] font-bold">━━ THE STORY</div>
            <div className=" mt-6 text-lg md:text-xl space-y-6 font-regular">
              {foundArticle?.content.map((paragraph, index) => (
                <p className="font-serif text-[#44403C]" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-6 text-[#C44724] text-base font-bold">• • •</div>
        </div>
        <div className="text-[11px] text-[#65675F] my-4">Fictional sample story · The Daily learning edition</div>
        <div className="max-w-173.5 w-full mx-auto bg-[#FFF7ED] rounded-xl block md:flex flex-row justify-between">
          <div className="px-6 py-6">
            <div>A little more curiosity?</div>
            <div>Your next good read is just around the corner.</div>
          </div>
          <Link href="/" className="my-6 md:my-[30.5px] mx-6 text-xs py-2.5 px-3 max-w-24.5 w-fit rounded-2xl text-[#FFFFFF] bg-black hover:bg-orange-500  ">
            All stories ↗
          </Link>
        </div>
        <div className="w-full border-t border-[#E2E2DA] pb-16 pt-10 ">
          <div className="text-[10px] text-[#C44724] font-bold mb-2">KEEP YOUR CURIOSITY GOING</div>
          <div className="text-3xl font-bold mb-7">More to discover.</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.25">
            {related.map((foundArticle) => (
              <ArticleCard key={foundArticle.id} {...foundArticle} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
