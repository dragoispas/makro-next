"use client";

import { mockProducts } from "@/app/mockData";
import { SearchInput } from "../../../ui/search-input";
import { ProductResults } from "./product-results";
import { Product } from "@/app/types";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { AddFoodForm } from "../form/add-food-form";

export const ProductSearch = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const searchResults = useMemo(() => {
        if (selectedProduct) setSelectedProduct(null);
        return mockProducts.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return (

        <div className="flex flex-col gap-4 w-104 p-4 overflow-auto">
            <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            {selectedProduct ? (
                <div className="flex flex-col gap-4 w-full">
                    <AddFoodForm selectedProduct={selectedProduct} />
                    <Button onClick={() => setSelectedProduct(null)} variant="outline">Back to Search</Button>
                </div>
            ) : (
                <ProductResults products={searchResults} setSelectedProduct={setSelectedProduct} />
            )}
        </div>

    );
};