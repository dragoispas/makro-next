import { DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { NewNoteForm } from "./new-note-form"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export const NotesDrawerContent = () => {
    return (
        <DrawerContent>
            <DrawerHeader>
                <div className="flex align-middle gap-2">
                    <DrawerClose asChild className="cursor-pointer">
                        <ChevronRight />
                    </DrawerClose>
                    <DrawerTitle className="flex items-center">Add note</DrawerTitle>
                </div>
            </DrawerHeader>

            <NewNoteForm />

        </DrawerContent>
    )
}
