import React from 'react';

// Mendefinisikan tipe data props yang diterima oleh kartu
export interface CardProps {
    quote: string;
    name: string;
    position: string;
}

const Card: React.FC<CardProps> = ({ quote, name, position }) => {
    return (
        <div className="w-[300px] md:w-[400px] flex-shrink-0 bg-white p-8 md:p-10 border border-stone-100 rounded-none shadow-lg flex flex-col justify-between whitespace-normal group">

            {/* Ikon Kutipan (Quotation Mark) minimalis */}
            <div className="mb-6">
                <svg className="w-8 h-8 text-stone-300 group-hover:text-[#0a1d37] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
            </div>

            {/* Isi Testimoni */}
            <p className="text-stone-600 leading-relaxed mb-8 text-lg font-serif italic">
                "{quote}"
            </p>

            {/* Identitas Klien */}
            <div className="mt-auto border-t border-stone-100 pt-4">
                <h5 className="text-[#0a1d37] font-bold tracking-wide uppercase text-sm mb-1">{name}</h5>
                <p className="text-stone-500 text-sm">{position}</p>
            </div>

        </div>
    );
};

export default Card;