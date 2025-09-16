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
  '2025-09-15': [
    { name: "Gisella Chen", venue: "📍 Noya", avatar: "./assets/noya.png" },
    { name: "Deka", venue: "📍 Alexa", avatar: "./assets/deka.png" },
    { name: "Ronald 3D", venue: "📍 Whiterabit Gatsu", avatar: "./assets/ronald3d.png" }
  ],
  '2025-09-16': [
    { name: "Verra V", venue: "📍 Blackowl Serpong", avatar: "./assets/verrav.png" },
    { name: "Putri Una", venue: "📍 Ambyar Senayan", avatar: "./assets/putriuna.png" },
    { name: "Omo Kucrut", venue: "📍 Ambyar Mag", avatar: "./assets/omokucrut.png" },
    { name: "Judika", venue: "📍 Livehouse Kemang", avatar: "./assets/judika.png" },
    { name: "Panda", venue: "📍 Superhouse Satrio", avatar: "./assets/panda.png" },
    { name: "Maretta Dee", venue: "📍 Lufre", avatar: "./assets/marettadee.png" }
  ],
  '2025-09-17': [
    { name: "Ari Lasso", venue: "📍 Livehouse Gading", avatar: "./assets/arilasso.png" },
    { name: "Tenxi", venue: "📍 Helens Gunawarman", avatar: "./assets/tenxi.png" },
    { name: "Moskilove", venue: "📍 Mimi Pik", avatar: "./assets/moskilove.png" },
    { name: "Ade Govinda & Ikmal Tobing", venue: "📍 Midaz", avatar: "./assets/adeikmal.png" },
    { name: "Josiah", venue: "📍 Delulu", avatar: "./assets/josiah.png" },
    { name: "Package Collective", venue: "📍 Bengkel", avatar: "./assets/package.png" },
    { name: "Zaleefya", venue: "📍 Pats", avatar: "./assets/zaleefya.png" },
    { name: "Devarra", venue: "📍 Vault", avatar: "./assets/devarra.png" },
    { name: "Acid Line Eve", venue: "📍 Kala", avatar: "./assets/kala.png" },
    { name: "Jiggy, Oggie", venue: "📍 Kode", avatar: "./assets/kode.png" },
    { name: "Hizkia, Echobee, Davva, Phatstraw", venue: "📍 Encore", avatar: "./assets/encore.png" },
    { name: "Iara", venue: "📍 Blackowl PIK", avatar: "./assets/blackowl.png" }
  ],
  '2025-09-18': [
    { name: "Moskilove", venue: "📍 Blackowl PIK", avatar: "./assets/moskilove.png" },
    { name: "Ronald 3D", venue: "📍 Blackowl Serpong", avatar: "./assets/ronald3d.png" },
    { name: "For Revenge", venue: "📍 Helens TJ Duren", avatar: "./assets/helens.png" },
    { name: "Adnan Veron", venue: "📍 W Gatsu", avatar: "./assets/adnanveron.png" },
    { name: "Dinar Candy", venue: "📍 Ambyar Senopati", avatar: "./assets/dinarcandy.png" },
    { name: "Billy Taner", venue: "📍 Lil Qbig", avatar: "./assets/billytanner.png" },
    { name: "Yaya", venue: "📍 Livehouse Qbig", avatar: "./assets/yasmin.png" },
    { name: "Aloy", venue: "📍 Big Brother Kemang", avatar: "./assets/aloy.png" },
    { name: "Ada Band", venue: "📍 Noya", avatar: "./assets/adaband.png" },
    { name: "Echobee", venue: "📍 Zoo", avatar: "./assets/zoo.png" },
    { name: "Finish, Rully, Reno", venue: "📍 Kode", avatar: "./assets/kode.png" },
    { name: "Devarra, Josiah", venue: "📍 Kala", avatar: "./assets/devarrajos.png" },
    { name: "Fadlie", venue: "📍 AM Lounge", avatar: "./assets/amlounge.png" },
    { name: "Hizkia, WW", venue: "📍 Cloud Lounge", avatar: "./assets/cloud.png" }
  ],
  '2025-09-19': [
    { name: "Bukan WG", venue: "📍 Blackowl Gading", avatar: "./assets/bukanwg.png" },
    { name: "Jayjax & Liquid Silva", venue: "📍 Blackowl Serpong", avatar: "./assets/blackowl.png" },
    { name: "Essa Gobas", venue: "📍 Ambyar Cikini", avatar: "./assets/ambyar.png" },
    { name: "Whisnu Santika", venue: "📍 H Club", avatar: "./assets/whisnu.png" },
    { name: "Aloy, Nyxx, Sarah Ketaren", venue: "📍 Lil Pik", avatar: "./assets/liltiger.png" },
    { name: "Steve Chris, Your Future Husband", venue: "📍 Tiger Kemang", avatar: "./assets/goldentiger.png" },
    { name: "Bebi Romeo", venue: "📍 Midaz", avatar: "./assets/bebiromeo.png" },
    { name: "Ianmusick", venue: "📍 Delulu", avatar: "./assets/ianmusick.png" },
    { name: "Noka Axl", venue: "📍 Twofold", avatar: "./assets/noka.png" },
    { name: "Sandhy Sandoro", venue: "📍 Lufre", avatar: "./assets/lufre.png" },
    { name: "Bravy", venue: "📍 Brotherhood", avatar: "./assets/bravy.png" },
    { name: "Krevasse, Makimoeis", venue: "📍 BOF", avatar: "./assets/bof.png" },
    { name: "Prince K", venue: "📍 Mantra", avatar: "./assets/mantra.png" },
    { name: "Remy Irwan", venue: "📍 Kode", avatar: "./assets/kode.png" },
    { name: "Kaell", venue: "📍 Lyn Pik", avatar: "./assets/kaell.png" },
    { name: "Syndromatic, RWN, Rongkie", venue: "📍 AM Lounge", avatar: "./assets/amlounge.png" },
    { name: "Evangelos, Brooky", venue: "📍 Kala", avatar: "./assets/kala.png" }
  ],
  '2025-09-20': [
    { name: "Tokio", venue: "📍 Blackowl PIK", avatar: "./assets/blackowl.png" },
    { name: "Patricia Schuldtz", venue: "📍 H Social", avatar: "./assets/patricia.png" },
    { name: "Betsy Anastasia & Mela Garmela", venue: "📍 Anthem", avatar: "./assets/betsy.png" },
    { name: "Morten", venue: "📍 Noya", avatar: "./assets/morten.png" },
    { name: "Kuaci Records", venue: "📍 Whiterabit Gatsu", avatar: "./assets/kuaci.png" },
    { name: "Sarah Ketaren", venue: "📍 Mantra", avatar: "./assets/sarahketaren.png" },
    { name: "Herjunot Ali", venue: "📍 Lavva", avatar: "./assets/herjunot.png" },
    { name: "Noka Axl, Omo Kucrut, Rey Limitless", venue: "📍 Bengkel", avatar: "./assets/bengkel.png" },
    { name: "Pia D & Irish Nova", venue: "📍 Kode", avatar: "./assets/kode.png" },
    { name: "Cyda", venue: "📍 Kala", avatar: "./assets/kala.png" },
    { name: "Lenn", venue: "📍 Lufre", avatar: "./assets/lufre.png" },
    { name: "Wyntella", venue: "📍 Camden Sunter", avatar: "./assets/wyntella.png" },
    { name: "Devarra", venue: "📍 AM Lounge", avatar: "./assets/devarra.png" },
    { name: "Techno Movement Asia", venue: "📍 Kita Bar", avatar: "./assets/kita.png" },
    { name: "Fadlie", venue: "📍 Nineteen", avatar: "./assets/nineteen.png" },
    { name: "Kimm", venue: "📍 Midaz", avatar: "./assets/midaz.png" }
  ],
  '2025-09-21': [
    { name: "DNA & Tokio", venue: "📍 Lil Qbig", avatar: "./assets/liltiger.png" },
    { name: "Alka Flow", venue: "📍 Sparta", avatar: "./assets/alkaflow.png" },
    { name: "Iara", venue: "📍 Blackowl Serpong", avatar: "./assets/blackowl.png" }
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
