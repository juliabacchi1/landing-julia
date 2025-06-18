import { client } from "./sanity";
import { getPopularTopicsQuery } from "../queries/posts";

export async function fetchPopularTopics() {
  return await client.fetch(getPopularTopicsQuery);
}