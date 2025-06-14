export const heroQuery = `*[_type == "hero"][0]{
  title,
  subtitle,
  ctaText,
  ctaLink,
  image{
    asset->{
      _id,
      url
    },
    alt
  }
}`;
