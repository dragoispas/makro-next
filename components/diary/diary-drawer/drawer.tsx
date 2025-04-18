import { Plus } from "lucide-react"
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../../ui/drawer"
import { ProductSearch } from "./search/product-search"
import { Button } from "../../ui/button"
import { DiaryDrawerContent } from "./drawer-content"

export const DiaryDrawer = () => {
    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <Button>
                    <Plus /> Add food to diary
                </Button>
            </DrawerTrigger>
            <DiaryDrawerContent />
        </Drawer>
    )
}