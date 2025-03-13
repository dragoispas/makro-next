"use client";

import Link from "next/link";
import { Button } from "./ui/button"
import { Card } from "./ui/card";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const SidebarMenuProvider = ({ children }: Props) => {
    const currentPath = usePathname();
    const { status, data: session } = useSession();
    if (status === 'unauthenticated') return null;
    return (
        <>
            <div className="fixed flex flex-col justify-between h-svh w-44 py-8 px-4">
                <div className="flex flex-col gap-0.5">
                    <Link href={"/diary"} className={`inline-flex rounded-md justify-start text-sm p-1.5 hover:bg-zinc-100 ${currentPath === '/diary' ? "font-semibold bg-zinc-100 dark:bg-zinc-800 " : ""}`}>
                        Diary
                    </Link>
                    <Link href={"/foods"} className={`inline-flex rounded-md justify-start text-sm p-1.5 hover:bg-zinc-100 ${currentPath === '/foods' ? "font-semibold bg-zinc-100 dark:bg-zinc-800" : ""}`}>
                        Foods
                    </Link>
                </div>
            </div>
            <div className="ml-44 w-full">
                {children}
            </div>
        </>
    )
}