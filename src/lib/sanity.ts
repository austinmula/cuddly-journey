import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET as string,
  useCdn: process.env.NODE_ENV === "production",
});

export default sanityClient;

// import { createClient } from "@sanity/client";

// const client = createClient({
//   projectId: "your_project_id", // Replace with your actual project ID
//   dataset: "production",
//   useCdn: true, // Use CDN for faster response times
//   apiVersion: "2023-01-01",
// });

// export default client;
