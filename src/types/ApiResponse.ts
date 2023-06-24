export type NewStoriesResponse = number[];

export type StoryResponse = {
  id: string;
  deleted: string;
  type: string;
  by: string;
  time: number;
  text: TrustedHTML;
  dead: string;
  parent: string;
  poll: number;
  kids: number[];
  url: string;
  score: number;
  title: string;
  parts: number[];
  descendants: string;
};
