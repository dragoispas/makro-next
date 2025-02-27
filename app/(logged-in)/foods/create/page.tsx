"use client";

import CreateFoodForm from "@/components/foods/create/create-food-form";
import { useSearchParams } from "next/navigation";

export default function CreateFoodPage() {
    const searchParams = useSearchParams();
    const productId = searchParams.get("productId"); // Read the product ID

    return (
        <div>
            <h1>Create Food</h1>
            {productId ? <p>Initializing from product ID: {productId}</p> : <p>Creating new food</p>}
            <CreateFoodForm></CreateFoodForm>
        </div>
    );
}
