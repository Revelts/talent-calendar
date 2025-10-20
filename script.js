const monthYear = document.getElementById("month-year");
const daysContainer = document.getElementById("days");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const schedule = document.getElementById("schedule");
const scheduleTitle = document.getElementById("schedule-title");
const scheduleList = document.getElementById("schedule-list");
const selectedDisplay = document.getElementById("selected-display");

let date = new Date();

// Contoh data talent DJ
const jadwalData = {
  '2025-10-22': [
    { name: "Roni Joni", venue: "📍FOS", avatar: "./assets/ronijoni.png" },
    { name: "Panda", venue: "📍NOYA", avatar: "./assets/panda.png" },
    { name: "Sarah Ketaren & Trizha Harun", venue: "📍LAVVA", avatar: "./assets/lavva.png" },
    { name: "Naughty Grooves", venue: "📍KALA", avatar: "./assets/kala.png" },
    { name: "Fidello & Kim", venue: "📍KODE", avatar: "./assets/kode.png" },
    { name: "Alka Flow", venue: "📍BABLAS SERPONG", avatar: "./assets/alkaflow.png" },
    { name: "Putri Una", venue: "📍W GATSU", avatar: "./assets/putriuna.png" },
    { name: "Yasmin", venue: "📍H CLUB", avatar: "./assets/yasmin.png" }
  ],
  '2025-10-23': [
    { name: "Deka", venue: "📍BLACKOWL SERPONG", avatar: "./assets/deka.png" },
    { name: "Nathalie Adelia", venue: "📍FOS", avatar: "./assets/nathalie.png" },
    { name: "Yovie & Nuno", venue: "📍NOYA", avatar: "./assets/noya.png" },
    { name: "Bravy & Keebo", venue: "📍BLACK ANGEL", avatar: "./assets/blackangel.png" },
    { name: "Bobby Suryadi", venue: "📍MIDAZ", avatar: "./assets/midaz.png" },
    { name: "Maliq & D'Essentials", venue: "📍AM LOUNGE", avatar: "./assets/amlounge.png" },
    { name: "Noka Axl", venue: "📍SPARTA", avatar: "./assets/noka.png" },
    { name: "Guyon Waton", venue: "📍AMBYAR CIKINI", avatar: "./assets/ambyar.png" },
    { name: "J'Rocks", venue: "📍HELENS TJ DUREN", avatar: "./assets/helens.png" },
    { name: "Marcello Tahitoe", venue: "📍HELENS SUNTER", avatar: "./assets/helens.png" },
    { name: "Yugi", venue: "📍H SOCIAL", avatar: "./assets/hsocial.png" }
  ],
  '2025-10-24': [
    { name: "Whisnu Santika", venue: "📍BLACKOWL PIK", avatar: "./assets/whisnu.png" },
    { name: "Noka Axl", venue: "📍BLACKOWL GADING", avatar: "./assets/noka.png" },
    { name: "Winky Wiryawan", venue: "📍BLACKOWL SERPONG", avatar: "./assets/blackowl.png" },
    { name: "Aloy & Jayjax", venue: "📍BENGKEL", avatar: "./assets/bengkel.png" },
    { name: "Dipha Barus", venue: "📍FYNE", avatar: "./assets/fyne.png" },
    { name: "Herjunot Ali", venue: "📍LAVVA", avatar: "./assets/herjunot.png" },
    { name: "Judika", venue: "📍MIDAZ", avatar: "./assets/judika.png" },
    { name: "Nathalie Adelia", venue: "📍CHAOCHAO", avatar: "./assets/nathalie.png" },
    { name: "Alter Ego", venue: "📍KALA", avatar: "./assets/alterego.png" },
    { name: "Essa Gobas", venue: "📍AMBYAR SENOPATI", avatar: "./assets/ambyar.png" }
  ],
  '2025-10-25': [
    { name: "Ian Musick", venue: "📍BLACKOWL GADING", avatar: "./assets/blackowl.png" },
    { name: "Omo Kucrut", venue: "📍BENGKEL", avatar: "./assets/omokucrut.png" },
    { name: "Alter JKT", venue: "📍FOS", avatar: "./assets/fos.png" },
    { name: "Winky Wiryawan", venue: "📍MANTRA", avatar: "./assets/mantra.png" },
    { name: "Katty Butterfly", venue: "📍EMPEROR", avatar: "./assets/emperor.png" },
    { name: "Misslee", venue: "📍ANTHEM", avatar: "./assets/anthem.png" },
    { name: "Bravy", venue: "📍MIDAZ", avatar: "./assets/bravy.png" },
    { name: "Kuaci Records", venue: "📍WHITERABBIT GATSU", avatar: "./assets/kuaci.png" }
  ],
  '2025-10-26': [
    { name: "Noka Axl", venue: "📍FOS", avatar: "./assets/noka.png" },
    { name: "Alka Flow", venue: "📍SPARTA", avatar: "./assets/alkaflow.png" }
  ]
};


function pad(n) {
  return n < 10 ? '0' + n : n;
}

