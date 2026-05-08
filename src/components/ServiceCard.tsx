import React from 'react';

export interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, href = "#contactus" }) => {
    return (
        <div className="group relative bg-white p-8 lg:p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-start overflow-hidden">

            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>


            <div className="relative mb-8">
                <div className="absolute inset-0 bg-blue-100/50 rounded-full scale-150 blur-sm group-hover:bg-blue-200/50 transition-colors duration-500"></div>
                <div className="relative z-10 text-[#0a1d37] group-hover:scale-110 transition-transform duration-500">
                    {icon}
                </div>
            </div>

            <h4 className="text-2xl font-serif font-bold text-[#0a1d37] mb-4">
                {title}
            </h4>

            <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                {description}
            </p>

            <a
                href={href}
                className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#0a1d37] transition-colors duration-300"
            >
                Konsultasi Sekarang
                <span className="ml-3 w-8 h-px bg-slate-300 group-hover:w-12 group-hover:bg-[#0a1d37] transition-all duration-300 relative flex items-center">
                    <svg className="absolute right-0 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            </a>
        </div>
    );
};

export default ServiceCard;