import React, { useState } from 'react';

const ContactUs = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.');
        }, 1500);
    };

    return (
        <section id="contactus" className="scroll-mt-24 py-10 lg:py-10 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-100/50 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-800 text-sm font-medium mb-6 shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                        Mari Terhubung
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-serif text-[#0a1d37] leading-tight mb-6">
                        Diskusikan Langkah Hukum Anda Bersama Kami.
                    </h2>
                    <p className="text-lg text-slate-600">
                        Keadilan Anda adalah prioritas. Jadwalkan konsultasi dengan tim ahli kami untuk mendapatkan evaluasi awal yang transparan dan humanis.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-stretch bg-white rounded-[2rem] lg:rounded-[3rem] shadow-2xl p-2 sm:p-4 border border-slate-100">
                    <div className="w-full lg:w-5/12 bg-[#0a1d37] text-white rounded-[1.5rem] lg:rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden flex flex-col">
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-2xl"></div>
                        <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500 opacity-20 rounded-full blur-xl"></div>

                        <h3 className="text-2xl font-serif font-bold mb-8 relative z-10">Informasi Kontak</h3>

                        <div className="space-y-8 relative z-10 flex-grow">
                            {/* Alamat */}
                            <div className="flex items-start gap-5 group">
                                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-blue-500 transition-colors duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-200 mb-1">Alamat Kantor</h4>
                                    <p className="text-slate-300 leading-relaxed text-sm">Jl. Jenderal Sudirman No. 88<br />Bekasi, Jawa Barat 17148</p>
                                </div>
                            </div>

                            {/* Telepon */}
                            <div className="flex items-start gap-5 group">
                                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-blue-500 transition-colors duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.265-3.965-6.861-6.861l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-200 mb-1">Telepon & WhatsApp</h4>
                                    <p className="text-slate-300 leading-relaxed text-sm">+62 812-3456-7890<br />(021) 888-1234</p>
                                </div>
                            </div>

                            {/* Jam Operasional */}
                            <div className="flex items-start gap-5 group">
                                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-blue-500 transition-colors duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-200 mb-1">Jam Operasional</h4>
                                    <p className="text-slate-300 leading-relaxed text-sm">Senin - Jumat: 09.00 - 17.00<br />Sabtu - Minggu: Tutup</p>
                                </div>
                            </div>
                        </div>

                        {/* Peta Terintegrasi Cantik di Bawah Info */}
                        <div className="mt-10 w-full h-48 rounded-2xl overflow-hidden border border-white/20 relative z-10 shadow-inner group">
                            <iframe
                                title="Lokasi Kantor Bekasi"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.01918361026!2d106.91494297184497!3d-6.284206579219457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d8546ad633d%3A0x79e8de8965402078!2sBekasi%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                            ></iframe>
                        </div>
                    </div>

                    {/* SISI KANAN: Formulir Ramah Pengguna */}
                    <div className="w-full lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Input Nama */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0a1d37]/20 focus:border-[#0a1d37] focus:bg-white transition-all placeholder:text-slate-400"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Input Telepon */}
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Nomor Telepon</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0a1d37]/20 focus:border-[#0a1d37] focus:bg-white transition-all placeholder:text-slate-400"
                                        placeholder="0812-3456-7890"
                                    />
                                </div>
                            </div>

                            {/* Input Email */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-slate-700">Alamat Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0a1d37]/20 focus:border-[#0a1d37] focus:bg-white transition-all placeholder:text-slate-400"
                                    placeholder="johndoe@email.com"
                                />
                            </div>

                            {/* Input Pesan */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-slate-700">Ringkasan Masalah</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0a1d37]/20 focus:border-[#0a1d37] focus:bg-white transition-all placeholder:text-slate-400 resize-none"
                                    placeholder="Ceritakan secara singkat masalah hukum yang sedang Anda hadapi..."
                                ></textarea>
                            </div>

                            {/* Tombol Kirim membulat */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 mt-2 bg-[#0a1d37] text-white rounded-full text-sm font-semibold tracking-wide hover:bg-blue-900 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    'Mengirim...'
                                ) : (
                                    <>
                                        Kirim Pesan Sekarang
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </>
                                )}
                            </button>

                            <p className="text-xs text-slate-500 text-center mt-4">
                                <span className="font-semibold text-slate-700">Privasi Terjamin.</span> Informasi yang Anda kirimkan dilindungi oleh etika kerahasiaan profesi hukum.
                            </p>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactUs;