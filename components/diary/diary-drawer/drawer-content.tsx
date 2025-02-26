import { DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { ProductSearch } from "./search/product-search"
import { ChevronRight, X } from "lucide-react"

export const DiaryDrawerContent = () => {
    return (
        <DrawerContent>
            <DrawerHeader>
                <div className="flex align-middle gap-2">
                    <DrawerClose asChild className="cursor-pointer">
                        <ChevronRight />
                    </DrawerClose>
                    <DrawerTitle className="flex items-center">Add food to diary</DrawerTitle>
                </div>
            </DrawerHeader>

            <ProductSearch />
        </DrawerContent>
    )
}