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

function buildTeamDisplay(teamId, inningsByTeam) {
  if (!teamId || !inningsByTeam[teamId]) return "";
  return inningsByTeam[teamId].join(" & ");
}

function groupInningsByTeam(innings = []) {
  const map = {};

  innings.forEach(inn => {
    if (!inn) return;

    const teamId = inn.BattingTeamId;
    const runsWickets = `${inn.RunsScored}-${inn.NumberOfWicketsFallen}`;

    if (!map[teamId]) map[teamId] = [];
    map[teamId].push(runsWickets);
  });

  return map;
}

export function LiveAdapter(list) {

  window.upcomingMatches = list; // like adapter data

  return list.map((item, pos) => {

    const inningsByTeam = groupInningsByTeam(item.Innings || []);

    const homeId = item.HomeTeam?.Id;
    const awayId = item.AwayTeam?.Id;

    const homeScore = buildTeamDisplay(homeId, inningsByTeam);
    const awayScore = buildTeamDisplay(awayId, inningsByTeam);

    return `
<div class="cardview" onclick="openMatchDetails(${pos})">
  <div class="card-inner">

    <div class="txtCompleted">LIVE</div>

    <div class="series-row">
      <div class="series-name">
        ${(item.Competition?.Name || "")} ${(item.Name || "")}
      </div>
      <div class="arrow"></div>
    </div>

    <div class="venue-rel">
      <div class="pill venue-type">${item.GameType || ""}</div>
      <div class="pill venue-name">${item.Venue?.Name || ""}</div>
    </div>

    <!-- Team 1 -->
    <div class="team-row">
      <div class="team-left">
        <img src="${item.HomeTeam?.LogoUrl || ""}">
        <span>${item.HomeTeam?.ShortName || ""}</span>
      </div>
      <div class="team-score">${homeScore}</div>
    </div>

    <!-- Team 2 -->
    <div class="team-row">
      <div class="team-left">
        <img src="${item.AwayTeam?.LogoUrl || ""}">
        <span>${item.AwayTeam?.ShortName || ""}</span>
      </div>
      <div class="team-score">${awayScore}</div>
    </div>

    <div class="match-result">
      ${item.ResultText || ""}
    </div>

  </div>
</div>
`;
  }).join("");
}
