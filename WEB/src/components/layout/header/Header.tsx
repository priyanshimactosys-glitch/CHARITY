"use client";

import Image from "next/image";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import { Globe, Menu } from "lucide-react";
import Button from "../../common/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-white relative z-50 ">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-20">

          <div className="flex items-center gap-3">

            <button
              className="lg:hidden"
              onClick={() => setOpenMenu(true)}
            >
              <Menu size={28} />
            </button>

            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={110}
              height={65}
              priority
            />

            <div className="hidden lg:block ml-6">
              <NavMenu />
            </div>

          </div>


          <div className="flex items-center gap-3 sm:gap-5">

            <button className="flex items-center gap-1 sm:gap-2 font-semibold hover:text-red-600 text-sm sm:text-base">
              <Globe size={18} />
              Eng
            </button>

            <button onClick={()=>router.push('/login')} className="font-semibold hover:text-red-600 text-sm sm:text-base">
              Sign In
            </button>
            <div className="w-[1px] h-6 bg-text"></div>

            <Button
              variant="primary"
              icon={
                <img
                  src="/images/drop.png"
                  alt="give"
                  className="w-3 h-4"
                />
              }
            >
              Give
            </Button>

          </div>

        </div>

      </div>

      <MobileMenu open={openMenu} setOpen={setOpenMenu} />

    </nav>
  );
}
