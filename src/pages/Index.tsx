import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";

const servicesStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Mister Finisher',
  description: 'Professional door-to-door clothing alteration and tailoring services in Jabalpur',
  url: 'https://mrfinisher.lovable.app',
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
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Alteration Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pants Alteration', description: 'Professional pants fitting and hemming' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shirt Alteration', description: 'Expert shirt tailoring and fitting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dress Alteration', description: 'Dress resizing and modifications' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kurti Alteration', description: 'Traditional kurti alterations' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Blazer Alteration', description: 'Blazer and suit alterations' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ethnic Wear Alteration', description: 'Sherwanis, kurtas, and ethnic wear' } },
    ],
  },
};

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        canonicalUrl="/home"
        structuredData={servicesStructuredData}
      />
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
