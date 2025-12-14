import { COLORS } from "../config/colors.js";

export function LiveStreamingAdapter(list, onItemClick) {
  return list.map(item => `
    <div class="card" onclick='window.open("${item.url}", "_blank")'>
      
      <div class="title">${item.title}</div>

      <div class="teams">
        <div class="team">
          <img src="${item.team1_img}" />
          <span>${item.team1}</span>
        </div>

        <div class="vs">VS</div>

        <div class="team">
          <img src="${item.team2_img}" />
          <span>${item.team2}</span>
        </div>
      </div>

      <div class="footer">
        <span class="live">LIVE</span>
        <span class="watch">WATCH NOW</span>
      </div>

    </div>
  `).join("");
}
