import Container from "@/src/components/common/Container";
import Image from "next/image";

export default function ContactSections() {
    const news = [
        {
            title: "Community Health Fair a Success",
            date: "March 26, 2026",
            image: "/images/about.png",
        },
        {
            title: "New Tutoring Program Launched",
            date: "March 26, 2026",
            image: "/images/about.png",
        },
        {
            title: "Annual School Supplies Drive Resap",
            date: "March 26, 2026",
            image: "/images/about.png",
        },
    ];

    return (
        <>
            <Container>
                <section className="mt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        <div className="bg-white rounded-xl shadow-sm p-5 md:p-6 order-1 lg:order-2">
                            <p className="text-2xl font-semibold mb-4">
                                Send Us a Message
                            </p>

                            <form className="space-y-4">

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border rounded-md p-3 text-sm"
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border rounded-md p-3 text-sm"
                                />

                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full border rounded-md p-3 text-sm"
                                />

                                <textarea
                                    rows={4}
                                    placeholder="Your Message..."
                                    className="w-full border rounded-md p-3 text-sm"
                                />

                                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-medium">
                                    Send Message
                                </button>

                            </form>
                        </div>


                        <div className="space-y-6 order-2 lg:order-1">

                            <div className="bg-white rounded-xl shadow-sm p-5 md:p-6">
                                <div className="flex gap-3 mb-3">
                                    <Image
                                        src="/images/contact1.svg"
                                        alt="Contact"
                                        width={26}
                                        height={25}
                                    />
                                    <p className="font-semibold text-2xl">
                                        Contact Information
                                    </p>
                                </div>

                                <div className="space-y-3 text-sm md:text-base">

                                    <div className="flex items-center gap-2">
                                        <Image
                                            src="/images/Phone.png"
                                            alt="Phone"
                                            width={17}
                                            height={17}
                                        />
                                        <span>(253) 555-1234</span>
                                    </div>

                                    <div className="flex items-center gap-2 break-all">
                                        <Image
                                            src="/images/mail.png"
                                            alt="Email"
                                            width={18}
                                            height={15}
                                        />
                                        <span>info@vpetersinitiative.org</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Image
                                            src="/images/location.png"
                                            alt="Location"
                                            width={17}
                                            height={19}
                                        />
                                        <span>
                                            456 Community Center Dr., Seattle, WA 98109
                                        </span>
                                    </div>

                                    <p className="text-base">
                                        Visit our{" "}
                                        <span className="text-[#0160BC] cursor-pointer">
                                            FAQ
                                        </span>{" "}
                                        page for answers to common questions.
                                    </p>

                                </div>
                            </div>


                            <div className="bg-white rounded-xl shadow-sm p-5 md:p-6">

                                {/* Heading */}
                                <div className="flex items-center gap-3 mb-6">
                                    <Image
                                        src="/images/contact2.svg"
                                        alt="Hours"
                                        width={26}
                                        height={25}
                                    />
                                    <h3 className="text-2xl font-semibold">Hours</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-y-4">

                                    <div className="grid grid-cols-2 md:contents">

                                        <div className="space-y-4 text-base">
                                            <p>Monday</p>
                                            <p>Saturday</p>
                                            <p>Sunday</p>
                                        </div>

                                        <div className="space-y-4 text-base md:border-l md:pl-6">
                                            <p>9:00 AM - 6:00 PM</p>
                                            <p>9:00 AM - 2:00 PM</p>
                                            <p>Closed</p>
                                        </div>

                                    </div>

                                    <div className="flex gap-5 pt-4 md:pt-0 md:justify-end md:col-start-3">
                                        <Image src="/images/Facebook.png" alt="Facebook" width={22} height={22} />
                                        <Image src="/images/twitter-black.png" alt="Twitter" width={22} height={22} />
                                        <Image src="/images/youtube-black.png" alt="Youtube" width={22} height={22} />
                                        <Image src="/images/linkedin.png" alt="LinkedIn" width={22} height={22} />
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>


                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

                    <div className="bg-white rounded-xl shadow-sm p-5 md:p-6">
                        <p className="text-2xl font-semibold mb-3">
                            Visit Our Center
                        </p>

                        <p className="text-base text-text">
                            Stop by our office — we'd love to meet you in person!
                        </p>

                        <p className="flex  mt-3 text-sm md:text-base">
                            <Image
                                src="/images/checkicon2.svg"
                                alt="Book Appointment"
                                width={17}
                                height={16}
                                className="mb-3 me-2"
                            /> Get Directions 123 Main Street, Puyallup, WAJA 98371
                        </p>
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-sm h-[248px] md:h-[260px]">
                        <iframe
                            src="https://maps.google.com/maps?q=Seattle&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-full border-0"
                        />
                    </div>
                </section>

                <section className="mt-8">

                    <h2 className="text-2xl md:text-4xl font-bold mb-8">
                        Latest News & Updates
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-3">

                        {news.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
                            >
                                <div className="relative w-full h-[180px]">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover md:w-[389px] md:h-[210px]"
                                    />
                                </div>

                                <div className="p-3">

                                    <h3 className="font-semibold text-2xl leading-snug mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-base text-gray-500 mb-4">
                                        {item.date}
                                    </p>

                                    <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-md font-medium flex items-center gap-2 sm:w-full">
                                        Learn More
                                        <span>›</span>
                                    </button>

                                </div>
                            </div>
                        ))}

                    </div>
                </section>
            </Container>
        </>
    );
}