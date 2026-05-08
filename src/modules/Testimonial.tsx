import Card, { type CardProps } from '../components/Card';

// Data dummy testimoni (bisa diganti dengan data dari API/Database nanti)
const testimonialData: CardProps[] = [
    {
        quote: "Sangat profesional dan transparan sejak awal. Mereka membantu perusahaan kami melewati proses merger yang rumit tanpa kendala berarti.",
        name: "Andi Wijaya",
        position: "CEO, PT Maju Bersama",
    },
    {
        quote: "Pendekatan mereka sungguh humanis. Saya merasa didengarkan dan didukung secara moral selama proses sengketa keluarga yang melelahkan.",
        name: "Sari Larasati",
        position: "Klien Privat",
    },
    {
        quote: "Tim legal yang responsif. Penjelasan hukum yang tadinya membingungkan berhasil diterjemahkan ke dalam bahasa bisnis yang mudah kami pahami.",
        name: "Budi Santoso",
        position: "Direktur Operasional, TechIndo",
    },
    {
        quote: "Layanan litigasi yang sangat taktis. Mereka tidak hanya memberikan janji, tetapi hasil yang terukur di pengadilan.",
        name: "Hendra Gunawan",
        position: "Pengusaha Properti",
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-[#0a1d37] overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
                <h2 className="text-stone-300 text-sm uppercase tracking-[0.3em] font-semibold mb-4">
                    Kepercayaan Klien
                </h2>
                <h3 className="text-white text-4xl lg:text-5xl font-serif leading-tight">
                    Apa Kata Mereka Tentang Kami.
                </h3>
            </div>

            {/* Area Carousel Berjalan */}
            <div className="relative w-full flex overflow-hidden mask-fade-edges">
                <div className="flex gap-6 w-max animate-marquee pl-6">

                    {/* Mapping Data Asli */}
                    {testimonialData.map((data, index) => (
                        <Card
                            key={`original-${index}`}
                            quote={data.quote}
                            name={data.name}
                            position={data.position}
                        />
                    ))}

                    {/* Mapping Data Duplikat */}
                    {testimonialData.map((data, index) => (
                        <Card
                            key={`duplicate-${index}`}
                            quote={data.quote}
                            name={data.name}
                            position={data.position}
                        />
                    ))}

                </div>
            </div>

        </section>
    );
};

export default Testimonials;