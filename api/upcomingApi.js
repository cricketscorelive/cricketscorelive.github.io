import { API_URLS } from "../config/urls.js";

export async function getMatches() {
  const res = await fetch(API_URLS.UPCOMING_MATCHES);
  if (!res.ok) throw new Error("Network error");
  return await res.json();
}
