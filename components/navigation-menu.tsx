"use client";

import { cn } from "@/components/ui/lib/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationMenu = () => {
    const currentPath = usePathname();
    const { status, data: session } = useSession();
    if (status === 'unauthenticated') return null;

    return (
        <>
            <nav className="gap-4 p-4 sticky top-0 w-full bg-white bg-opacity-75 backdrop-blur-sm z-10">
                <div className="flex gap-4 justify-center w-full relative">
                    <Link
                        href="/"
                        className={cn(
                            "text-sm font-medium text-primary opacity-75",
                            currentPath === "/" ? "opacity-100" : "text-muted-foreground",
                            "hover:opacity-100"
                        )}
                    >
                        Home
                    </Link>
                    <Link
                        href="/diary"
                        className={cn(
                            "text-sm font-medium text-primary opacity-75",
                            currentPath === "/diary" ? "opacity-100" : "text-muted-foreground",
                            "hover:opacity-100"
                        )}
                    >
                        Diary
                    </Link>
                    <Link
                        href="/foods"
                        className={cn(
                            "text-sm font-medium text-primary opacity-75",
                            currentPath.includes("/foods") ? "opacity-100" : "text-muted-foreground",
                            "hover:opacity-100"
                        )}
                    >
                        Foods
                    </Link>
                    <div className="absolute right-0">{session?.user?.email}</div>
                </div>
            </nav>
        </>
    );
};

export default NavigationMenu;
