'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import DynamicModal, { type FormField, type ActionButton } from './DynamicModal'
import logo from '../assets/logo1.png';

interface NavbarProps {
    companyName: string;
    menu: Array<{ label: string; href: string }>;
}

export default function Navbar({ companyName, menu }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

    const formFields: FormField[] = [
        { id: 'nama', label: 'Nama', type: 'text', placeholder: 'Masukkan nama anda' },
        { id: 'nomor_telepon', label: 'Nomor Telepon', type: 'number', placeholder: 'Masukkan nomor telepon anda' },
        { id: 'email', label: 'Email', type: 'email', placeholder: 'Masukkan email anda' },
        { id: 'keluhan', label: 'Pengaduan', type: 'textarea', placeholder: 'Jelaskan keluhan anda' }
    ]

    const formAction: ActionButton[] = [
        {
            label: 'Kirim Permintaan',
            isPrimary: true,
            onClick: (formData) => {
                setIsLoginModalOpen(false)
                console.log("send data : ", formData)
            }
        }
    ]

    return (
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5 flex items-center gap-x-3 group">
                        <img
                            alt="Company Logo"
                            src={logo}
                            className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
                        />
                        <p className="hidden md:block text-[#0a1d37] font-serif font-bold text-xl tracking-wide">
                            {companyName}
                        </p>
                    </a>
                </div>

                {/* Tombol Hamburger Mobile */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-slate-500 hover:text-[#0a1d37] hover:bg-slate-50 transition-colors"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>

                {/* Bagian Tengah: Menu Desktop */}
                <PopoverGroup className="hidden lg:flex lg:items-center lg:gap-x-10">
                    {menu.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="text-sm font-semibold text-slate-600 hover:text-[#0a1d37] transition-colors duration-300 relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0a1d37] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </PopoverGroup>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button
                        onClick={() => setIsLoginModalOpen(true)}
                        className="flex items-center gap-x-2 text-sm font-semibold bg-[#0a1d37] text-white rounded-full px-6 py-2.5 hover:bg-blue-900 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                    >
                        Buat Janji
                    </button>
                </div>
            </nav>

            {/* MODAL MENU MOBILE */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50 bg-[#0a1d37]/20 backdrop-blur-sm" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm shadow-2xl transition-all">

                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <a href="#" className="-m-1.5 p-1.5 flex items-center gap-x-3">
                            <img alt="Mobile Logo" src={logo} className="h-10 w-auto" />
                            <p className="text-[#0a1d37] font-serif font-bold text-lg">{companyName}</p>
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-full p-2.5 text-slate-400 hover:text-red-500 hover:bg-slate-50 transition-colors"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-slate-100">

                            <div className="space-y-2 py-6">
                                {menu.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="-mx-3 block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 hover:text-[#0a1d37] hover:bg-blue-50 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>

                            <div className="py-6">
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setIsLoginModalOpen(true);
                                    }}
                                    className="block w-full text-center rounded-full px-4 py-3.5 text-base font-semibold bg-[#0a1d37] text-white shadow-md hover:bg-blue-900 hover:shadow-lg transition-all"
                                >
                                    Buat Janji Konsultasi
                                </button>
                            </div>

                        </div>
                    </div>
                </DialogPanel>
            </Dialog>

            {/* MODAL FORM */}
            <DynamicModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                title="Jadwalkan Konsultasi"
                fields={formFields}
                actions={formAction}
            />
        </header>
    )
}