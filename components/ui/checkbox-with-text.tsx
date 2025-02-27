import { Checkbox } from "./checkbox";

interface Props {
    label: string;
    info?: string;
}

export function CheckboxWithText({ label, info }: Props) {
    return (
        <div className="items-center flex space-x-2 align-middle">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
                <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    {label}
                </label>
                {info && <p className="text-sm text-muted-foreground">
                    {info}
                </p>}
            </div>
        </div>
    )
}