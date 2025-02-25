"use client";

import { mockProducts } from "@/app/mockData";
import { SearchInput } from "../../../ui/search-input";
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
import { AddFoodForm } from "./add-food-form";

export const ProductSearch = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const searchResults = useMemo(() => {
        if (selectedProduct) setSelectedProduct(null);
        return mockProducts.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);
    // add poroduct card inside addfoodrorm?
    return ( // add quantity to ProductCard as optonal prop, add description to it to mention q / x [seize] and add it to the card
        <div className="flex flex-col gap-4 w-96">
            <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            {selectedProduct ? (
                <div className="flex flex-col gap-4 w-full">
                    <AddFoodForm selectedProduct={selectedProduct} onQuantityChange={(quantity) => console.log(quantity)} />
                    <Button onClick={() => setSelectedProduct(null)} variant="outline">Cancel</Button>
                    {/* <Button onClick={handleAddProduct}>Add Product</Button>
                    <Button variant="outline" onClick={() => setSelectedProduct(null)}>Back to Search</Button> */}
                </div>
            ) : (
                <ProductResults products={searchResults} setSelectedProduct={setSelectedProduct} />
            )}
        </div>
    );
};