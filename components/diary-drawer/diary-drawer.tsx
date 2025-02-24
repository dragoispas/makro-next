import { Plus } from "lucide-react"
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer"
import { ProductSearch } from "./diary-product-search/product-search"
import { Button } from "../ui/button"

export const DiaryDrawer = () => {
    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <Button>
                    <Plus /> Add food to diary
                </Button>
            </DrawerTrigger>
            <DrawerContent>

                <DrawerHeader>
                    <DrawerTitle>Add food to diary</DrawerTitle>
                </DrawerHeader>

                <div className="p-4">
                    <ProductSearch />
                </div>

                <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}