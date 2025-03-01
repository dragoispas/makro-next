"use client"

import * as React from "react"
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { FoodEntry } from "@/app/types"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import { PlusCircle } from "lucide-react";
import { columns, FoodEntryRow } from "./columns"

const getFoodEntryRows = (foodEntries: FoodEntry[]): FoodEntryRow[] =>
    foodEntries.map(({ id, quantity, product }) => {
        const { name, calories, macronutrients } = product;
        const format = (value: number, decimals: number, unit: string) => `${(value * quantity / 100).toFixed(decimals)} ${unit}`;

        return {
            id,
            food: name,
            quantity: `${quantity} g`,
            protein: format(macronutrients.protein, 1, 'g'),
            fat: format(macronutrients.fat, 1, 'g'),
            carbs: format(macronutrients.carbs, 1, 'g'),
            calories: format(calories, 0, 'kcal'),
        };
    });

export function DiaryTable({ data }: { data?: FoodEntry[] }) {
    const foodEntryRows = React.useMemo(() => getFoodEntryRows(data || []), [data]);

    const table = useReactTable({
        data: foodEntryRows,
        columns: columns({ onDelete }),
        getCoreRowModel: getCoreRowModel(),
    });

    async function onDelete(id: number) {

        const response = await fetch(`/api/food-entries/${id}`, {
            method: 'DELETE',
        });

        const data = await response.json();
        console.log('Food entry deleted', data);

        //todo some error handling
    }

    return (
        <Card>
            {foodEntryRows.length ?
                <CardHeader>
                    <CardTitle>Diary</CardTitle>
                </CardHeader>
                :
                null
            }
            <CardContent>
                {foodEntryRows.length ? (
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (
                    <div className="flex flex-col items-center justify-center text-muted-foreground h-48">
                        <PlusCircle className="w-10 h-10 mb-2" />
                        <p className="text-center">No food entries found. Add one to the diary!</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
