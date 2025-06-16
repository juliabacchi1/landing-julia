export const footerQuery = `*[_type == "footer"][0] {
  brandName,
  brandHighlight,
  description,
  socialLinks[] {
    platform,
    url
  },
  columns[] {
    title,
    links[] {
      text,
      url
    }
  },
  ctaBox {
    text,
    buttonText,
    buttonLink
  },
  copyright
}
`;
