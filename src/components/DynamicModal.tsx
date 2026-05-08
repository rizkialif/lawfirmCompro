'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'

export interface FormField {
    id: string;
    label: string;
    type: string;
    placeholder?: string;
}

export interface ActionButton {
    label: string;
    onClick: (formData: Record<string, string>) => void;
    isPrimary?: boolean;
}

interface DynamicModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    fields: FormField[];
    actions: ActionButton[];
}

export default function DynamicModal({ isOpen, onClose, title, fields, actions }: DynamicModalProps) {
    const [formData, setFormData] = useState<Record<string, string>>({})

    const handleChange = (id: string, value: string) => {
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    return (
        // Menggunakan Transition untuk efek pop-in dan fade yang mulus
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>

                {/* Latar Belakang / Backdrop (Gelap & Blur) */}
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-[#0a1d37]/40 backdrop-blur-sm" aria-hidden="true" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95 translate-y-4"
                            enterTo="opacity-100 scale-100 translate-y-0"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100 translate-y-0"
                            leaveTo="opacity-0 scale-95 translate-y-4"
                        >
                            <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-[2rem] bg-white p-8 text-left align-middle shadow-2xl transition-all relative border border-slate-100">

                                {/* Elemen Dekoratif Sudut Modal */}
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                                {/* HEADER MODAL */}
                                <div className="flex items-start justify-between mb-6 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <DialogTitle as="h3" className="text-2xl font-serif font-bold text-[#0a1d37]">
                                                {title}
                                            </DialogTitle>
                                            <p className="text-sm text-slate-500 mt-1">Isi detail di bawah untuk memulai sesi Anda.</p>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="cursor-pointer rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-red-500 transition-colors focus:outline-none"
                                    >
                                        <span className="sr-only">Close modal</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* BODY / FORM FIELDS */}
                                <div className="space-y-5 relative z-10">
                                    {fields.map((field) => (
                                        <div key={field.id}>
                                            <label htmlFor={field.id} className="block text-sm font-semibold text-slate-700 mb-1.5">
                                                {field.label}
                                            </label>

                                            {/* Logika untuk membedakan Textarea dan Input biasa */}
                                            {field.type === 'textarea' ? (
                                                <textarea
                                                    id={field.id}
                                                    name={field.id}
                                                    rows={4}
                                                    placeholder={field.placeholder}
                                                    value={formData[field.id] || ''}
                                                    onChange={(e) => handleChange(field.id, e.target.value)}
                                                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0a1d37]/20 focus:border-[#0a1d37] focus:bg-white transition-all placeholder:text-slate-400 resize-none"
                                                />
                                            ) : (
                                                <input
                                                    id={field.id}
                                                    name={field.id}
                                                    type={field.type}
                                                    placeholder={field.placeholder}
                                                    value={formData[field.id] || ''}
                                                    onChange={(e) => handleChange(field.id, e.target.value)}
                                                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0a1d37]/20 focus:border-[#0a1d37] focus:bg-white transition-all placeholder:text-slate-400"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* FOOTER / ACTIONS */}
                                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col-reverse sm:flex-row sm:justify-end gap-3 relative z-10">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="w-full sm:w-auto cursor-pointer text-sm font-semibold text-slate-600 px-6 py-3 rounded-full hover:bg-slate-100 transition-colors"
                                    >
                                        Batal
                                    </button>
                                    {actions.map((action, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => action.onClick(formData)}
                                            className={`w-full sm:w-auto cursor-pointer rounded-full px-8 py-3 text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 ${action.isPrimary
                                                    ? 'bg-[#0a1d37] text-white hover:bg-blue-900 hover:shadow-lg'
                                                    : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                                                }`}
                                        >
                                            {action.label}
                                        </button>
                                    ))}
                                </div>

                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}