import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import PasswordForm from "./password-form";

export default function PasswordCard() {

    return (
        <Card className="max-w-md mx-auto mt-20 p-6">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Create password</CardTitle>
                <CardDescription className="text-center">Enter a password for your account</CardDescription>
            </CardHeader>
            <CardContent>
                <PasswordForm />
                <CardDescription className="mt-4 text-center">Already have an account? <Link href={"/login"} className="underline">Sign in</Link></CardDescription>
            </CardContent>
        </Card>
    );
}
