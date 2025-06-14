import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "xvi6m0oc",
  dataset: "production",
  apiVersion: "2025-06-14",
  useCdn: true,
});
