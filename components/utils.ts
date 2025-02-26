import { Macros, Product } from "@/app/types";

export function calculatedFoodDetails(product: Product, quantity: number, multiplier: number = 1) {
    const calories = product.calories * quantity * multiplier / 100;
    const protein = product.macronutrients.protein * quantity * multiplier / 100;
    const fat = product.macronutrients.fat * quantity * multiplier / 100;
    const carbs = product.macronutrients.carbs * quantity * multiplier / 100;

    return {
        calories,
        protein,
        fat,
        carbs,
    }
}

export function displayValue(value: number) {
    if (value >= 10) {
        value = parseFloat(value.toFixed(0))
    } else {
        value = parseFloat(value.toFixed(1))
    }

    return value
}

export function getMacroProcentages(macros: Macros) {
    let protein = macros.protein * 4;
    let fat = macros.fat * 9;
    let carbs = macros.carbs * 4
    const total = protein + fat + carbs;

    protein = displayValue(protein * 100 / total);
    fat = displayValue(fat * 100 / total);
    carbs = displayValue(carbs * 100 / total);

    return {
        protein,
        fat,
        carbs
    }
}