import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: "blog-tutorial-next-js",
	apiKey: process.env.API_KEY,
})