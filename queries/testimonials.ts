export const testimonialsQuery = `*[_type == "testimonials"][0]{
  title,
  subtitle,
  testimonials[]{
    name,
    initials,
    role,
    content,
    rating,
    color
  }
}`;
