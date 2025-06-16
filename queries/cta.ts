export const ctaQuery = `*[_type == "cta"][0] {
  title,
  subtitle,
  formFields[] {
    label,
    name,
    type,
    required,
    placeholder,
    options[],
  },
  submitText,
  termsText
}
`;
