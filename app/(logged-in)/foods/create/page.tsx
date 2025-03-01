"use client";

import { useSearchParams } from "next/navigation";
import { mockProducts } from "@/app/mockData";
import CreateFoodForm from "@/components/foods/create/create-food-form";

export default function CreateFoodPage() {
    const searchParams = useSearchParams();
    const productIdParam = searchParams.get("productId");

    const productId = productIdParam ? Number(productIdParam) : undefined;

    return (
        <div>
            <h1>Create Food</h1>
            {productId !== undefined ? (
                <p>Initializing from product ID: {productId}</p>
            ) : (
                <p>Creating new food</p>
            )}
            <CreateFoodForm product={productId !== undefined ? mockProducts[productId - 1] : undefined} />
        </div>
    );
}
