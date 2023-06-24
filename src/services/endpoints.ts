import { API } from ".";
import { NewStoriesResponse, StoryResponse, IdParams } from "../types";

export const getStoryIds = async (params: IdParams) => {
  const response = await API.get<NewStoriesResponse>(`/${params}.json`);
  return response;
};

export const getStory = async (storyId: number) => {
  const response = await API.get<StoryResponse>(`/item/${storyId}.json`);
  return response;
};
