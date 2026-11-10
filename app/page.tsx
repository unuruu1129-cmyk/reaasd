import { ArticleCard } from "@/components/ArticleCard";
import data from "@/data/news.json";

const Home = () => {
  return (
    <div className="max-w-7xl w-full mx-auto px-5 md:px-8">
      <header className="w-full pt-10 flex flex-row justify-between items-end ">
        <div>
          <h6 className="text-[10px] text-[#C44724] font-bold ">Stay curious</h6>
          <h5 className="text-3xl md:text-4xl font-bold mt-2">The latest stories</h5>
        </div>
        <p className="hidden md:flex text-xs text-[#65675F] ">Big ideas. Fresh voices. Worth your time.</p>
      </header>
      <div className="wrap-normal border-y border-[#E2E2DA] mt-6 py-3 text-xs text-[#65675F]">
        <button type="button" className="cursor-pointer px-3 py-2.5 rounded-xl hover:bg-black hover:text-white transition-colors duration-300">
          All stories
        </button>
        <button type="button" className="cursor-pointer px-3 py-2.5 rounded-xl hover:bg-black hover:text-white transition-colors duration-300">
          World
        </button>
        <button type="button" className="cursor-pointer px-3 py-2.5 rounded-xl hover:bg-black hover:text-white transition-colors duration-300">
          Technology
        </button>
        <button type="button" className="cursor-pointer px-3 py-2.5 rounded-xl hover:bg-black hover:text-white transition-colors duration-300">
          Culture
        </button>
        <button type="button" className="cursor-pointer px-3 py-2.5 rounded-xl hover:bg-black hover:text-white transition-colors duration-300">
          Travel
        </button>
        <button type="button" className="cursor-pointer px-3 py-2.5 rounded-xl hover:bg-black hover:text-white transition-colors duration-300">
          Design
        </button>
        <button type="button" className="cursor-pointer px-3 py-2.5 rounded-xl hover:bg-black hover:text-white transition-colors duration-300">
          Science
        </button>
        <button type="button" className="cursor-pointer px-3 py-2.5 rounded-xl hover:bg-black hover:text-white transition-colors duration-300">
          Business
        </button>
      </div>
      <div className="text-xs text-[#65675F] py-5 ">20 stories to explore</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {data.map((article) => (
          <ArticleCard
            key={article.slug}
            title={article.title}
            slug={article.slug}
            category={article.category}
            image={article.image}
            imageAlt={article.imageAlt}
            description={article.description}
            id={article.id}
            author={article.author}
            date={article.date}
            content={article.content}
          />
        ))}
      </div>
      <footer>
        <div>
          <p>the daily ▧</p>
          <p>A fresh perspective. Every day.</p>
        </div>
        <div>Back to top ↑</div>
      </footer>
    </div>
  );
};

export default Home;
