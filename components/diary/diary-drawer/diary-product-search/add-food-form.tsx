import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { DateTimePicker24h } from "@/components/ui/date-time-picker";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Product } from "@/app/types";
import { ProductCard } from "./product-card-content";

const formSchema = z.object({
    timestamp: z.date(),
    quantity: z.string(),
    servingSize: z.string().nonempty("Select a serving size"),
});

interface Props {
    selectedProduct: Product;
}

export function AddFoodForm({ selectedProduct }: Props) {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            timestamp: new Date(),
            quantity: "0",
            servingSize: selectedProduct.servingSizes[0].name,
        },
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
        // api call
        console.log(values)
    }


    return (
        <>
            <ProductCard selectedProduct={selectedProduct} quantity={parseFloat(form.watch("quantity"))} multiplier={selectedProduct.servingSizes.find(size => size.name === form.watch("servingSize"))?.multiplier || selectedProduct.servingSizes[0].multiplier} />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        <FormField
                            control={form.control}
                            name="timestamp"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Timestamp</FormLabel>
                                    <FormControl>
                                        <DateTimePicker24h value={field.value} onChange={field.onChange} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Quantity</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} min={1} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="servingSize"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Serving Size</FormLabel>
                                    <FormControl>
                                        <Select value={field.value} onValueChange={field.onChange}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select serving size" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {selectedProduct.servingSizes.map((servingSize) => (
                                                    <SelectItem key={servingSize.name} value={servingSize.name}>
                                                        {servingSize.name !== 'g' ? `${servingSize.name} - ${servingSize.multiplier} g` : 'g'}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button disabled={!form.watch("quantity") || parseInt(form.watch("quantity")) < 1} type="submit">Add Product</Button>
                </form>
            </Form>
        </>
    );
}
