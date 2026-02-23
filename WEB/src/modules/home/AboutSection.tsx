import Button from '@/src/components/common/Button'
import Container from '@/src/components/common/Container'
import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
    return (
        <div className="bg-[#f8cece]  md:pt-42  shadow-lg">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">

                        <p className="text-2xl md:text-4xl font-bold text-black mb-6">
                            About V&apos;Peters Initiative
                        </p>

                        <p className="text-sm md:text-lg text-text leading-relaxed mb-8">
                            We are a dedicated nonprofit organization committed to supporting immigrants and low-income families in our community. Our volunteers and supporter provide crucial assistance through education, resources, and advocacy programs that help newcomers and those in need
                        </p>

                        <Button>
                            Learn More
                            <span className="text-lg">›</span>
                        </Button>

                    </div>


                    <div className="md:w-1/2">
                        <Image
                            src="/images/about.png"
                            alt="Veters Initiative Logo"
                            width={575}
                            height={350}
                            priority
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutSection