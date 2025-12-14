window.openMatchDetails = function (position) {

  const bundle = {
    MATCHDATA: window.upcomingMatches[position],
    POSITION: position,
    MATCHDETAILS: window.upcomingMatches
  };

  // Save bundle in sessionStorage (Android Bundle equivalent)
  sessionStorage.setItem("MATCH_BUNDLE", JSON.stringify(bundle));

  // Navigate (like startActivity)
  window.location.href = "match-details.html";
};

/**
 * Adapter (RecyclerView equivalent)
 */
export function UpcomingAdapter(list) {

  window.upcomingMatches = list; // global list like adapter data

  return list.map((item, pos) => `
    <div class="cardview" onclick="openMatchDetails(${pos})">
      <div class="card-inner">

    <!-- txtCompleted -->
    <div class="txtCompleted">UPCOMING</div>

    <!-- Series row -->
    <div class="series-row">
      <div class="series-name">
        ${(item.Competition?.Name || "")} ${(item.Name || "")}
      </div>
      <div class="arrow"></div>
    </div>

    <!-- Venue RelativeLayout -->
    <div class="venue-rel">
      <div class="pill venue-type">
        ${item.GameType || ""}
      </div>
      <div class="pill venue-name">
        ${item.Venue?.Name || ""}
      </div>
    </div>

    <!-- Team 1 -->
    <div class="team-row">
      <div class="team-left">
        <img src="${item.HomeTeam?.LogoUrl || ""}">
        <span>${item.HomeTeam?.ShortName || ""}</span>
      </div>
      <div class="team-score"></div>
    </div>

    <!-- Team 2 -->
    <div class="team-row">
      <div class="team-left">
        <img src="${item.AwayTeam?.LogoUrl || ""}">
        <span>${item.AwayTeam?.ShortName || ""}</span>
      </div>
      <div class="team-score"></div>
    </div>

    <!-- Result -->
    <div class="match-result">
      ${item.ResultText || ""}
    </div>

  </div>
</div>
  `).join("");
}