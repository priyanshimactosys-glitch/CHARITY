'use client';

import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { menuData } from "./menuData";

export default function NavMenu() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (id: string) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    return (
        <div className="hidden md:flex items-center space-x-8">
            {menuData.map((menu) => (
                <div key={menu.id} className="relative">

                    {menu.children ? (
                        <>
                            <button
                                onClick={() => toggleDropdown(menu.id)}
                                className="
    relative flex items-center gap-1 font-medium
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0
    after:bg-primary
    after:transition-all after:duration-300
    hover:after:w-full
  "
                            >
                                {menu.title}
                                <ChevronDown size={18} />
                            </button>


                            {openDropdown === menu.id && (
                                <div className="absolute left-0 mt-3 w-72 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">

                                    {menu.children.map((sub, index) => (
                                        <Link
                                            key={sub.id}
                                            href={sub.slug}
                                            className={`
                        block px-4 py-3 transition
                        ${sub.highlight ? "bg-gray-100" : "hover:bg-gray-50"}
                        ${index !== menu.children.length - 1 ? "border-b border-gray-200" : ""}
                      `}
                                        >

                                            <div className="flex justify-between items-center">
                                                <span className="font-medium text-gray-900">
                                                    {sub.title}
                                                </span>

                                                {sub.highlight && (
                                                    <ArrowRight size={18} className="text-primary" />
                                                )}
                                            </div>

                                            {sub.description && (
                                                <p className="text-sm text-gray-500 mt-1">
                                                    {sub.description}
                                                </p>
                                            )}

                                        </Link>
                                    ))}

                                </div>
                            )}
                        </>
                    ) : (
                        <Link
                            href={menu.slug!}
                            className="font-medium hover:text-primary"
                        >
                            {menu.title}
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
}
