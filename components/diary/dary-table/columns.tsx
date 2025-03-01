import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { Button } from "../../ui/button"

export type FoodEntryRow = {
    id: number
    food: string
    quantity: string
    protein: string
    carbs: string
    fat: string
    calories: string
}

interface Props {
    onDelete: (id: number) => void
}

export const columns = ({ onDelete }: Props): ColumnDef<FoodEntryRow>[] => [
    {
        accessorKey: "food",
        header: "Food",
    },
    {
        accessorKey: "quantity",
        header: "Quantity",
    },
    {
        accessorKey: "protein",
        header: "Protein",
    },
    {
        accessorKey: "fat",
        header: "Fat",
    },
    {
        accessorKey: "carbs",
        header: "Carbs",
    },
    {
        accessorKey: "calories",
        header: "Calories",
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const foodEntry = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => onDelete(foodEntry.id)}>
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
