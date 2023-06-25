import { useEffect, useState, memo } from "react";

import { ArticleLoader } from ".";
import { mapTime } from "../utils";
import { getStory } from "../services";
import { StoryResponse } from "../types";

export const Article = memo(
  ({ storyId, idx }: { storyId: number; idx: number }) => {
    const [story, setStory] = useState<StoryResponse>();

    useEffect(() => {
      (async () => {
        const story = await getStory(storyId);
        setStory(story);
      })();
    }, [storyId]);

    if (!story) return <ArticleLoader idx={idx} />;

    console.log(story);

    return (
      <article className="w-full space-y-2">
        <a
          className="font-semibold text-left text-lg"
          href={story?.url}
          target="_blank"
        >
          {story.title}
        </a>
        {story.text && (
          <p
            dangerouslySetInnerHTML={{ __html: story.text }}
            className="line-clamp-2"
          />
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <a
              className="badge hover:bg-gray-300 transition-colors"
              target="_blank"
              href={`https://news.ycombinator.com/user?id=${story.by}`}
            >
              <b>By: </b> {story.by}
            </a>
            <p className="badge">
              <b>Score: </b> {story.score}
            </p>
          </div>
          <p className="text-xs">
            <b>Posted: </b>
            {mapTime(story.time)}
          </p>
        </div>
      </article>
    );
  }
);
