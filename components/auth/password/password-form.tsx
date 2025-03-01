"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSearchParams } from "next/navigation";

const authSchema = z
    .object({
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords must match",
        path: ["confirmPassword"], // Attach error to confirmPassword field
    });

export default function PasswordForm() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email");

    const form = useForm({
        resolver: zodResolver(authSchema),
        defaultValues: { password: "", confirmPassword: "" },
    });

    const onSubmit = (values: z.infer<typeof authSchema>) => {
        console.log("Form Submitted", { ...values, email });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Password Field */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="password">Password</Label>
                            <FormControl>
                                <Input id="password" type="password" {...field} placeholder="Enter your password" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Confirm Password Field */}
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <FormControl>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    {...field}
                                    placeholder="Re-enter your password"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <Button type="submit" className="w-full">
                    Create account
                </Button>
            </form>
        </Form>
    );
}
