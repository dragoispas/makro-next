"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash } from "lucide-react";
import * as z from "zod";
import { useState } from "react";
import { Product } from "@/app/types";

const servingSchema = z.object({
    name: z.string().min(1, "Serving name is required"),
    multiplier: z.number().positive("Multiplier must be greater than 0"),
});

const foodSchema = z.object({
    foodName: z.string(),
    calories: z.string(),
    protein: z.string(),
    carbs: z.string(),
    fat: z.string(),
    fiber: z.string(),
    sugar: z.string(),
    saturatedFat: z.string(),
    transFat: z.string(),
    cholesterol: z.string(),
    sodium: z.string(),
    servingSizes: z.array(servingSchema),
});

type FoodFormValues = z.infer<typeof foodSchema>;

interface Props {
    product?: Product;
}

export default function CreateFoodForm({ product }: Props) {
    const [servingSizes, setServingSizes] = useState<FoodFormValues["servingSizes"]>(product?.servingSizes || []);
    const [newServing, setNewServing] = useState({ name: "", multiplier: "" });

    const form = useForm<FoodFormValues>({
        resolver: zodResolver(foodSchema),
        defaultValues: {
            foodName: product?.name || "",
            calories: product?.calories.toString() || "0",
            protein: product?.macronutrients.protein.toString() || "0",
            carbs: product?.macronutrients.carbs.toString() || "0",
            fat: product?.macronutrients.fat.toString() || "0",
            fiber: "",
            sugar: "",
            saturatedFat: "",
            transFat: "",
            cholesterol: "",
            sodium: "",
            servingSizes: [],
        },
    });

    const addServingSize = () => {
        const parsedMultiplier = parseFloat(newServing.multiplier);
        if (newServing.name && !isNaN(parsedMultiplier) && parsedMultiplier > 0) {
            setServingSizes([...servingSizes, { name: newServing.name, multiplier: parsedMultiplier }]);
            setNewServing({ name: "", multiplier: "" });
        }
    };

    const removeServingSize = (index: number) => {
        setServingSizes(servingSizes.filter((_, i) => i !== index));
    };

    const onSubmit = (values: FoodFormValues) => {
        console.log("Food Submitted", { ...values, servingSizes });
    };

    return (
        <Card className="max-w-lg mx-auto p-4">
            <CardHeader>
                <CardTitle>Add Food</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField control={form.control} name="foodName" render={({ field }) => (
                            <FormItem>
                                <Label>Name</Label>
                                <FormControl><Input {...field} placeholder="Food Name" /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="calories" render={({ field }) => (
                            <FormItem>
                                <Label>Calories</Label>
                                <FormControl><Input type="number" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="protein" render={({ field }) => (
                            <FormItem>
                                <Label>Protein</Label>
                                <FormControl><Input type="number" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="fat" render={({ field }) => (
                            <FormItem>
                                <Label>Fat</Label>
                                <FormControl><Input type="number" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="carbs" render={({ field }) => (
                            <FormItem>
                                <Label>Carbs</Label>
                                <FormControl><Input type="number" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <div className="grid grid-cols-2 gap-4">
                            {["fiber", "sugar", "saturatedFat", "transFat", "cholesterol", "sodium"].map((fieldName) => (
                                <FormField key={fieldName} control={form.control} name={fieldName as keyof FoodFormValues} render={({ field }) => (
                                    <FormItem>
                                        <Label>{fieldName.replace(/([A-Z])/g, " $1")}</Label>
                                        <FormControl><Input type="number" /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            ))}
                        </div>

                        <div>
                            <Label>Serving Sizes</Label>
                            {servingSizes.map((serving, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span>{serving.name} - {serving.multiplier}g</span>
                                    <Button variant="ghost" size="icon" onClick={() => removeServingSize(index)}>
                                        <Trash className="w-4 h-4 text-red-500" />
                                    </Button>
                                </div>
                            ))}
                            <div className="flex gap-2 mt-2">
                                <Input value={newServing.name} onChange={(e) => setNewServing({ ...newServing, name: e.target.value })} placeholder="Unit (e.g., Cup)" />
                                <Input value={newServing.multiplier} onChange={(e) => setNewServing({ ...newServing, multiplier: e.target.value })} type="number" placeholder="Grams" />
                                <Button type="button" onClick={addServingSize}><Plus className="w-4 h-4" /></Button>
                            </div>
                        </div>

                        <Button type="submit" className="w-full">Submit</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
