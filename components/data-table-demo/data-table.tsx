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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
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

export function DiaryTable({ data }: { data: FoodEntry[] }) {
    const foodEntryRows = React.useMemo(() => getFoodEntryRows(data), [data]);

    const table = useReactTable({
        data: foodEntryRows,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <Card>
            <CardHeader>
                <CardTitle>Diary</CardTitle>
                {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>

                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
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
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
            {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}

        </Card>
    )
}
