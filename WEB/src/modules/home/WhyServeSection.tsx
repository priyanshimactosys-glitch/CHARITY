import Container from "@/src/components/common/Container";
import Image from "next/image";
import { Play } from "lucide-react";

export default function WhyServeSection() {
    return (
        <section className="bg-[#F7CCCC] py-10 md:py-25">
            <Container>

                <p className="text-center text-2xl md:text-4xl font-bold mb-8 md:mb-12">
                    Why We Serve, Why It Matters
                </p>

                <div className="relative rounded-2xl overflow-hidden">

                    <Image
                        src="/images/whyserve.png"
                        alt="Why We Serve"
                        width={1201}
                        height={514}
                        className="w-full h-auto rounded object-cover w-[343px] h-[146px] md:w-[1201px] md:h-[514px]"

                    />

                    <button className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-[#FDC9CC] rounded-full p-1">
                            <div className="bg-[#E5868C] rounded-full p-2">
                                <div className="bg-white rounded-full p-1">
                                    <div className="bg-[#CA4D55] rounded-full p-3 flex items-center justify-center">
                                        <Play className="text-white fill-white" size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>

            </Container>
        </section>
    );
}
