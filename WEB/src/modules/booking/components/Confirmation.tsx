import Image from "next/image";

export default function Confirmation() {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="max-w-6xl w-full rounded-2xl bg-gray-50">
                <div className="flex flex-col items-center text-center">

                    <Image
                        src="/images/confirm.svg"
                        alt="confirmation"
                        width={100}
                        height={100}
                        className="mb-3 w-[64px] h-[64px] md:w-[100px] md:h-[100px]"
                    />

                    <div className="flex items-center gap-3 w-full">
                        <div className="flex-1 h-[1px] bg-gray-300"></div>

                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
                            Appointment Confirmed!
                        </h2>

                        <div className="flex-1 h-[1px] bg-gray-300"></div>
                    </div>

                    <p className="text-sm md:text-lg text-text mt-2">
                        You're all set. Your appointment is scheduled as follows:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-8 md:mt-10">
                    <div className="md:col-span-2 bg-white rounded-xl shadow-sm p-4 sm:p-5 md:p-6">

                        <div className="flex gap-3 items-start flex-wrap sm:flex-nowrap">

                            <Image
                                src="/images/step-2.svg"
                                alt="service"
                                width={54}
                                height={54}
                                className="w-10 h-10 md:w-[54px] md:h-[54px]"
                            />

                            <div>
                                <p className="text-base md:text-lg font-semibold">
                                    Passport Application Acceptance
                                </p>

                                <p className="text-sm md:text-base text-gray-600">
                                    Your DS-11: First-Time US Passport
                                </p>
                            </div>
                        </div>

                        <hr className="border-gray-200 my-4" />

                        <p className="text-sm md:text-base font-semibold text-text">
                            Saturday, Mar 15, 2026 at 10:20 am
                        </p>

                        <hr className="border-gray-200 my-4" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <div>
                                <p className="text-base font-medium">Sunset Center</p>
                                <p className="text-sm md:text-base text-text">
                                    123 Any Street <br />
                                    Anytown, WA 98001
                                </p>
                            </div>

                            <div className="bg-[#F7CCCC] rounded-lg p-4">
                                <p className="font-bold text-sm md:text-base mb-2">
                                    What to bring
                                </p>

                                <ul className="text-sm md:text-base text-gray-700 space-y-1 list-disc ml-4">
                                    <li>DS-11 Form (unsigned)</li>
                                    <li>Proof of Citizenship</li>
                                    <li>Valid photo ID</li>
                                    <li>Payment (money order or check)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1 bg-purple-100 rounded-xl p-4 sm:p-5 md:p-6 self-start">

                        <h3 className="font-semibold text-lg mb-3">
                            Need to make changes?
                        </h3>

                        <p className="text-sm md:text-base text-text mb-6">
                            Please call us if you need to modify,
                            reschedule, or cancel your appointment.
                        </p>

                        <div className="space-y-3 text-sm md:text-base">

                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/Phone.png"
                                    alt="Phone"
                                    width={18}
                                    height={18}
                                    className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"
                                />
                                (253) 555-1234
                            </div>

                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/mail.png"
                                    alt="Mail"
                                    width={18}
                                    height={18}
                                    className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"
                                />
                                info@veteransinitiative.org
                            </div>

                        </div>
                    </div>
                </div>

                <p className="text-gray-500 text-sm md:text-base mt-10 sm:text-center">
                    We'll see you soon! A confirmation email has been sent to you.
                    Please arrive 10 minutes early with required documents.
                </p>

                <div className="flex justify-center mt-8">
                    <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition">
                        Back to Home
                    </button>
                </div>

            </div>
        </section>
    );
}