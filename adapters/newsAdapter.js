// adapters/newsAdapter.js
export function NewsSliderAdapter(list) {
  window.homeNews = list; // store for click handler

  return list.map((item, index) => `
    <div class="news-slide" onclick="openNewsDetails(${index})">
      <img src="${item.banner}" alt="${item.title}">
      <div class="slide-title">${item.title}</div>
    </div>
  `).join("");
}

// click handler
window.openNewsDetails = function(position) {
  const bundle = {
    POSITION: position,
    ARTICLE: window.homeNews[position],
    ARTICLES: window.homeNews
  };
  sessionStorage.setItem("ARTICLE_BUNDLE", JSON.stringify(bundle));
  window.location.href = "article-details.html";
}
