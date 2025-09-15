const monthYear = document.getElementById("month-year");
const daysContainer = document.getElementById("days");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const schedule = document.getElementById("schedule");
const scheduleTitle = document.getElementById("schedule-title");
const scheduleList = document.getElementById("schedule-list");

let date = new Date();

// Contoh data talent DJ
const jadwalData = {
  '2025-09-15': [
    { name: "Gisella Chen", venue: "Noya", avatar: "./user.png" },
    { name: "Deka", venue: "Alexa", avatar: "./user.png" },
    { name: "Ronald 3D", venue: "Whiterabit Gatsu", avatar: "./user.png" }
  ],
  '2025-09-16': [
    { name: "Verra V", venue: "Blackowl Serpong", avatar: "./user.png" },
    { name: "Putri Una", venue: "Ambyar Senayan", avatar: "./user.png" },
    { name: "Omo Kucrut", venue: "Ambyar Mag", avatar: "./user.png" },
    { name: "Judika", venue: "Livehouse Kemang", avatar: "./user.png" },
    { name: "Panda", venue: "Superhouse Satrio", avatar: "./user.png" },
    { name: "Maretta Dee", venue: "Lufre", avatar: "./user.png" }
  ],
  '2025-09-17': [
    { name: "Ari Lasso", venue: "Livehouse Gading", avatar: "./user.png" },
    { name: "Tenxi", venue: "Helens Gunawarman", avatar: "./user.png" },
    { name: "Moskilove", venue: "Mimi Pik", avatar: "./user.png" },
    { name: "Ade Govinda & Ikmal Tobing", venue: "Midaz", avatar: "./user.png" },
    { name: "Josiah", venue: "Delulu", avatar: "./user.png" },
    { name: "Package Collective", venue: "Bengkel", avatar: "./user.png" },
    { name: "Zaleefya", venue: "Pats", avatar: "./user.png" },
    { name: "Devarra", venue: "Vault", avatar: "./user.png" }
  ],
  '2025-09-18': [
    { name: "Moskilove", venue: "Blackowl PIK", avatar: "./user.png" },
    { name: "Ronald 3D", venue: "Blackowl Serpong", avatar: "./user.png" },
    { name: "For Revenge", venue: "Helens TJ Duren", avatar: "./user.png" },
    { name: "Adnan Veron", venue: "W Gatsu", avatar: "./user.png" },
    { name: "Dinar Candy", venue: "Ambyar Senopati", avatar: "./user.png" },
    { name: "Billy Taner", venue: "Lil Qbig", avatar: "./user.png" },
    { name: "Yaya", venue: "Livehouse Qbig", avatar: "./user.png" },
    { name: "Aloy", venue: "Big Brother Kemang", avatar: "./user.png" },
    { name: "Ada Band", venue: "Noya", avatar: "./user.png" },
    { name: "Echobee", venue: "Zoo", avatar: "./user.png" },
    { name: "Finish", venue: "Kode", avatar: "./user.png" },
    { name: "Devarra", venue: "Kala", avatar: "./user.png" }
  ],
  '2025-09-19': [
    { name: "Bukan WG", venue: "Blackowl Gading", avatar: "./user.png" },
    { name: "Jayjax & Liquid Silva", venue: "Blackowl Serpong", avatar: "./user.png" },
    { name: "Essa Gobas", venue: "Ambyar Cikini", avatar: "./user.png" },
    { name: "Whisnu Santika", venue: "H Club", avatar: "./user.png" },
    { name: "Aloy, Nyxx, Sarah Ketaren", venue: "Lil Pik", avatar: "./user.png" },
    { name: "Steve Chris, Your Future Husband", venue: "Tiger Kemang", avatar: "./user.png" },
    { name: "Bebi Romeo", venue: "Midaz", avatar: "./user.png" },
    { name: "Ianmusick", venue: "Delulu", avatar: "./user.png" },
    { name: "Noka Axl", venue: "Twofold", avatar: "./user.png" },
    { name: "Sandhy Sandoro", venue: "Lufre", avatar: "./user.png" }
  ],
  '2025-09-20': [
    { name: "Tokio", venue: "Blackowl PIK", avatar: "./user.png" },
    { name: "Patricia Schuldtz", venue: "H Social", avatar: "./user.png" },
    { name: "Betsy Anastasia & Mela Garmela", venue: "Anthem", avatar: "./user.png" },
    { name: "Morten", venue: "Noya", avatar: "./user.png" },
    { name: "Kuaci Records", venue: "Whiterabit Gatsu", avatar: "./user.png" },
    { name: "Sarah Ketaren", venue: "Mantra", avatar: "./user.png" },
    { name: "Herjunot Ali", venue: "Lavva", avatar: "./user.png" },
    { name: "Noka Axl, Omo Kucrut, Rey Limitless", venue: "Bengkel", avatar: "./user.png" },
    { name: "Pia D & Irish Nova", venue: "Kode", avatar: "./user.png" },
    { name: "Cyda", venue: "Kala", avatar: "./user.png" },
    { name: "Lenn", venue: "Lufre", avatar: "./user.png" },
    { name: "Wyntella", venue: "Camden Sunter", avatar: "./user.png" },
    { name: "Devarra", venue: "AM Lounge", avatar: "./user.png" }
  ],
  '2025-09-21': [
    { name: "DNA & Tokio", venue: "Lil Qbig", avatar: "./user.png" },
    { name: "Alka Flow", venue: "Sparta", avatar: "./user.png" }
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
      const tgl = this.getAttribute('data-date');
      showSchedule(tgl);
    });
  });
}

function showSchedule(dateStr) {
  schedule.style.display = 'block';
  // Format tanggal ke "Talent Schedule - Selasa, 16 September 2025"
  const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  const [year, month, day] = dateStr.split('-');
  const tglObj = new Date(Number(year), Number(month)-1, Number(day));
  const hariStr = hari[tglObj.getDay()];
  const bulanStr = bulan[tglObj.getMonth()];
  const tglStr = `${hariStr}, ${Number(day)} ${bulanStr} ${year}`;
  scheduleTitle.innerHTML = `Talent Schedule <br> ${tglStr}`;
  scheduleList.innerHTML = "";
  if (jadwalData[dateStr]) {
    jadwalData[dateStr].forEach(talent => {
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
  } else {
    scheduleList.innerHTML = '<div class="no-talent">Tidak ada talent yang tampil</div>';
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
