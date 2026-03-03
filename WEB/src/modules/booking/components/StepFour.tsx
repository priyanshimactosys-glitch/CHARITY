'use client';

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface Props {
    next: () => void;
    back: () => void;
}

export default function StepFour({ next, back }: Props) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        notes: "",
        consent: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;

        setForm({
            ...form,
            [name]:
                type === "checkbox"
                    ? (e.target as HTMLInputElement).checked
                    : value,
        });
    };

    const isValid =
        form.name &&
        form.email &&
        form.phone &&
        form.consent;

    return (
        <section className="bg-[gray-50] ">

            <div className="max-w-6xl mx-auto px-4">

                <div className="flex items-center gap-4">
                    <div className="flex-1 h-[1px] bg-[#D9D9D9]"></div>

                    <h2 className="whitespace-nowrap text-xl md:text-2xl font-semibold">
                        Step 4: Enter Information
                    </h2>

                    <div className="flex-1 h-[1px] bg-[#D9D9D9]"></div>
                </div>


                <p className="text-lg text-center text-text mt-2">
                    Provide your details below to confirm your appointment.
                </p>

                {/* ================= MAIN GRID ================= */}
                <div className="grid md:grid-cols-3 gap-4 mt-10">

                    {/* ================= FORM ================= */}
                    <div className="md:col-span-2 bg-white rounded-xl shadow shadow-xl p-7">

                        {/* Full Name */}
                        <div>
                            <label className="text-base text-[#6C6C6C]">
                                Full Name
                            </label>

                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border rounded-md p-2 mt-1"
                            />
                        </div>

                        {/* Email + Phone */}
                        <div className="grid md:grid-cols-2 gap-6 mt-6">

                            <div>
                                <label className="text-base text-[#6C6C6C]">Email</label>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2 mt-1"
                                />
                            </div>

                            <div>
                                <label className="text-base text-[#6C6C6C]">Phone</label>
                                <input
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2 mt-1"
                                />
                            </div>

                        </div>

                        {/* Notes */}
                        <div className="mt-6">
                            <label className="text-base text-[#6C6C6C]">Notes (optional)</label>

                            <textarea
                                name="notes"
                                value={form.notes}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Optional notes for our staff"
                                className="w-full border rounded-md p-1 mt-1"
                            />
                        </div>

                        {/* Privacy */}
                        <p className="text-base text-gray-500 mt-4">
                            We respect your privacy. Your information is secure
                            and will only be used for appointment confirmation.
                        </p>

                        {/* Consent */}
                        <label className="flex gap-2 items-start mt-4">
                            <input
                                type="checkbox"
                                name="consent"
                                checked={form.consent}
                                onChange={handleChange}
                                className="mt-1"
                            />

                            <span className="text-base">
                                I consent to receive text & email confirmations
                                and accept the privacy policy.
                            </span>
                        </label>

                        <div className="mt-8">
                            <button
                                disabled={!isValid}
                                onClick={next}
                                className={`
                  px-8 py-3 rounded-md text-white sm:w-full
                  ${isValid
                                        ? "bg-red-600 hover:bg-red-700"
                                        : "bg-gray-300 cursor-not-allowed"}
                `}
                            >
                                Confirm Appointment
                            </button>
                        </div>

                    </div>

                    {/* ================= SUMMARY ================= */}
                    <div className="bg-white rounded-xl shadow  h-fit">

                        <div className="p-4 bg-[#F6F6F6] flex gap-3 items-start">

                            <Image
                                src="/images/step-2.svg"
                                alt="service"
                                width={45}
                                height={45}
                            />

                            <div>
                                <p className="text-lg font-semibold">
                                    Your Appointment<br />
                                    Passport Application Acceptance
                                </p>

                                <p className="text-base text-gray-600">Your DS-11: First-Time US. Passport</p>
                            </div>

                        </div>

                        <div className="p-5">
                            <p className="text-base font-medium">
                                Saturday, Mar 15, 2026
                            </p>
                            <hr className="text-[#E5E5E5] mt-3" />
                            <div className="mt-4 text-base text-gray-600">
                                <p>Sunset Center</p>
                                <p>123 Any Street</p>
                                <p>Anytown, WA 98001</p>
                            </div>

                            <div className="mt-5">
                                <p className="text-base font-medium mb-2">
                                    What to bring
                                </p>

                                <ul className="text-base text-gray-600 space-y-1 list-disc ml-5">
                                    <li>DS-11 Form (unsigned)</li>
                                    <li>Proof of Citizenship</li>
                                    <li>Valid Photo ID</li>
                                    <li>Payment (money order or check)</li>
                                </ul>
                            </div>

                            <hr className="text-[#E5E5E5] my-5" />


                            <p className="text-base text-gray-600">
                                Questions? Call (253) 555-1234
                            </p>
                        </div>
                    </div>

                </div>

                {/* ================= STEPPER ================= */}
                <div className="overflow-x-auto mt-12">

                    <div className="flex min-w-max gap-6 text-gray-600">

                        <button
                            onClick={back}
                            className="flex items-center gap-2 whitespace-nowrap"
                        >
                            Step 1: Choose a Service
                            <ChevronRight size={16} />
                        </button>

                        <span className="flex items-center gap-2 whitespace-nowrap">
                            Step 2: What to Bring
                            <ChevronRight size={16} />
                        </span>

                        <span className="flex items-center gap-2 whitespace-nowrap">
                            Step 3: Choose Date & Time
                            <ChevronRight size={16} />
                        </span>

                        <span className="font-semibold text-black whitespace-nowrap">
                            Step 4: Enter Information
                        </span>

                    </div>

                </div>

            </div>
        </section>
    );
}