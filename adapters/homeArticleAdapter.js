/**
 * Click handler (Article open)
 */
window.openArticleDetails = function (position) {

  const bundle = {
    POSITION: position,
    ARTICLE: window.homeArticles[position],
    ARTICLES: window.homeArticles
  };

  sessionStorage.setItem(
    "ARTICLE_BUNDLE",
    JSON.stringify(bundle)
  );

  window.location.href = "article-details.html";
};

/**
 * Adapter (RecyclerView equivalent)
 */
export function HomeArticleAdapter(list) {

  window.homeArticles = list;

  return list.map((item, pos) => `
    <div class="article-card" onclick="openArticleDetails(${pos})">

      <img
        class="article-image"
        src="${item.banner}"
        alt="article"
      />

      <div class="article-text">
        ${item.title}
      </div>

    </div>
  `).join("");
}