import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Article } from "../../components";
import { getStoryIds } from "../../services";
import { useInfiniteScroll } from "../../hooks";
import { NewStoriesResponse, IdParams } from "../../types";

export default function Home() {
  const { topics } = useParams();
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState<NewStoriesResponse>();

  useEffect(() => {
    (async () => {
      const storyIds = await getStoryIds((topics as IdParams) || "newstories");
      setStoryIds(storyIds);
    })();
  }, [topics]);

  return (
    <section className="flex items-center justify-center flex-col space-y-4 my-4 divide-y">
      {storyIds?.slice(0, count).map((storyId, i) => (
        <Article key={i} storyId={storyId} idx={i} />
      ))}
    </section>
  );
}
