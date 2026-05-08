import React from 'react';

const AboutUs = () => {
  return (
    <section id="aboutus" className="scroll-mt-24 py-24 bg-white relative overflow-hidden">

      {/* Ornamen Latar Belakang (Soft Glow) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -z-10 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* =========================================
              BAGIAN KIRI: VISUAL & GAMBAR (Dynamic Collage)
              ========================================= */}
          <div className="w-full lg:w-1/2 relative">

            {/* Gambar Utama */}
            <div className="relative z-10 w-[85%]">
              <img
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1000"
                alt="Tim Pengacara Profesional"
                className="w-full h-[450px] object-cover rounded-[2.5rem] shadow-2xl"
              />
              {/* Efek Bingkai Melayang di belakang gambar utama */}
              <div className="absolute inset-0 border-2 border-[#0a1d37]/10 rounded-[2.5rem] translate-x-4 translate-y-4 -z-10"></div>
            </div>

            {/* Gambar Sekunder (Tumpang Tindih di Kanan Bawah) */}
            <img
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600"
              alt="Detail Hukum"
              className="absolute -bottom-10 right-0 w-[55%] h-[250px] object-cover rounded-[2rem] border-[10px] border-white shadow-xl z-20"
            />

            {/* Floating Badge (Pindah ke kiri atas agar seimbang) */}
            <div className="absolute top-10 -left-6 lg:-left-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl z-30 border border-slate-100 flex items-center gap-4 animate-bounce-slow">
              <div className="bg-[#0a1d37] text-white p-3 rounded-xl">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-[#0a1d37] leading-none mb-1">10+</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tahun Pengalaman</p>
              </div>
            </div>

          </div>


          {/* =========================================
              BAGIAN KANAN: TEKS & NILAI PERUSAHAAN
              ========================================= */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">

            {/* Badge Header Modern */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]"></span> {/* Aksen aksen warna emas/champagne kecil */}
              Tentang Firma Kami
            </div>

            <h3 className="text-[#0a1d37] text-4xl lg:text-5xl font-serif leading-[1.15] mb-8">
              Integritas dalam Setiap Langkah Hukum.
            </h3>

            <div className="space-y-5 text-slate-600 leading-relaxed text-lg mb-10">
              <p>
                Kami memahami bahwa setiap masalah hukum memiliki sisi manusia yang mendalam. Itulah sebabnya kami hadir tidak hanya sebagai penasihat teknis, tetapi sebagai mitra yang mendampingi Anda dengan empati dan kejujuran.
              </p>
              <p>
                Berbasis di Bekasi, tim kami terdiri dari praktisi yang berdedikasi untuk mendefinisikan ulang standar keadilan melalui solusi yang elegan, transparan, dan berorientasi pada hasil jangka panjang.
              </p>
            </div>

            {/* Grid Nilai Perusahaan (Modern Soft Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Kartu Profesionalisme / Perlindungan */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-[#0a1d37]/20 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-[#0a1d37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h4 className="text-[#0a1d37] font-bold text-lg mb-2">Perlindungan</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Menjaga standar etika tertinggi dalam melindungi hak dan aset Anda.</p>
              </div>

              {/* Kartu Transparansi */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-[#0a1d37]/20 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-[#0a1d37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-[#0a1d37] font-bold text-lg mb-2">Transparansi</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Kejelasan mutlak mengenai langkah strategi hukum dan rincian biaya.</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;