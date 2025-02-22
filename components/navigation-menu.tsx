import { cn } from "@/components/ui/lib/utils";
import Link from "next/link"

const NavigationMenu = () => {
    return (
        <nav className="flex gap-4 p-4 bg-muted rounded-lg shadow-md mb-4 justify-center">
            <Link href="/" className={cn("text-sm font-medium hover:text-primary")}>
                Home
            </Link>
            <Link href="/diary" className={cn("text-sm font-medium hover:text-primary")}>
                Diary
            </Link>
            <Link href="/foods" className={cn("text-sm font-medium hover:text-primary")}>
                Foods
            </Link>
        </nav>
    );
}

export default NavigationMenu;