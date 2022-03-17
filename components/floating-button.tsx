import Link from "next/link";
import React from "react";

interface FloatingButton {
    children: React.ReactNode;
    href: string;
}

export default function FloatingButton({
    children,
    href
}: FloatingButton) {
    return (
        <Link href={href}>
            <a
                className="flex items-center justify-center
                fixed hover:bg-orange-500 bg-orange-400 aspect-square cursor-pointer
                border-0 border-transparent transition-colors bottom-24 right-5 shadow-xl
                rounded-full w-14  text-white"
            >
                {children}
            </a>
        </Link>
    )
}