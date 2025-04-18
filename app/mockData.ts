import { Product, FoodEntry, NoteEntry, WeightEntry } from "./types";
import { format, subDays } from "date-fns";

// Mock Products
export const mockProducts: Product[] = [
    { id: 1, name: "Chicken Breast", nutrients: { calories: 165, protein: 31, fat: 3.6, carbs: 0 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "large", multiplier: 135 }, { name: "cup", multiplier: 245 }], source: "USDA" },
    { id: 2, name: "Salmon", nutrients: { calories: 208, protein: 25, fat: 13, carbs: 0 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "fillet", multiplier: 356 }, { name: "oz", multiplier: 28 }], source: "USDA" },
    { id: 3, name: "Eggs", nutrients: { calories: 155, protein: 13, fat: 10, carbs: 1 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "piece", multiplier: 50 }, { name: "large", multiplier: 63 }], source: "USDA" },
    { id: 4, name: "Greek Yogurt", nutrients: { calories: 100, protein: 10, fat: 5, carbs: 4 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "cup", multiplier: 245 }, { name: "tbsp", multiplier: 15 }], source: "USDA" },
    { id: 5, name: "Oats", nutrients: { calories: 389, protein: 11, fat: 5, carbs: 67 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "cup", multiplier: 81 }, { name: "tbsp", multiplier: 10 }], source: "USDA" },
    { id: 6, name: "Banana", nutrients: { calories: 89, protein: 1.3, fat: 0.3, carbs: 27 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "piece", multiplier: 118 }, { name: "small", multiplier: 101 }], source: "USDA" },
    { id: 7, name: "Almonds", nutrients: { calories: 579, protein: 21, fat: 49, carbs: 22 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "cup", multiplier: 143 }, { name: "oz", multiplier: 28 }], source: "USDA" },
    { id: 8, name: "Avocado", nutrients: { calories: 160, protein: 2, fat: 15, carbs: 9 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "piece", multiplier: 201 }, { name: "half", multiplier: 100 }], source: "USDA" },
    { id: 9, name: "Broccoli", nutrients: { calories: 55, protein: 3.7, fat: 0.6, carbs: 11 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "cup", multiplier: 91 }, { name: "floret", multiplier: 25 }], source: "USDA" },
    { id: 10, name: "Brown Rice", nutrients: { calories: 123, protein: 2.7, fat: 1, carbs: 25.6 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "cup", multiplier: 195 }, { name: "tbsp", multiplier: 15 }], source: "USDA" },
    { id: 11, name: "Apple", nutrients: { calories: 52, protein: 0.3, fat: 0.2, carbs: 14 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "piece", multiplier: 182 }, { name: "small", multiplier: 150 }], source: "USDA" },
    { id: 12, name: "Carrot", nutrients: { calories: 41, protein: 0.9, fat: 0.2, carbs: 10 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "piece", multiplier: 61 }, { name: "cup", multiplier: 128 }], source: "USDA" },
    { id: 13, name: "Spinach", nutrients: { calories: 23, protein: 2.9, fat: 0.4, carbs: 3.6 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "cup", multiplier: 30 }, { name: "bunch", multiplier: 340 }], source: "USDA" },
    { id: 14, name: "Sweet Potato", nutrients: { calories: 86, protein: 1.6, fat: 0.1, carbs: 20 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "piece", multiplier: 130 }, { name: "cup", multiplier: 200 }], source: "USDA" },
    { id: 15, name: "Quinoa", nutrients: { calories: 120, protein: 4.1, fat: 1.9, carbs: 21.3 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "cup", multiplier: 185 }, { name: "tbsp", multiplier: 15 }], source: "USDA" },
    { id: 16, name: "Peanut Butter", nutrients: { calories: 588, protein: 25, fat: 50, carbs: 20 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "tbsp", multiplier: 16 }, { name: "cup", multiplier: 258 }], source: "USDA" },
    { id: 17, name: "Tofu", nutrients: { calories: 76, protein: 8, fat: 4.8, carbs: 1.9 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "block", multiplier: 349 }, { name: "slice", multiplier: 100 }], source: "USDA" },
    { id: 18, name: "Blueberries", nutrients: { calories: 57, protein: 0.7, fat: 0.3, carbs: 14 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "cup", multiplier: 148 }, { name: "tbsp", multiplier: 10 }], source: "USDA" },
    { id: 19, name: "Cottage Cheese", nutrients: { calories: 98, protein: 11, fat: 4.3, carbs: 3.4 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "cup", multiplier: 210 }, { name: "tbsp", multiplier: 14 }], source: "USDA" },
    { id: 20, name: "Strawberries", nutrients: { calories: 32, protein: 0.7, fat: 0.3, carbs: 7.7 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "cup", multiplier: 152 }, { name: "piece", multiplier: 12 }], source: "USDA" },
    { id: 21, name: "Pork Chop", nutrients: { calories: 231, protein: 25, fat: 13, carbs: 0 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "piece", multiplier: 200 }, { name: "oz", multiplier: 28 }], source: "USDA" },
    { id: 22, name: "Lentils", nutrients: { calories: 116, protein: 9, fat: 0.4, carbs: 20 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "cup", multiplier: 198 }, { name: "tbsp", multiplier: 12 }], source: "USDA" },
    { id: 23, name: "Cheddar Cheese", nutrients: { calories: 403, protein: 25, fat: 33, carbs: 1.3 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "slice", multiplier: 28 }, { name: "cup", multiplier: 132 }], source: "USDA" },
    { id: 24, name: "Zucchini", nutrients: { calories: 17, protein: 1.2, fat: 0.3, carbs: 3.1 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "piece", multiplier: 196 }, { name: "cup", multiplier: 124 }], source: "USDA" },
    { id: 25, name: "Mango", nutrients: { calories: 60, protein: 0.8, fat: 0.4, carbs: 15 }, servingSizes: [{ name: "g", multiplier: 1 }, { name: "piece", multiplier: 336 }, { name: "cup", multiplier: 165 }], source: "USDA" }
];



