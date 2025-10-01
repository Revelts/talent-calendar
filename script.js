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
  '2025-10-01': [
    { name: "Techno Movement Asia", venue: "H CLUB", avatar: "./assets/hclub.png" }, // ada di jadwalData, ambil
    { name: "Maskara", venue: "HELENS TJ DUREN", avatar: "./assets/helens.png" },
    { name: "Pink Flamingo x JPS", venue: "TWOFOLD", avatar: "./assets/twofold.png" },
    { name: "Erga", venue: "FOS", avatar: "./assets/erga.png" },
    { name: "Wyntella", venue: "SPARTA", avatar: "./assets/wyntella.png" }, // ada di jadwalData (24), avatar → ./assets/blackowl.png
    { name: "Lost & Found", venue: "KALA", avatar: "./assets/kala.png" },
    { name: "Josiah & Mkhdfi", venue: "KODE", avatar: "./assets/josiah.png" }
  ],
  '2025-10-02': [
    { name: "Siva Aprilia", venue: "BLACKOWL PIK", avatar: "./assets/siva.png" },
    { name: "Greytha", venue: "BLACKOWL GADING", avatar: "./assets/greytha.png" }, // ada di jadwalData 26, avatar ./assets/mantra.png
    { name: "Ony", venue: "BLACKOWL SERPONG", avatar: "./assets/ony.png" },
    { name: "Kangen Band", venue: "LIVEHOUSE KEMANG", avatar: "./assets/livehouse.png" },
    { name: "Omo Kucrut", venue: "AMBYAR SENAYAN", avatar: "./assets/omokucrut.png" },
    { name: "Whisnu Santika", venue: "H CLUB", avatar: "./assets/whisnu.png" }, // jadwalData venue beda → tapi ada avatar
    { name: "Josiah, Alter Ego, Noka Axl", venue: "FOS", avatar: "./assets/fos.png" },
    { name: "Davva & Jiggy", venue: "KALA", avatar: "./assets/kala.png" },
    { name: "Tantra", venue: "KODE", avatar: "./assets/kode.png" },
    { name: "Candyflip, Osso, Finish", venue: "AM LOUNGE", avatar: "./assets/amlounge.png" },
    { name: "Batara & Junior Ori", venue: "PELAGA LOUNGE", avatar: "./assets/pelaga.png" }
  ],
  '2025-10-03': [
    { name: "Marlo", venue: "BLACKOWL PIK", avatar: "./assets/blackowl.png" },
    { name: "Putri Una", venue: "BLACKOWL SERPONG", avatar: "./assets/putriuna.png" },
    { name: "Sumbermakmurpalsu", venue: "NU CHINA", avatar: "./assets/nuchina.png" },
    { name: "Fidello & Hizkia", venue: "KALA", avatar: "./assets/kala.png" },
    { name: "Naro", venue: "AM LOUNGE", avatar: "./assets/amlounge.png" },
    { name: "Cyda", venue: "KODE", avatar: "./assets/kode.png" },
    { name: "LTN, Hime, Theo, Shiva", venue: "ENCORE", avatar: "./assets/encore.png" },
    { name: "Clubhoppers", venue: "TWOFOLD", avatar: "./assets/twofold.png" },
    { name: "Riina & Five Force", venue: "CHAOCHAO", avatar: "./assets/chaochao.png" },
    { name: "Hardbassbash", venue: "KRAPELA", avatar: "./assets/krapella.png" },
    { name: "Keyla", venue: "LUFRE", avatar: "./assets/lufre.png" },
    { name: "For Revenge", venue: "BBK", avatar: "./assets/bbk.png" } // fallback ke livehouse
  ],
  '2025-10-04': [
    { name: "WW", venue: "BLACKOWL PIK", avatar: "./assets/blackowl.png" },
    { name: "Kienzy", venue: "BLACKOWL GADING", avatar: "./assets/blackowl.png" },
    { name: "Nathalie Adelia", venue: "BLACKOWL SERPONG", avatar: "./assets/blackowl.png" },
    { name: "Maskara & Ava", venue: "BENGKEL", avatar: "./assets/bengkel.png" },
    { name: "Alka Flow", venue: "FOS", avatar: "./assets/alkaflow.png" },
    { name: "Lusso", venue: "NOYA", avatar: "./assets/noya.png" },
    { name: "Sarah Ketaren", venue: "MANTRA", avatar: "./assets/sarahketaren.png" },
    { name: "Kuaci Records", venue: "WHITERABIT GATSU", avatar: "./assets/kuaci.png" },
    { name: "Levin & Iris Nova", venue: "KALA", avatar: "./assets/kala.png" },
    { name: "Mossigo & Nawing", venue: "KODE", avatar: "./assets/kode.png" },
    { name: "Wyntella", venue: "BOF", avatar: "./assets/wyntella.png" },
    { name: "Indonesia Local Heroes", venue: "KITA BAR", avatar: "./assets/kita.png" },
    { name: "Yoga Sastra", venue: "NU CHINA", avatar: "./assets/yoga.png" }
  ],
  '2025-10-05': [
    { name: "Alka Flow", venue: "FYNE", avatar: "./assets/alkaflow.png" },
    { name: "Kaell", venue: "IZZY", avatar: "./assets/kaell.png" }
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
