import { API_URLS } from "../config/urls.js";

export async function getArticles() {
  const res = await fetch(API_URLS.ARTICLES);
  if (!res.ok) throw new Error("Network error");
  return await res.json();
}
