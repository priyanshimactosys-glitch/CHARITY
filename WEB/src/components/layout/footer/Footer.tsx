import Button from "@/src/components/common/Button";
import Container from "@/src/components/common/Container";
import Image from "next/image";

export default function Footer() {
    return (
        <section className="relative">

            <div className=" hidden md:flex bg-white h-16 md:h-20" />


            <div
                className="
        hidden md:flex
        absolute left-1/2 top-20
        -translate-x-1/2 -translate-y-1/2
        gap-4 z-10
      "
            >
                <Button variant="secondary" className="px-4 py-3 flex items-center gap-2">
                    <Image
                        src="/images/footer1.png"
                        alt="Book Appointment"
                        width={28}
                        height={28}
                    />
                    Book Appointment →
                </Button>

                <Button className="px-6 py-3 flex items-center gap-2">
                    <Image
                        src="/images/footer2.png"
                        alt="Contact Us"
                        width={28}
                        height={28}
                    />
                    Contact Us →
                </Button>
            </div>

            <div className="bg-[#F7EEFA] text-center pt-12 md:pt-16 pb-6 px-4">
                <p className="text-2xl md:text-4xl font-bold mb-4">
                    Our Mission
                </p>

                <p className="max-w-4xl mx-auto text-xs md:text-base text-[#010101] leading-relaxed">
                    V'Peters Initiative is dedicated to empowering immigrants and
                    low-income families by providing education, resources and support
                    to help them build better futures.
                </p>

                <div className="flex justify-center gap-6 mt-6">
                    <Image src="/images/Facebook.png" alt="Facebook" width={23} height={24} />
                    <Image src="/images/twitter-black.png" alt="Twitter" width={23} height={20} />
                    <Image src="/images/youtube-black.png" alt="Youtube" width={23} height={17} />
                    <Image src="/images/linkedin.png" alt="LinkedIn" width={20} height={20} />
                </div>
            </div>

            <Container>
                <div className="bg-white py-6">

                    <div
                        className="
            flex flex-col md:flex-row
            justify-between
            gap-4
            text-xs md:text-sm
            text-gray-600
            text-left
          "
                    >
                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/Phone.png"
                                alt="Phone"
                                width={17}
                                height={17}
                                className="w-[13px] h-[13px] md:w-[17px] md:h-[17px]"
                            />
                            <span>(253) 555-1234</span>
                        </div>

                        <div className="flex items-center gap-2 break-all">
                            <Image
                                src="/images/mail.png"
                                alt="Email"
                                width={18}
                                height={15}
                                className="w-[14px] h-[12px] md:w-[18px] md:h-[15px]"
                            />
                            <span>info@vpetersinitiative.org</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/location.png"
                                alt="Location"
                                width={17}
                                height={19}
                                className="w-[14px] h-[15px] md:w-[17px] md:h-[19px]"
                            />
                            <span>
                                456 Community Center Dr., Seattle, WA 98109
                            </span>
                        </div>
                    </div>

                    <div className="text-center text-xs md:text-base text-text mt-5 border-t border-[#D9D9D9] pt-4">
                        © 2026 | V&apos;Peters Initiative.
                        <span className="text-blue-600 cursor-pointer ms-2 underline">
                            Terms & Privacy
                        </span>
                    </div>

                </div>
            </Container>

        </section>
    );
}
