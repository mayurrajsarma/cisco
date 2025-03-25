import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "ztvimmqg", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name (default is "production")
  apiVersion: "2023-01-01", // Use the latest API version
  useCdn: true, // `true` for faster responses (cached), `false` if you need fresh data
});

export default client;