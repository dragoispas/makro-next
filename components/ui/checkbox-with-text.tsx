import { Checkbox } from "./checkbox";

interface Props {
    children: React.ReactNode;
    info?: string;
}

export function CheckboxWithText({ children, info }: Props) {
    return (
        <div className="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
                <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    {children}
                </label>
                {info && <p className="text-sm text-muted-foreground">
                    {info}
                </p>}
            </div>
        </div>
    )
}