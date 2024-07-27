import { createClient } from "next-sanity";

export default createClient({
  projectId: "3o7lx1bp",
  dataset: "production",
  apiVersion: "2024-07-10",
  token: "", // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});
