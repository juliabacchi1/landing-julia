export const faqQuery = `*[_type == "faq"][0]{
  title,
  subtitle,
  questions[]{
    question,
    answer
  }
}`
