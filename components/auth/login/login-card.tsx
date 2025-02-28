import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import LoginForm from "./login-form";

export default function LoginCard() {

    return (
        <Card className="max-w-md mx-auto mt-20 p-6">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Welcome!</CardTitle>
                <CardDescription className="text-center">Sign in with your email and password</CardDescription>
            </CardHeader>
            <CardContent>
                <LoginForm />
                <div className="flex items-center my-4">
                    <div className="flex-1 border-t" />
                    <CardDescription className="px-2">or</CardDescription>
                    <div className="flex-1 border-t" />
                </div>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <FcGoogle className="w-5 h-5" /> Sign in with Google
                </Button>
                <CardDescription className="text-center mt-4">
                    Don't have an account? <Link href="/register" className="underline">Sign up</Link>
                </CardDescription>
            </CardContent>
        </Card>
    );
}
