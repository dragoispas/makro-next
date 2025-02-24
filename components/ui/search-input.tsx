"use client";

import { Search } from "lucide-react";
import { Input } from "./input";
import { ChangeEventHandler } from "react";

interface Props {
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>
}

export function SearchInput({ value, onChange }: Props) {
    return (
        <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Search..."
                className="pl-10"
                onChange={onChange}
                value={value}
            />
        </div>
    )
}