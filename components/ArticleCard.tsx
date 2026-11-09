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
  const { title, description, content, author, date, image, id, slug, imageAlt, category } = props;
  return (
    <div className="w-[376px] h-[500px] rounded-3xl border-[1px] border-[#E7E5E4] overflow-hidden">
      <div className="w-full h-1/2">
        <img src={image} alt={imageAlt} className="h-full w-full relative" />
        <span className="absolute top-4 left-4 bg-[#ECFDF5] text-[10px] font-bold text-[#065F46] rounded-2xl px-3 py-1.5">WORLD</span>
        <div className=" absolute top-[202px] text-[#FFFFFF] font-light left-4 text-xs">1 min read</div>
      </div>
      <div className="w-full h-1/2 flex flex-col px-6 ">
        <div className>
          <span>The future of cities is greener than you think</span>
          <span>From rooftop gardens to car-free streets, a quieter urban revolution is taking root.</span>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex h-10 w-10 justify-center items-center rounded-full bg-[#ECFDF5] text-xs text-[#065F46] font-bold ">AM</div>
          <div>
            <span>Alex Morgan</span>
            <span>Nov 4, 2026</span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
