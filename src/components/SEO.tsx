import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'service';
  structuredData?: object;
}

const defaultMeta = {
  siteName: 'Mister Finisher',
  title: 'Mister Finisher - Premium Door-to-Door Alteration Service in Jabalpur',
  description: 'Professional clothing alteration and tailoring services in Jabalpur. Expert fitting for pants, shirts, dresses, kurtis, blazers & ethnic wear. Free pickup & delivery!',
  keywords: 'tailoring Jabalpur, alteration service, clothing alterations, pants alteration, shirt fitting, dress alterations, kurti alterations, blazer fitting, ethnic wear alterations, door to door tailoring',
  baseUrl: 'https://mrfinisher.com',
  ogImage: '/og-image.jpg',
};

export const SEO = ({
  title,
  description = defaultMeta.description,
  keywords = defaultMeta.keywords,
  canonicalUrl,
  ogImage = defaultMeta.ogImage,
  ogType = 'website',
  structuredData,
}: SEOProps) => {
  const fullTitle = title 
    ? `${title} | ${defaultMeta.siteName}`
    : defaultMeta.title;
  
  const fullCanonicalUrl = canonicalUrl 
    ? `${defaultMeta.baseUrl}${canonicalUrl}`
    : defaultMeta.baseUrl;

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Mister Finisher',
    description: defaultMeta.description,
    url: defaultMeta.baseUrl,
    telephone: '+91-98765-43210',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jabalpur',
      addressRegion: 'Madhya Pradesh',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.1815',
      longitude: '79.9864',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '21:00',
    },
    priceRange: '₹₹',
    image: `${defaultMeta.baseUrl}${ogImage}`,
    sameAs: [],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Mister Finisher" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${defaultMeta.baseUrl}${ogImage}`} />
      <meta property="og:site_name" content={defaultMeta.siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${defaultMeta.baseUrl}${ogImage}`} />

      {/* Additional SEO */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="geo.region" content="IN-MP" />
      <meta name="geo.placename" content="Jabalpur" />
      <meta name="geo.position" content="23.1815;79.9864" />
      <meta name="ICBM" content="23.1815, 79.9864" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
