import { DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { ProductSearch } from "./diary-product-search/product-search"

export const DiaryDrawerContent = () => {
    return (
        <DrawerContent>

            <DrawerHeader>
                <DrawerTitle>Add food to diary</DrawerTitle>
            </DrawerHeader>

            <div className="p-4">
                <ProductSearch />

            </div>

        </DrawerContent>
    )
}