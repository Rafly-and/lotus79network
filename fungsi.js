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
    tombol.addEventListener('click', function() {
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
                nextEl: '#nextMainBtn', // Menghubungkan ke tombol kustommu
                prevEl: '#prevMainBtn',
            },
        });

        // 2. Inisialisasi Carousel Bawah (Voucher)
        const voucherSwiper = new Swiper('#voucherCarousel', {
            loop: true,                 
            grabCursor: true,           
            spaceBetween: 10,           // Jarak antar kotak voucher
            slidesPerView: 3,           // Menampilkan 3 kotak gambar
            navigation: {
                nextEl: '#nextVoucherBtn',
                prevEl: '#prevVoucherBtn',
            },
            // [OPSIONAL] Responsif untuk mobile: Jika layar di bawah 600px, tampilkan 2 kotak saja
            breakpoints: {
                0: {
                    slidesPerView: 2, 
                },
                600: {
                    slidesPerView: 3,
                }
            }
        });

    });