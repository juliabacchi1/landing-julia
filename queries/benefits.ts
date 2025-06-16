export const benefitsQuery = `*[_type == "benefits"][0]{
    title,
    subtitle,
    benefits[]{
      title,
      description,
      icon
    }
  }
`;
