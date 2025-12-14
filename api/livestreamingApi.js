import { API_URLS } from "../config/urls.js";

export async function getLiveStreams() {
  const response = await fetch(API_URLS.LIVE_STREAMING);
  return await response.json();
}
