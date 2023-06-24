import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Article, ArticleLoader } from "../../components";
import { getStoryIds } from "../../services";
import { useInfiniteScroll } from "../../hooks";
import { NewStoriesResponse, IdParams } from "../../types";

export default function Home() {
  const { topics } = useParams();
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState<NewStoriesResponse>();

  useEffect(() => {
    let isMounted = true;

    (async () => {
      const data = await getStoryIds((topics as IdParams) || "newstories");
      if (isMounted) {
        setStoryIds(data);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [topics]);

  useEffect(() => {
    setStoryIds(undefined);
  }, [topics]);

  return (
    <section className="flex items-center justify-center flex-col space-y-4 my-4 divide-y">
      {storyIds
        ? storyIds
            .slice(0, count)
            .map((storyId, i) => <Article key={i} storyId={storyId} idx={i} />)
        : [...Array(count)].map((_, i) => <ArticleLoader key={i} idx={i} />)}
    </section>
  );
}
