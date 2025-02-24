"use client";

import { mockProducts } from "@/app/mockData";
import { SearchInput } from "../../ui/search-input";
import { ProductResults } from "./product-results";
import { Product } from "@/app/types";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DateTimePicker24h } from "@/components/ui/date-time-picker";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Pie, Tooltip } from "recharts";
import { ProductCard } from "./product-card-content";

export const ProductSearch = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [timestamp, setTimestamp] = useState<Date>(new Date());
    const [quantity, setQuantity] = useState<number>(0);
    const [servingSize, setServingSize] = useState<string>("");

    const searchResults = useMemo(() => {
        if (selectedProduct) setSelectedProduct(null);
        return mockProducts.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const handleAddProduct = () => {
        if (!selectedProduct || !timestamp || !quantity || !servingSize) return;
        // Handle adding product logic here
        console.log({
            product: selectedProduct,
            timestamp,
            quantity,
            servingSize,
        });
        // Reset form
        setSelectedProduct(null);
        setTimestamp(new Date());
        setQuantity(0);
        setServingSize("");
    };

    const handleTimestampChange = (newDate: Date) => {
        setTimestamp(newDate);
    };

    return (
        <div className="flex flex-col gap-4 w-96">
            <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            {selectedProduct ? (
                <div className="flex flex-col gap-4 ">
                    <ProductCard selectedProduct={selectedProduct} />
                    <Label>Timestamp</Label>
                    <DateTimePicker24h
                        value={timestamp}
                        onChange={handleTimestampChange}
                    />

                    <Label>Quantity</Label>
                    <Input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        placeholder="Quantity"
                        min={0}
                    />
                    <Label>Serving size</Label>
                    <Select value={servingSize} onValueChange={setServingSize}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select serving size" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* <Button onClick={handleAddProduct}>Add Product</Button>
                    <Button variant="outline" onClick={() => setSelectedProduct(null)}>Back to Search</Button> */}
                </div>
            ) : (
                <ProductResults products={searchResults} setSelectedProduct={setSelectedProduct} />
            )}
        </div>
    );
};