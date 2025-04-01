type SeoProps = {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
};

const defaultTitle = 'Bruno Félix de Sousa';
const defaultDescription =
  'Desenvolvedor Backend | Node.js | TypeScript | React.js | PostgreSQL | MySQL | Java | Spring Boot';
const defaultUrl = 'https://github.com/BrunoFelixDeSousa';
const defaultImage = 'https://avatars.githubusercontent.com/u/79954751?v=4';

export function SEO({
  title,
  description = defaultDescription,
  keywords,
  image = defaultImage,
  url = defaultUrl,
}: SeoProps) {
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <>
      <title>{pageTitle}</title>

      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} /> */}
    </>
  );
}
