"use client";

import { Product } from "@/app/types";
import { ScrollArea } from "../../ui/scroll-area";
import { Separator } from "../../ui/separator";
import { useState } from "react";

interface Props {
    products?: Product[]
    setSelectedProduct: (product: Product) => void
}

export const ProductResults = ({ products, setSelectedProduct }: Props) => { // Todo: if no products, display recent 
    return (
        <ScrollArea className="h-full rounded-md border">
            <div className="p-3">
                {products && products.length > 0 ? <h4 className="mb-4 text-sm font-medium leading-none">Recent</h4> : null}
                {products && products.length > 0 ? products.map((product, index) => (
                    <div key={product.id}>
                        <button onClick={() => setSelectedProduct(product)} className="flex items-center justify-between w-full hover:bg-zinc-100 dark:hover:bg-zinc-800 py-2 px-1">
                            <div className="text-sm">
                                {product.name}
                            </div>
                            <div className="text-sm opacity-50">
                                {product.source}
                            </div>
                        </button>
                        {index !== products.length - 1 ? <Separator /> : null}
                    </div>
                )) : <div>No products found</div>}
            </div>
        </ScrollArea>
    );
}