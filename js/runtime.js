setInterval(() => {
  let create_time = Math.round(new Date('2025-06-13 06:41:30').getTime() / 1000);
  let timestamp = Math.round((new Date().getTime()) / 1000);
  let second = timestamp - create_time;
  let time = new Array(0, 0, 0, 0, 0);

  const nol = (h) => h > 9 ? h : '0' + h;

  if (second >= 365 * 24 * 3600) {
    time[0] = parseInt(second / (365 * 24 * 3600));
    second %= 365 * 24 * 3600;
  }
  if (second >= 24 * 3600) {
    time[1] = parseInt(second / (24 * 3600));
    second %= 24 * 3600;
  }
  if (second >= 3600) {
    time[2] = nol(parseInt(second / 3600));
    second %= 3600;
  }
  if (second >= 60) {
    time[3] = nol(parseInt(second / 60));
    second %= 60;
  }
  if (second > 0) {
    time[4] = nol(second);
  }

  let currentTimeHtml = "";
  if ((Number(time[2]) < 22) && (Number(time[2]) > 7)) {
    currentTimeHtml =
      "<img class='boardsign' src='https://img.shields.io/badge/糖果屋-营业中-6adea8?style=social&logo=cakephp' title='距离百年老店也就差不到一百年~'>" +
      "<div id='runtime'>" + time[0] + " YEAR " + time[1] + " DAYS " + time[2] + " : " + time[3] + " : " + time[4] + "</div>";
  } else {
    currentTimeHtml =
      "<img class='boardsign' src='https://img.shields.io/badge/糖果屋-打烊了-6adea8?style=social&logo=coffeescript' title='这个点了应该去睡觉啦，熬夜对身体不好哦'>" +
      "<div id='runtime'>" + time[0] + " YEAR " + time[1] + " DAYS " + time[2] + " : " + time[3] + " : " + time[4] + "</div>";
  }

  const workboard = document.getElementById("workboard");
  if (workboard) {
    workboard.innerHTML = currentTimeHtml;
    // 强制清除视觉背景效果
    workboard.style.backgroundColor = "transparent";
    workboard.style.border = "none";
    workboard.style.boxShadow = "none";
  }
}, 1000);
