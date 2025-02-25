import { Product } from "@/app/types";

export default function calculatedFoodDetails(product: Product, quantity: number, multiplier: number = 1) {
    const calories = (product.calories * quantity * multiplier / 100).toFixed(0);
    const protein = (product.macronutrients.protein * quantity * multiplier / 100).toFixed(1);
    const fat = (product.macronutrients.fat * quantity * multiplier / 100).toFixed(1);
    const carbs = (product.macronutrients.carbs * quantity * multiplier / 100).toFixed(1);

    return {
        calories,
        protein,
        fat,
        carbs,
    }
}