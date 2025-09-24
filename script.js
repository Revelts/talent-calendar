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
  '2025-09-23': [
    { name: "Putri Una", venue: "📍 Ambyar Mag", avatar: "./assets/putriuna.png" },
    { name: "Yaya", venue: "📍 Helens Gunawarman", avatar: "./assets/yasmin.png" },
    { name: "Verra V", venue: "📍 Lufre", avatar: "./assets/verrav.png" },
    { name: "Breakin Bounce", venue: "📍 Mantra", avatar: "./assets/mantra.png" }
  ],
  '2025-09-24': [
    { name: "Wyntella", venue: "📍 Blackowl PIK", avatar: "./assets/blackowl.png" },
    { name: "Revive Vol 21", venue: "📍 Helens Epicentrum", avatar: "./assets/helens.png" },
    { name: "For Revenge", venue: "📍 Livehouse Kemang", avatar: "./assets/livehouse.png" },
    { name: "East Blake & HBRP", venue: "📍 Lavva", avatar: "./assets/lavva.png" },
    { name: "Ada Band", venue: "📍 AM Lounge", avatar: "./assets/adaband.png" },
    { name: "Noka Axl", venue: "📍 Mantra", avatar: "./assets/noka.png" },
    { name: "Kimm, Fidello", venue: "📍 Kode", avatar: "./assets/kode.png" },
    { name: "Syncopia", venue: "📍 Kala", avatar: "./assets/kala.png" },
    { name: "Hizkia, Davva", venue: "📍 Encore", avatar: "./assets/encore.png" },
    { name: "Kiith Live", venue: "📍 Nika", avatar: "./assets/kiith.png" }
  ],
  '2025-09-25': [
    { name: "Bobby Suryadi", venue: "📍 Blackowl PIK", avatar: "./assets/blackowl.png" },
    { name: "Noka Axl", venue: "📍 Blackowl Gading", avatar: "./assets/noka.png" },
    { name: "Barasuara & Nadhif", venue: "📍 Bengkel", avatar: "./assets/bengkel.png" },
    { name: "Bull", venue: "📍 Lil Tiger PIK", avatar: "./assets/liltiger.png" },
    { name: "Yaya", venue: "📍 Livehouse Gading", avatar: "./assets/yasmin.png" },
    { name: "Winky Wiryawan", venue: "📍 Helens Gunawarman", avatar: "./assets/helens.png" },
    { name: "Omo Kucrut", venue: "📍 Livehouse Qbig", avatar: "./assets/omokucrut.png" },
    { name: "Ghea Indrawari", venue: "📍 Noya", avatar: "./assets/noya.png" },
    { name: "Arsyih Idrak", venue: "📍 Brotherhood", avatar: "./assets/arsyih.png" },
    { name: "Echobee", venue: "📍 Zoo", avatar: "./assets/zoo.png" },
    { name: "Bravy", venue: "📍 Delulu", avatar: "./assets/bravy.png" },
    { name: "Josiah", venue: "📍 Kala", avatar: "./assets/kala.png" },
    { name: "Naughty Grooves", venue: "📍 Kode", avatar: "./assets/kode.png" },
    { name: "Kaell", venue: "📍 AM Lounge", avatar: "./assets/amlounge.png" },
    { name: "Alkimia", venue: "📍 BOF", avatar: "./assets/bof.png" },
    { name: "Dipha Barus", venue: "📍 The Great Gatsby", avatar: "./assets/dipha.png" },
    { name: "Techno Movement Asia", venue: "📍 Twofold", avatar: "./assets/twofold.png" },
    { name: "Batara, Wedatron, 39 Degrees", venue: "📍 Pelaga Lounge", avatar: "./assets/batara.png" },
    { name: "Kiith Live", venue: "📍 Fifty Six", avatar: "./assets/kiith.png" },
    { name: "Ajun Perwira", venue: "📍 Black Angel", avatar: "./assets/blackangel.png" }
  ],
  '2025-09-26': [
    { name: "Adnan Veron", venue: "📍 Blackowl Gading", avatar: "./assets/adnanveron.png" },
    { name: "Nathalie Adelia", venue: "📍 Blackowl PIK", avatar: "./assets/blackowl.png" },
    { name: "Ungu Band", venue: "📍 Blackowl Serpong", avatar: "./assets/blackowl.png" },
    { name: "Trilogy", venue: "📍 Bengkel", avatar: "./assets/bengkel.png" },
    { name: "Whisnu Santika", venue: "📍 Tiger Kemang", avatar: "./assets/goldentiger.png" },
    { name: "Sick Individuals", venue: "📍 H Club", avatar: "./assets/hclub.png" },
    { name: "Tujamo", venue: "📍 Noya", avatar: "./assets/tujamo.png" },
    { name: "Noka Axl", venue: "📍 Twofold", avatar: "./assets/noka.png" },
    { name: "Alka Flow", venue: "📍 Sparta", avatar: "./assets/alkaflow.png" },
    { name: "Greytha", venue: "📍 Mantra", avatar: "./assets/mantra.png" },
    { name: "Devarra", venue: "📍 ChaoChao", avatar: "./assets/devarra.png" },
    { name: "Ianmusick", venue: "📍 Nu China", avatar: "./assets/ianmusick.png" },
    { name: "Alter Ego", venue: "📍 Kala", avatar: "./assets/kala.png" },
    { name: "Shammui", venue: "📍 Kode", avatar: "./assets/kode.png" },
    { name: "Clubhoppers & Triple Decker", venue: "📍 AM Lounge", avatar: "./assets/amlounge.png" }
  ],
  '2025-09-27': [
    { name: "Misslee", venue: "📍 Blackowl PIK", avatar: "./assets/blackowl.png" },
    { name: "Maretta", venue: "📍 Blackowl Serpong", avatar: "./assets/blackowl.png" },
    { name: "Berlin & Derina Derin", venue: "📍 Bengkel", avatar: "./assets/bengkel.png" },
    { name: "Duckhead", venue: "📍 Fyne", avatar: "./assets/duckhead.png" },
    { name: "Alka Flow", venue: "📍 FOS", avatar: "./assets/alkaflow.png" },
    { name: "Egnever", venue: "📍 LTX SCBD", avatar: "./assets/egnever.png" },
    { name: "Herjunot Ali & Bobby Suryadi", venue: "📍 Lavva", avatar: "./assets/lavva.png" },
    { name: "YB (Arap)", venue: "📍 Alexa", avatar: "./assets/yb.png" },
    { name: "Steve Levi", venue: "📍 AM Lounge", avatar: "./assets/amlounge.png" },
    { name: "Kuaci Records", venue: "📍 Whiterabit Gatsu", avatar: "./assets/kuaci.png" },
    { name: "P Joana", venue: "📍 Lufre", avatar: "./assets/lufre.png" },
    { name: "Cyda, Davva, Oggie", venue: "📍 Noru", avatar: "./assets/noru.png" },
    { name: "Ris", venue: "📍 Midaz", avatar: "./assets/midaz.png" },
    { name: "Alter Ego", venue: "📍 Amethys", avatar: "./assets/alterego.png" },
    { name: "Arief Ayip", venue: "📍 Kode", avatar: "./assets/kode.png" },
    { name: "Robin Moeller & Pia D", venue: "📍 Kala", avatar: "./assets/kala.png" },
    { name: "B455", venue: "📍 Brotherhood", avatar: "./assets/bhg.png" },
    { name: "Yoga Sastra", venue: "📍 Nu China", avatar: "./assets/yoga.png" }
  ],
  '2025-09-28': [
    { name: "Noka Axl", venue: "📍 FOS", avatar: "./assets/noka.png" },
    { name: "Alka Flow", venue: "📍 Sparta", avatar: "./assets/alkaflow.png" },
    { name: "Keebo", venue: "📍 Camden Cikini", avatar: "./assets/keebo.png" },
    { name: "Kaell", venue: "📍 Bablas Kemang", avatar: "./assets/kaell.png" }
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
      <img class='talent-avatar' src='${talent.avatar}' alt='${talent.name}'>
      <div class='talent-info'>
        <div class='talent-name'>${talent.name}</div>
        <div class='talent-venue'>${talent.venue}</div>
      </div>
    `;
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
