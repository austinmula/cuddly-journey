import { Category } from "@/models/category";
import { Product } from "@/models/product";
import { urlFor } from "@/lib/urlFor";

interface CategorySchemaProps {
  category: Category;
  products: Product[];
}

const CategorySchema = ({ category, products }: CategorySchemaProps) => {
  const categoryUrl = `https://sharpspaceltd.com/mini-shop/${category.slug.current}`;
  const categoryImage = category.image
    ? urlFor(category.image).url()
    : undefined;

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://sharpspaceltd.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Shop",
        item: "https://sharpspaceltd.com/shop",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.title,
        item: categoryUrl,
      },
    ],
  };

  // CollectionPage Schema
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.title} - SharpSpaceLtd`,
    description: `Browse our collection of ${category.title.toLowerCase()} products at SharpSpaceLtd. Find quality tech products with fast delivery in Kenya.`,
    url: categoryUrl,
    ...(categoryImage && { image: categoryImage }),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.slice(0, 10).map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.title,
          url: `https://sharpspaceltd.com/product-details/${product.slug.current}`,
          image: product.images?.[0]
            ? urlFor(product.images[0]).url()
            : undefined,
          ...(product.brand && {
            brand: {
              "@type": "Brand",
              name: product.brand,
            },
          }),
          offers: {
            "@type": "Offer",
            price: product.discountedPrice || product.price,
            priceCurrency: "KES",
            availability:
              product.stock > 0
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
            url: `https://sharpspaceltd.com/product-details/${product.slug.current}`,
          },
        },
      })),
    },
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SharpSpaceLtd",
    url: "https://sharpspaceltd.com",
    logo: "https://sharpspaceltd.com/images/logo/logo.svg",
    sameAs: [
      "https://www.facebook.com/SharpSpaceLtd",
      "https://twitter.com/SharpSpaceLtd",
      "https://www.instagram.com/SharpSpaceLtd",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254-732-652000",
      contactType: "Customer Service",
      areaServed: "KE",
      availableLanguage: ["English", "Swahili"],
    },
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SharpSpaceLtd",
    url: "https://sharpspaceltd.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://sharpspaceltd.com/shop?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default CategorySchema;
