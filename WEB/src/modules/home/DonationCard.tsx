import Button from "@/src/components/common/Button";
import Image from "next/image";

export default function DonationCard() {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex mb-4 w-100 overflow-hidden rounded-md border border-gray-300">
        <button className="flex-1 py-1 bg-gray-200 font-medium text-gray-700">
          Give once
        </button>

        <button className="flex-1 py-1 bg-red-600 text-white font-medium">
          Monthly
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-xl  text-black w-100">
        <p className="text-base text-center rounded-xl text-text p-2 bg-gray-200 mb-4">
          Choose an amount to give per month
        </p>
        <div className="px-3">
          <div className="grid grid-cols-3 gap-3 mb-4">
            <AmountBtn value="$10 " />
            <AmountBtn value="$20" />
            <AmountBtn value="$30" />
            <AmountBtn value="$100" />
            <AmountBtn value="Other amount" className="col-span-2" />
          </div>

          <Button
            variant="primary"
            className="w-full py-2 font-semibold justify-center"
          >
            Join Today
          </Button>
        </div>
        <div className="border-t border-dashed border-gray-300 my-4"></div>

        <p className="text-sm text-gray-700 text-center pb-2">
          Your <span className="font-semibold">$40.00</span> monthly donation can
          give <span className="font-semibold">12</span> people clean water every
          year. 100% funds water projects.
        </p>
      </div>

      <p className="text-xs text-[#ECEBF3] mt-3 w-96 mx-0 flex items-start gap-1  justify-start text-center">
        <span className="mt-1">
        <Image
          src="/images/Vector.png"
          alt="Secure Payment"
          width={11}
          height={13}
          priority
        />
        </span>
        <span>
          Secure Payment · This site is protected by reCAPTCHA and the Google
          Privacy Policy and Terms of Service apply.
        </span>
      </p>

    </div>
  );
}
function AmountBtn({ value, active = false, className = "" }: any) {
  return (
    <button
      className={`
        py-2 rounded-md font-medium text-sm border transition
        ${active ? "bg-red-600 text-white border-red-600" : "bg-gray-100 hover:bg-gray-200"}
        ${className}
      `}
    >
      {value} <span style={{ fontSize: '10px' }}>USD/mo</span>
    </button>
  );
}
