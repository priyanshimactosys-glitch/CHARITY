'use client';

import { useState } from "react";
import StepOne from "./components/StepOne";
import Container from "@/src/components/common/Container";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import Confirmation from "./components/Confirmation";

export default function BookAppointmentPage() {

  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <section className="py-12 bg-gray-50 min-h-screen">

      <Container>


        {step === 1 && <StepOne next={nextStep} />}
        {step === 2 && <StepTwo next={nextStep} back={prevStep} />}
        {step === 3 && <StepThree next={nextStep} back={prevStep} />}
        {step === 4 && <StepFour next={nextStep} back={prevStep} />}
        {step === 5 && <Confirmation />}

      </Container>

    </section>
  );
}