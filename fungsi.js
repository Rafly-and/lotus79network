// Mendengarkan event scroll pada window
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const targetDiv = document.querySelector('#logo-div');
    // Jika layar di-scroll lebih dari 50px ke bawah, tambahkan class 'scrolled'
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        targetDiv.classList.add('logo-scrolled');
    } else {
        // Jika kembali ke paling atas, hapus class 'scrolled' (kembali transparan)
        header.classList.remove('scrolled');
        targetDiv.classList.remove('logo-scrolled');
    }
});

// Link WA
// 1. Ambil SEMUA elemen yang memiliki class 'btn-hubungi'
const semuaTombolHubungi = document.querySelectorAll('.kontak-wa');

// 2. Terapkan fungsi ke masing-masing tombol
semuaTombolHubungi.forEach(function(tombol) {
    tombol.addEventListener('click', function(event) {
        // Mencegah link melakukan aksi scroll atau memuat ulang halaman
        event.preventDefault(); 
        // Membuka link WhatsApp di tab baru
        window.open("https://wa.me/6281998338585", "_blank");
    });
});

// --- Script untuk Carousel Desain ---
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Inisialisasi Carousel Atas (Login)
    const mainSwiper = new Swiper('#mainCarousel', {
        loop: true,                 // Looping otomatis
        grabCursor: true,           // Kursor tangan saat di PC
        spaceBetween: 10,           // Jarak antar gambar
        slidesPerView: 1,           // Menampilkan 1 gambar
        navigation: {
            nextEl: '#nextMainBtn', 
            prevEl: '#prevMainBtn',
        },
    });

    // 2. Inisialisasi Carousel Bawah (Voucher)
    const voucherSwiper = new Swiper('#voucherCarousel', {
        loop: true,                 
        grabCursor: true,           
        spaceBetween: 10,           
        slidesPerView: 3,           
        navigation: {
            nextEl: '#nextVoucherBtn',
            prevEl: '#prevVoucherBtn',
        },
        breakpoints: {
            0: { slidesPerView: 2 },
            600: { slidesPerView: 3 }
        }
    });
});
	
// --- SCRIPT LIGHTBOX (Berlaku untuk Grid dan Carousel) ---
// Ambil elemen-elemen yang dibutuhkan dari DOM (Hanya 1 kali deklarasi)
const modal = document.getElementById("lightbox-modal");
const modalImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

// Gunakan Event Delegation pada document agar gambar asli maupun hasil clone Swiper tetap bisa diklik
document.addEventListener("click", function(e) {
    // Cek apakah elemen yang diklik adalah gambar di dalam grid ATAU gambar di dalam swiper-slide
    if (e.target.matches(".grid-item img, .swiper-slide img")) {
        modal.style.display = "flex"; // Munculkan modal
        modalImg.src = e.target.src;  // Salin sumber gambar ke dalam modal
    }
});

// Event listener untuk tombol 'X' (close)
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Tutup modal jika area gelap di luar gambar diklik
modal.addEventListener("click", function(e) {
    if (e.target !== modalImg) {
        modal.style.display = "none";
    }
});