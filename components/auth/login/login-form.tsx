"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckboxWithText } from "../../ui/checkbox-with-text";
import Link from "next/link";

const authSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginForm() {
    const form = useForm({
        resolver: zodResolver(authSchema),
        defaultValues: { email: "", password: "" },
    });

    const onSubmit = (values: z.infer<typeof authSchema>) => {
        console.log("Form Submitted", values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <Label>Email</Label>
                            <FormControl>
                                <Input {...field} placeholder="Enter your email" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <Label>Password</Label>
                            <FormControl>
                                <Input type="password" {...field} placeholder="Enter your password" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-between align-middle">
                    <CheckboxWithText label="Remember me" />
                    <Link href={"/login"} className="text-sm font-semibold">Forgot password</Link>
                </div>
                <Button type="submit" className="w-full">Log In</Button>
            </form>
        </Form>
    );
}
