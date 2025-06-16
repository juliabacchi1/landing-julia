export const processQuery = `*[_type == "process"][0]{
  title,
  subtitle,
  steps[]{
    number,
    title,
    description
  },
  ctaText,
  ctaLink
}`;
