import { DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { NewNoteForm } from "./new-note-form"
import { Button } from "@/components/ui/button"

export const NotesDrawerContent = () => {
    return (
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>Add note</DrawerTitle>
            </DrawerHeader>

            <NewNoteForm />

        </DrawerContent>
    )
}
