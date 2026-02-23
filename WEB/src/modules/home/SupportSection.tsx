import Button from "@/src/components/common/Button";
import Container from "@/src/components/common/Container";
import Image from "next/image";

export default function SupportSection() {
    return (
        <section className="pt-8 bg-[#222520] md:bg-[linear-gradient(to_bottom,_#222520_50%,_#F7CCCC_50%)]">

            <p className="text-white text-center text-2xl md:text-4xl font-semibold mb-10">
                Support V&apos;Peters Initiative
            </p>

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="bg-[#1E211D] text-white rounded-lg p-8 md:p-18 text-center shadow-xl">

                        <Image
                            src="/images/support1.png"
                            alt="Donate Money"
                            width={80}
                            height={80}
                            priority
                            className="mx-auto mb-4 w-[48px] h-[48px] md:w-[80px] md:h-[80px]"
                        />

                        <p className="text-lg md:text-2xl font-semibold mb-2">
                            Donate Money
                        </p>

                        <p className="text-gray-300 text-xs md:text-lg mb-6">
                            Your financial contribution supports vital services for our community.
                        </p>

                        <Button className="text-xs md:text-md">
                            Give Online →
                        </Button>

                        <div className="grid grid-cols-4 gap-2 mt-6">
                            {["$25", "$50", "$100", "Other"].map((amt) => (
                                <button
                                    key={amt}
                                    className="bg-[#F6F6F6] text-text py-1 rounded text-xs md:text-base w-full"
                                >
                                    {amt}
                                </button>
                            ))}
                        </div>


                        <hr className="border-white my-5" />

                        <p className="text-white text-xs md:text-lg">
                            Give by Mail
                        </p>
                    </div>

                    <div className="bg-[#1E211D] text-white rounded-lg p-8 md:p-12 text-center shadow-xl">

                        <Image
                            src="/images/support2.png"
                            alt="Donate Goods"
                            width={80}
                            height={80}
                            priority
                            className="mx-auto mb-4 w-[47px] h-[47px] md:w-[80px] md:h-[80px]"
                        />

                        <p className="text-lg md:text-2xl font-semibold mb-2">
                            Donate Goods
                        </p>

                        <p className="text-gray-300 text-xs md:text-lg mb-4">
                            Provide much-needed items to support our programs and clients.
                        </p>

                        <ul className="text-white text-xs md:text-lg text-left space-y-1 mb-6 list-disc list-inside">
                            <li>School and office supplies</li>
                            <li>Non-perishable food</li>
                            <li>Toiletries and hygiene products</li>
                            <li>Clothing, coats, shoes</li>
                            <li>New or gently used electronics</li>
                        </ul>

                        <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                            <Button variant="secondary" className="text-xs md:text-md">
                                Drop-Off Donations
                            </Button>

                            <Button className="text-xs md:text-md">
                                Request Pickup
                            </Button>
                        </div>


                    </div>

                </div>
            </Container>
        </section>
    );
}
