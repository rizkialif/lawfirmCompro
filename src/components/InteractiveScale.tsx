import React, { useState } from 'react';

const InteractiveScale = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section
            id="balance-section"
            className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col items-center justify-center overflow-hidden"
        >
            <div
                className={`absolute inset-0 bg-blue-900/5 transition-opacity duration-1000 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            ></div>
            <div className="relative z-20 text-center mb-20 px-6 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6 transition-all duration-500 lg:pt-6">
                    <span className={`h-2 w-2 rounded-full transition-colors duration-500 ${isHovered ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    {isHovered ? 'Kasus Ditangani' : 'Simulasi Kasus'}
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0a1d37] mb-6 transition-all duration-700">
                    {isHovered ? "Keseimbangan Keadilan Tercapai." : "Beban Kasus Anda Terasa Berat?"}
                </h2>
                <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto transition-all duration-700">
                    {isHovered
                        ? "Dengan keahlian tim kami, seberat apa pun masalah hukum Anda, kami siap menyeimbangkannya."
                        : "Arahkan kursor Anda tepat ke piringan yang kosong untuk memberikan keadilan."}
                </p>
            </div>

            <div className="relative flex flex-col items-center mt-4 w-full max-w-4xl">

                <div className="relative flex justify-center w-[280px] sm:w-[450px] lg:w-[600px] z-20">

                    <div
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-32 md:w-48 h-[350px] md:h-[450px] z-50 cursor-pointer"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                    </div>
                    <div
                        className="absolute top-0 w-full h-3 bg-[#0a1d37] rounded-full transition-transform duration-1000 ease-in-out shadow-lg pointer-events-none"
                        style={{ transform: `rotate(${isHovered ? 0 : -15}deg)`, transformOrigin: 'center center' }}
                    >
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-600 rounded-full border-4 border-white shadow-sm"></div>
                        <div
                            className="absolute left-0 top-1 w-0.5 h-32 md:h-40 bg-slate-400 transition-transform duration-1000 ease-in-out"
                            style={{ transform: `rotate(${isHovered ? 0 : 15}deg)`, transformOrigin: 'top center' }}
                        >
                            <div className="absolute top-full -left-12 md:-left-16 w-24 md:w-32 h-3 bg-[#0a1d37] rounded-b-full shadow-md flex justify-center">
                                <div className="absolute bottom-full left-0 w-0.5 h-16 bg-slate-400 origin-bottom -rotate-[30deg]"></div>
                                <div className="absolute bottom-full right-0 w-0.5 h-16 bg-slate-400 origin-bottom rotate-[30deg]"></div>
                            </div>

                            <div className="absolute bottom-3 -left-8 md:-left-10 w-16 md:w-20 h-24 bg-red-50 border-2 border-red-200 rounded-lg flex flex-col items-center justify-center shadow-lg transition-all duration-1000">
                                <span className="text-3xl mb-1">⚖️</span>
                                <div className="w-8 h-1 bg-red-200 rounded mb-1"></div>
                                <div className="w-10 h-1 bg-red-200 rounded"></div>
                                {!isHovered && (
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full text-sm flex items-center justify-center animate-bounce font-bold shadow-lg">!</div>
                                )}
                            </div>
                        </div>

                        <div
                            className="absolute right-0 top-1 w-0.5 h-32 md:h-40 bg-slate-400 transition-transform duration-1000 ease-in-out"
                            style={{ transform: `rotate(${isHovered ? 0 : 15}deg)`, transformOrigin: 'top center' }}
                        >
                            <div className="absolute top-full -left-12 md:-left-16 w-24 md:w-32 h-3 bg-[#0a1d37] rounded-b-full shadow-md flex justify-center">
                                <div className="absolute bottom-full left-0 w-0.5 h-16 bg-slate-400 origin-bottom -rotate-[30deg]"></div>
                                <div className="absolute bottom-full right-0 w-0.5 h-16 bg-slate-400 origin-bottom rotate-[30deg]"></div>
                            </div>

                            {/* <div
                                className={`absolute bottom-3 -left-8 md:-left-10 w-16 md:w-20 h-24 border-2 border-dashed border-blue-400 bg-blue-50/50 rounded-lg flex items-center justify-center transition-all duration-500 ${isHovered ? 'opacity-0 scale-50' : 'opacity-100 scale-100 animate-pulse'}`}
                            >
                                <span className="text-blue-500 font-bold text-[9px] md:text-[11px] text-center uppercase tracking-wider leading-tight">Arahkan<br />Mouse</span>
                            </div> */}

                            <div
                                className="absolute -left-10 md:-left-12 w-20 md:w-24 h-32 flex flex-col items-center justify-end transition-all duration-[1200ms]"
                                style={{
                                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    transform: isHovered ? 'translateY(0) scale(1)' : 'translateY(-250px) scale(0.5)',
                                    opacity: isHovered ? 1 : 0
                                }}
                            >
                                <div className="bg-[#0a1d37] text-white p-4 md:p-5 rounded-t-full rounded-b-lg shadow-2xl border-4 border-white mb-3 flex items-center justify-center">
                                    <svg className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-5 md:w-6 h-64 md:h-80 bg-gradient-to-b from-yellow-600 to-yellow-800 rounded-t-full z-10 shadow-inner pointer-events-none mt-2"></div>
                <div className="w-32 md:w-40 h-8 md:h-10 bg-[#0a1d37] rounded-t-3xl -mt-2 z-10 shadow-lg flex items-center justify-center pointer-events-none">
                    <div className="w-20 md:w-24 h-1 bg-white/20 rounded-full"></div>
                </div>
                <div className="w-48 md:w-64 h-6 md:h-8 bg-slate-900 rounded-t-xl z-10 shadow-2xl pointer-events-none"></div>
            </div>

        </section>
    );
};

export default InteractiveScale;