import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { FcGoogle } from "react-icons/fc";

import Link from "next/link";
import RegisterForm from "./register-form";

export default function RegisterCard() {


    return (
        <Card className="max-w-md mx-auto mt-20 p-6">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
                <CardDescription className="text-center">Enter your email below to create your account</CardDescription>
            </CardHeader>
            <CardContent>
                <RegisterForm />
                <div className="flex items-center my-4">
                    <div className="flex-1 border-t" />
                    <CardDescription className="px-2">or</CardDescription>
                    <div className="flex-1 border-t" />
                </div>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <FcGoogle className="w-5 h-5" /> Sign in with Google
                </Button>
                <CardDescription className="mt-4 text-center">By clicking continue, you agree to our <Link href={"/"} className="underline">Terms of Service</Link> and <Link href={"/"} className="underline">Privacy Policy</Link>.</CardDescription>
                <CardDescription className="mt-4 text-center">Already have an account? <Link href={"/login"} className="underline">Sign in</Link></CardDescription>
            </CardContent>
        </Card>
    );
}
