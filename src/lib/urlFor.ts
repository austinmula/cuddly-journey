import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "./sanity"; // Import the configured Sanity client

const builder = imageUrlBuilder(sanityClient);

// Export function that returns the builder object for chaining
export function urlFor(source: any) {
  if (!source) {
    console.warn("Missing image source:", source);
    return builder.image({} as any); // Return builder with empty object to maintain chainability
  }
  return builder.image(source);
}
