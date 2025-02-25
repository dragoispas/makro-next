import { Button } from "@/components/ui/button"
import { Drawer, DrawerTrigger } from "@/components/ui/drawer"
import { Plus } from "lucide-react"
import { NotesDrawerContent } from "./drawer-content"

export const NotesDrawer = () => {
    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <Button>
                    <Plus /> Add note
                </Button>
            </DrawerTrigger>
            <NotesDrawerContent />
        </Drawer>
    )
}