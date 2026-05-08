import React from 'react';
import ServiceCard from '../components/ServiceCard';

const servicesData = [
    // ... (Data servicesData Anda tetap sama seperti sebelumnya) ...
    {
        title: "Hukum Perusahaan & Komersial",
        description: "Pendampingan legalitas bisnis, penyusunan kontrak, merger, akuisisi, serta kepatuhan regulasi perusahaan untuk mengamankan aset Anda.",
        icon: (<svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015-1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>)
    },
    {
        title: "Litigasi & Penyelesaian",
        description: "Representasi kuat di dalam maupun di luar pengadilan. Kami berfokus pada strategi penyelesaian sengketa yang paling efisien dan efektif.",
        icon: (<svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>)
    },
    {
        title: "Properti & Real Estat",
        description: "Layanan menyeluruh terkait sengketa lahan, legalitas pembebasan tanah, perjanjian sewa-menyewa, dan investasi properti.",
        icon: (<svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>)
    },
    {
        title: "Hukum Keluarga",
        description: "Menangani isu sensitif seperti perceraian, hak asuh anak, dan pembagian harta gana-gini dengan pendekatan yang sangat menghargai privasi.",
        icon: (<svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>)
    }
];

const Services = () => {
    return (
        <section id="services" className="relative py-24 bg-slate-50 overflow-hidden scroll-mt-24">

            {/* =========================================================
                BACKGROUND DEWI KEADILAN TERPUSAT (WATERMARK MODE)
                ========================================================= */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none p-10 lg:p-20">
                <img
                    // Menggunakan URL gambar yang lebih bersih untuk siluet terpusat
                    src="https://images.unsplash.com/photo-1618170281023-e18e69d74917?q=80&w=2000&auto=format&fit=crop"
                    alt="Themis Watermark"
                    // Stylization: grayscale, kontras tinggi, opasitas 20%
                    className="w-full max-w-4xl h-auto object-contain grayscale brightness-90 contrast-125 opacity-20 transition-opacity duration-1000"
                />
            </div>
            {/* ========================================================= */}


            {/* KONTEN (Relative z-10 agar di atas gambar) */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    {/* Header Badge */}
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#0a1d37]/5 border border-[#0a1d37]/10 text-[#0a1d37] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm shadow-sm">
                        Area Praktik Utama
                    </div>
                    {/* Header Title - Pastikan teks memiliki kontras tinggi dengan warna Navy gelap */}
                    <h3 className="text-[#0a1d37] text-4xl lg:text-5xl font-serif leading-tight mb-6">
                        Keahlian Kami untuk Melindungi Aset & Hak Anda.
                    </h3>
                    <p className="text-slate-700 text-lg">
                        Kami menyediakan advokasi hukum yang komprehensif, disesuaikan dengan kebutuhan spesifik individu maupun korporasi dengan standar etika tertinggi.
                    </p>
                </div>

                {/* Grid Services: Pastikan ServiceCard memiliki bg-white padat agar menutupi gambar di belakangnya */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;