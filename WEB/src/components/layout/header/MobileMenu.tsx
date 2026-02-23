"use client";

import { menuData } from "./menuData";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Mail, User, Globe } from "lucide-react";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: (val: boolean) => void;
}

export default function MobileMenu({ open, setOpen }: Props) {
  const [active, setActive] = useState<string | null>(null);

  if (!open) return null;

  const toggle = (id: string) => {
    setActive(active === id ? null : id);
  };

  return (
    <div className="fixed inset-0 bg-[#F7EEFA] z-[999]">

      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 bg-white">

        {/* LEFT CLOSE BUTTON */}
        <div className="flex flex-row">
        <button onClick={() => setOpen(false)} className="me-3">
          <X size={28} />
        </button>

        {/* CENTER LOGO */}
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={93}
          height={60}
        /></div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">

          {/* Language */}
          <button className="flex items-center gap-1 text-sm font-medium">
            <Globe size={16} />
            Eng
          </button>

          {/* Sign In */}
          <button className="text-sm font-medium">
            Sign In
          </button>

          {/* Divider */}
          <div className="w-[1px] h-5 bg-gray-400"></div>

          {/* Give Button */}
          <button className="bg-red-600 text-white px-3 py-1.5 rounded-md text-sm font-semibold flex items-center gap-1">
            Give
            <img
              src="/images/drop.png"
              alt="give"
              className="w-3 h-4"
            />
          </button>

        </div>

      </div>


      <div className="px-5 py-6 space-y-4">

        {menuData.map((menu) => (

          <div key={menu.id}>

            <button
              onClick={() => menu.children && toggle(menu.id)}
              className="w-full flex justify-between items-center py-3 border-b border-gray-400  text-left"
            >
              <span className="font-medium text-sm">
                {menu.title}
              </span>

              {menu.children && (
                <span className="w-7 h-7 flex items-center justify-center border border-text rounded-full">
                  {active === menu.id ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </span>
              )}

            </button>

            {menu.children && active === menu.id && (
              <div className="pl-3 pt-3 space-y-3">

                {menu.children.map((sub) => (
                  <Link
                    key={sub.id}
                    href={sub.slug}
                    onClick={() => setOpen(false)}
                    className="block text-gray-700"
                  >
                    {sub.title}
                  </Link>
                ))}

              </div>
            )}


          </div>

        ))}

      </div>

      <div className="px-5 space-y-4">

        <div className="flex items-center gap-3 text-gray-700">
          <User size={18} />
           {/* <Image
            src="/images/profile.png"
            alt="Logo"
            width={14}
            height={12}
            priority
          /> */}
          <span className="text-xs text-text">Sign in</span>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <Image
            src="/images/mail.png"
            alt="Logo"
            width={14}
            height={12}
            priority
          />
          <span className="text-xs text-text">Get our emails to stay in the know</span>
        </div>

      </div>

    </div>
  );
}
