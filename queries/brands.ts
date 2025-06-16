export const brandsQuery = `*[_type == "brands"][0]{
  title,
  "brands": brands[]{
    name,
    "logo": logo{
      asset->{_id, url},
      alt
    },
    url
  }
}`;
