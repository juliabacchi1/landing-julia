import { groq } from "next-sanity";

export const pricingQuery = groq`
  *[_type == "pricing"][0]{
    title,
    subtitle,
    plans[]{
      name,
      price,
      priceDescription,
      description,
      features[]{
        text,
        included
      },
      ctaText,
      highlight,
      highlightText
    }
  }
`;
