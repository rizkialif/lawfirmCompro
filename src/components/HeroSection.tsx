import { useState } from 'react';
import DynamicModal, { type FormField, type ActionButton } from './DynamicModal';

export default function HeroSection({
    heroImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    headline = "Mendefinisikan Ulang Standar Keadilan.",
    description = "Kami memadukan ketajaman hukum dengan pendekatan yang humanis. Memberikan solusi yang elegan untuk masalah yang kompleks tanpa kekakuan birokrasi."
}) {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    // Definisi formFields dan formAction (sesuai kode Anda sebelumnya)
    const formFields: FormField[] = [
        { id: 'nama', label: 'Nama', type: 'text', placeholder: 'Masukkan nama anda' },
        { id: 'nomor_telepon', label: 'Nomor Telepon', type: 'number', placeholder: 'Masukkan nomor telepon anda' },
        { id: 'email', label: 'Email', type: 'email', placeholder: 'Masukkan email anda' },
        { id: 'keluhan', label: 'Pengaduan', type: 'textarea', placeholder: 'Jelaskan keluhan anda' }
    ];

    const formAction: ActionButton[] = [
        {
            label: 'Kirim',
            isPrimary: true,
            onClick: (formData) => {
                setIsLoginModalOpen(false);
                console.log("send data : ", formData)
            }
        }
    ];

    return (
        // Menggunakan gradasi super halus dari biru sangat muda ke putih agar tidak flat
        <section id="home" className="relative bg-gradient-to-b from-slate-50 to-white pt-16 pb-20 lg:pt-24 lg:pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Kolom Teks */}
                    <div className="relative z-20 mb-16 lg:mb-0">

                        {/* Badge/Pill pembuka yang manis */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-sm font-medium mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                            Pendekatan Hukum Modern
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-serif text-[#0a1d37] leading-[1.15] tracking-tight">
                            {headline}
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
                            {description}
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            {/* Tombol membulat dengan efek melayang (hover:-translate-y-1) */}
                            <button
                                onClick={() => setIsLoginModalOpen(true)}
                                className="px-8 py-4 bg-[#0a1d37] text-white rounded-full text-sm font-semibold tracking-wide hover:bg-blue-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                            >
                                Jadwalkan Konsultasi
                            </button>
                            <button
                                className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-full text-sm font-semibold tracking-wide hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
                            >
                                Pelajari Lebih Lanjut
                            </button>
                        </div>
                    </div>

                    {/* Kolom Gambar */}
                    <div className="relative z-10 lg:ml-auto w-full max-w-xl">
                        <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">

                            {/* Efek Glow di belakang gambar pengganti kotak kaku */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#0a1d37] to-blue-300 rounded-[3rem] blur-2xl opacity-20 -z-10"></div>

                            <img
                                src={heroImage}
                                alt="Hero Background"
                                className="absolute inset-0 w-full h-full object-cover object-center rounded-[2.5rem] shadow-2xl"
                            />

                            {/* Floating Trust Card - Memberikan kesan dinamis dan hidup */}
                            <div className="absolute -bottom-6 -left-6 sm:bottom-8 sm:-left-12 bg-white p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                                <div className="bg-blue-50 p-3 rounded-full text-[#0a1d37]">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Rating Klien</p>
                                    <p className="text-xl font-bold text-[#0a1d37]">4.9 / 5.0</p>
                                </div>
                            </div>

                            {/* Floating Card kedua (opsional, di kanan atas) */}
                            <div className="absolute -top-6 -right-4 sm:top-8 sm:-right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white hidden sm:block">
                                <p className="text-[#0a1d37] font-serif font-bold italic text-2xl">10+</p>
                                <p className="text-xs text-slate-600 font-medium">Tahun Pengalaman</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <DynamicModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                title="Buat janji pertemuan"
                fields={formFields}
                actions={formAction}
            />
        </section>
    );
}