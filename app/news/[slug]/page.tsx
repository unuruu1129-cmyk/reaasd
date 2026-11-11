import React from "react";
import data from "@/data/news.json";
type ArticleDetailPageType = { params: Promise<{ slug: string }> };

export const instant = false;
export const generateStaticParams = () => {
  return data.map((article) => ({ slug: article.slug }));
};

const ArticleDetailPage = async ({ params }: ArticleDetailPageType) => {
  const { slug } = await params;
  const foundArticle = data.find((article) => article.slug === slug);
  return (
    <div>
      <header className="py-6 ">
        <div>← All stories</div>
        <div>/ {foundArticle.category}</div>
      </header>
      <div>
        <div>
          <div>{foundArticle.category}</div>
          <div>— THE DAILY</div>
        </div>
        <div>The future of cities is greener than you think</div>
        <div>From rooftop gardens to car-free streets, a quieter urban revolution is taking root.</div>
        <div>
          <div>AM</div>
          <div>
            <div>WRITTEN BY</div>
            <div>Alex Morgan</div>
          </div>
          <div>
            <div>PUBLISHED</div>
            <div>Nov 4, 2026</div>
          </div>
          <div>
            <div>READING TIME</div>
            <div>1 min read</div>
          </div>
        </div>
      </div>
      <img src={foundArticle.image} />
      <div>
        <p>Modern architecture surrounded by greenery</p>
        <p>Illustrative photography · Unsplash</p>
      </div>
      <div>
        <div>
          <div>━━ THE STORY</div>
          <div>{foundArticle.content}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
