export const heroQuery = `*[_type == "hero"][0]{
  title,
  subtitle,
  ctaText,
  ctaLink,
  ctaTextTwo,
  ctaLinkTwo,
  image{
    asset->{_id, url},
    alt
  }
}`;
