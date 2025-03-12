"use client";

import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"
import { signIn } from "next-auth/react";

export const GoogleButton = () => {
    return (
        <Button onClick={() => signIn("google")} variant="outline" className="w-full flex items-center justify-center gap-2">
            <FcGoogle className="w-5 h-5" /> Sign in with Google
        </Button>
    )
}