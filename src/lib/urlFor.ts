import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "./sanity"; // Import the configured Sanity client

const builder = imageUrlBuilder(sanityClient);

// export function urlFor(source: any) {
//   return builder.image(source)?.url() || "";
// }

export function urlFor(source: any) {
  if (!source) {
    console.warn("Missing image source:", source);
    return "";
  }
  return builder.image(source).url() || "";
}