// Mock Food Entries
export const mockFoodEntries: FoodEntry[] = [
    { id: 1, product: mockProducts[0], quantity: 150, time: format(new Date(), "yyyy-MM-dd'T'HH:mm:ssXXX") },
    { id: 2, product: mockProducts[1], quantity: 200, time: format(new Date(), "yyyy-MM-dd'T'HH:mm:ssXXX") },
    { id: 3, product: mockProducts[5], quantity: 120, time: format(new Date(), "yyyy-MM-dd'T'HH:mm:ssXXX") },
    { id: 4, product: mockProducts[3], quantity: 100, time: format(new Date(), "yyyy-MM-dd'T'HH:mm:ssXXX") },
    { id: 5, product: mockProducts[2], quantity: 80, time: format(subDays(new Date(), 1), "yyyy-MM-dd'T'HH:mm:ssXXX") },
    { id: 6, product: mockProducts[4], quantity: 50, time: format(subDays(new Date(), 1), "yyyy-MM-dd'T'HH:mm:ssXXX") },
    { id: 7, product: mockProducts[6], quantity: 30, time: format(subDays(new Date(), 2), "yyyy-MM-dd'T'HH:mm:ssXXX") },
    { id: 8, product: mockProducts[7], quantity: 70, time: format(subDays(new Date(), 2), "yyyy-MM-dd'T'HH:mm:ssXXX") },
    { id: 9, product: mockProducts[0], quantity: 200, time: format(subDays(new Date(), 3), "yyyy-MM-dd'T'HH:mm:ssXXX") },
    { id: 10, product: mockProducts[1], quantity: 150, time: format(subDays(new Date(), 3), "yyyy-MM-dd'T'HH:mm:ssXXX") },
];

// Mock Note Entries
export const mockNoteEntries: NoteEntry[] = [
    { id: 1, title: "Morning Routine", content: "Had a healthy breakfast and a short workout.", date: format(subDays(new Date(), 2), "yyyy-MM-dd'T'HH:mm:ssXXX") },
    { id: 2, title: "Lunch Thoughts", content: "The new salad recipe turned out great!", date: format(subDays(new Date(), 1), "yyyy-MM-dd'T'HH:mm:ssXXX") },
    { id: 3, title: "Evening Recap", content: "Feeling accomplished after today's tasks.", date: format(new Date(), "yyyy-MM-dd'T'HH:mm:ssXXX") },
];

// Mock Weight Entries (Past 20 Days)
export const mockWeightEntries: WeightEntry[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    weight: 70 + Math.random() * 2 - 1, // Random weight around 70kg
    date: format(subDays(new Date(), i + 1), "yyyy-MM-dd'T'HH:mm:ssXXX"),
}));