function renderCalendar() {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const months = [
    "Januari","Februari","Maret","April","Mei","Juni",
    "Juli","Agustus","September","Oktober","November","Desember"
  ];

  monthYear.textContent = `${months[month]} ${year}`;
  daysContainer.innerHTML = "";

  // Buat spasi sebelum tanggal 1
  for (let i = 0; i < firstDay; i++) {
    daysContainer.innerHTML += `<div class=\"empty\"></div>`;
  }

  // Generate tanggal
  for (let d = 1; d <= lastDate; d++) {
    const today = new Date();
    const isToday = d === today.getDate() &&
                    month === today.getMonth() &&
                    year === today.getFullYear();

    const dayDate = `${year}-${pad(month+1)}-${pad(d)}`;
    const hasSchedule = jadwalData[dayDate];

    daysContainer.innerHTML += `<div class=\"day ${isToday ? "today" : ""} ${hasSchedule ? "has-schedule" : ""}\" data-date=\"${dayDate}\">${d}</div>`;
  }

  // Tambahkan event listener untuk setiap tanggal
  document.querySelectorAll('.day').forEach(day => {
    day.addEventListener('click', function() {
      // toggle selected state
      document.querySelectorAll('.day.selected').forEach(el => el.classList.remove('selected'));
      this.classList.add('selected');
      const tgl = this.getAttribute('data-date');
      updateSelectedDisplay(tgl);
      showSchedule(tgl);
    });
  });
}

let currentPage = 1;
const itemsPerPage = 5;

function showSchedule(dateStr) {
  schedule.style.display = 'block';
  currentPage = 1; // reset ke halaman 1 setiap klik tanggal

  // Format tanggal ke "Talent Schedule - Selasa, 16 September 2025"
  const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  const [year, month, day] = dateStr.split('-');
  const tglObj = new Date(Number(year), Number(month)-1, Number(day));
  const hariStr = hari[tglObj.getDay()];
  const bulanStr = bulan[tglObj.getMonth()];
  const tglStr = `${hariStr}, ${Number(day)} ${bulanStr} ${year}`;
  scheduleTitle.innerHTML = `Talent Schedule <br> ${tglStr}`;

  renderScheduleList(dateStr, currentPage);
}

function updateSelectedDisplay(dateStr) {
  if (!selectedDisplay) return;
  const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const [year, month, day] = dateStr.split('-');
  const tglObj = new Date(Number(year), Number(month) - 1, Number(day));
  const hariStr = hari[tglObj.getDay()];
  selectedDisplay.innerHTML = `
    <div class='selected-number'>${Number(day)}</div>
    <div class='selected-day-name'>${hariStr}</div>
  `;
}

function renderScheduleList(dateStr, page) {
  scheduleList.innerHTML = "";
  const data = jadwalData[dateStr] || [];
  if (data.length === 0) {
    scheduleList.innerHTML = '<div class="no-talent">Tidak ada talent yang tampil</div>';
    return;
  }

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedData = data.slice(start, end);

  paginatedData.forEach(talent => {
    const div = document.createElement('div');
    div.className = 'talent-item';
    div.innerHTML = `
      <img class='talent-avatar' alt='${talent.name}'>
      <div class='talent-info'>
        <div class='talent-name'>${talent.name}</div>
        <div class='talent-venue'>${talent.venue}</div>
      </div>
    `;
    const imgEl = div.querySelector('.talent-avatar');
    const avatarSrc = talent.avatar || null;
    if (avatarSrc) {
      imgEl.setAttribute('src', avatarSrc);
    } else {
      imgEl.removeAttribute('src');
    }
    scheduleList.appendChild(div);
  });

  // Pagination controls
  const totalPages = Math.ceil(data.length / itemsPerPage);
  if (totalPages > 1) {
    const pagination = document.createElement('div');
    pagination.className = 'pagination';

    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Prev';
    prevBtn.disabled = page === 1;
    prevBtn.addEventListener('click', () => {
      currentPage--;
      renderScheduleList(dateStr, currentPage);
    });

    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.disabled = page === totalPages;
    nextBtn.addEventListener('click', () => {
      currentPage++;
      renderScheduleList(dateStr, currentPage);
    });

    const pageInfo = document.createElement('span');
    pageInfo.textContent = `${page}/${totalPages}`;
    pageInfo.style.fontWeight = '500';

    pagination.appendChild(prevBtn);
    pagination.appendChild(pageInfo);
    pagination.appendChild(nextBtn);

    scheduleList.appendChild(pagination);
  }
}

prevBtn.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
  schedule.style.display = 'none';
});

nextBtn.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
  schedule.style.display = 'none';
});

// Sembunyikan jadwal di awal
schedule.style.display = 'none';
renderCalendar();
// Initialize selected display with today
(function initSelectedToToday(){
  const today = new Date();
  const dateStr = `${today.getFullYear()}-${pad(today.getMonth()+1)}-${pad(today.getDate())}`;
  updateSelectedDisplay(dateStr);
})();
