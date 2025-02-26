export type Product = {
    id: number,
    name: string,
    calories: number,
    macronutrients: Macros,
    servingSizes: ServingSize[],
    source: string,
}

export type ServingSize = {
    name: string,
    multiplier: number,
}

export type Macros = {
    protein: number,
    fat: number,
    carbs: number,
}

export type FoodEntry = {
    id: number,
    product: Product,
    quantity: number,
    time: string,
}

export type NoteEntry = {
    id: number,
    title?: string,
    content: string,
    date: string,
}

export type WeightEntry = {
    id: number,
    weight: number,
    date: string,
}