export default function sitemap() {
  const baseUrl = "https://blackgiraffe.in";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
    },
  ];
}