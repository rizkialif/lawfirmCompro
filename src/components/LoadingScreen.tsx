import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);
    const [isRemoved, setIsRemoved] = useState(false);

    useEffect(() => {
        const mountTimer = setTimeout(() => {
            setIsMounted(true);
        }, 100);
        const leaveTimer = setTimeout(() => {
            setIsLeaving(true);
        }, 2500);
        const removeTimer = setTimeout(() => {
            setIsRemoved(true);
        }, 3500);

        return () => {
            clearTimeout(mountTimer);
            clearTimeout(leaveTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (isRemoved) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] bg-[#0a1d37] flex flex-col items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${isLeaving ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            <div className="relative flex flex-col items-center">
                <div className="overflow-hidden mb-4">
                    <h1
                        className={`text-3xl md:text-5xl font-serif text-white tracking-widest uppercase transition-all duration-1000 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                    >
                        Lawyer Company
                    </h1>
                </div>

                <div className="w-full flex justify-center items-center">
                    <div
                        className={`h-[1px] bg-white/50 transition-all duration-1500 ease-out ${isMounted ? 'w-64 md:w-96 opacity-100' : 'w-0 opacity-0'
                            }`}
                    ></div>
                    {/* Titik cahaya di tengah garis */}
                    <div
                        className={`absolute h-1.5 w-1.5 rounded-full bg-white transition-opacity duration-1000 delay-500 ${isMounted ? 'opacity-100 animate-pulse' : 'opacity-0'
                            }`}
                    ></div>
                </div>

                {/* Teks Slogan Kecil (Muncul belakangan) */}
                <p
                    className={`mt-6 text-sm text-blue-200 tracking-[0.3em] uppercase transition-all duration-1000 delay-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                >
                    Integritas & Keadilan
                </p>

            </div>
        </div>
    );
};

export default LoadingScreen;