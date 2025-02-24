import { Product, FoodEntry, NoteEntry, WeightEntry } from "./types";
import { format, subDays } from "date-fns";

// Mock Products
export const mockProducts: Product[] = [
    { id: 1, name: "Chicken Breast", calories: 165, macronutrients: { protein: 31, fat: 3.6, carbs: 0 }, source: "USDA" },
    { id: 2, name: "Salmon", calories: 208, macronutrients: { protein: 25, fat: 13, carbs: 0 }, source: "USDA" },
    { id: 3, name: "Eggs", calories: 155, macronutrients: { protein: 13, fat: 10, carbs: 1 }, source: "USDA" },
    { id: 4, name: "Greek Yogurt", calories: 100, macronutrients: { protein: 10, fat: 5, carbs: 4 }, source: "USDA" },
    { id: 5, name: "Oats", calories: 389, macronutrients: { protein: 11, fat: 5, carbs: 67 }, source: "USDA" },
    { id: 6, name: "Banana", calories: 89, macronutrients: { protein: 1.3, fat: 0.3, carbs: 27 }, source: "USDA" },
    { id: 7, name: "Almonds", calories: 579, macronutrients: { protein: 21, fat: 49, carbs: 22 }, source: "USDA" },
    { id: 8, name: "Avocado", calories: 160, macronutrients: { protein: 2, fat: 15, carbs: 9 }, source: "USDA" },
    { id: 9, name: "Broccoli", calories: 55, macronutrients: { protein: 3.7, fat: 0.6, carbs: 11 }, source: "USDA" },
    { id: 10, name: "Brown Rice", calories: 123, macronutrients: { protein: 2.7, fat: 1, carbs: 25.6 }, source: "USDA" },
    { id: 11, name: "Apple", calories: 52, macronutrients: { protein: 0.3, fat: 0.2, carbs: 14 }, source: "USDA" },
    { id: 12, name: "Carrot", calories: 41, macronutrients: { protein: 0.9, fat: 0.2, carbs: 10 }, source: "USDA" },
    { id: 13, name: "Spinach", calories: 23, macronutrients: { protein: 2.9, fat: 0.4, carbs: 3.6 }, source: "USDA" },
    { id: 14, name: "Sweet Potato", calories: 86, macronutrients: { protein: 1.6, fat: 0.1, carbs: 20 }, source: "USDA" },
    { id: 15, name: "Quinoa", calories: 120, macronutrients: { protein: 4.1, fat: 1.9, carbs: 21.3 }, source: "USDA" },
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
