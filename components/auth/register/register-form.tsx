"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";

const authSchema = z.object({
    email: z.string().email("Invalid email"),
});

export default function RegisterForm() {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(authSchema),
        defaultValues: { email: "" },
    });

    const onSubmit = (values: z.infer<typeof authSchema>) => {
        console.log("Form Submitted", values);
        router.push("/password"); // Navigate only if form is valid
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="email">Email</Label>
                            <FormControl>
                                <Input id="email" {...field} placeholder="Enter your email" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">
                    Continue
                </Button>
            </form>
        </Form>
    );
}
