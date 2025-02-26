

// const formSchema = z.object({
//     timestamp: z.date(),
//     quantity: z.string(),
//     servingSize: z.string().nonempty("Select a serving size"),
// });

import { Button } from "@/components/ui/button";
import { DrawerClose } from "@/components/ui/drawer";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"

const formSchema = z.object({
    title: z.string(),
    content: z.string(),
});

export const NewNoteForm = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "Note",
            content: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // api call
        console.log(values)
    }

    return (
        <div className="w-104 p-4 h-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit((values) => onSubmit(values))} className="space-y-4 flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                    <Textarea {...field} className="max-h-96 field-sizing-content" />
                                    {/* to make this full width availabnle in drawer */}
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <div className="flex flex-col gap-4">
                        <Button type="submit">Save note</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </div>
                </form>
            </Form>
        </div>
    );
}