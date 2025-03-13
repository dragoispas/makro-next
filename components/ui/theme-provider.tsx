"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface Props {
    children: React.ReactNode;
}

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider> & Props) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
            {children}
        </NextThemesProvider>
    );
}
