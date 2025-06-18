export const getPopularTopicsQuery = `*[_type == "post"] | order(_createdAt desc)[0...6] {
  title,
  slug,
  description,
  category,
  badge,
  author,
  letter,
  tagColor,
  "icon": icon.asset->url
}`;