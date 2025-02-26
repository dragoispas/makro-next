import { Product } from "@/app/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { calculatedFoodDetails, displayValue, getMacroProcentages } from "@/components/utils";
import { useMemo } from "react";
import { Pie, PieChart } from "recharts";

interface Props {
    selectedProduct: Product;
    quantity?: number;
    multiplier?: number;
}

export const ProductCard = ({ selectedProduct, quantity, multiplier }: Props) => {
    const macronutrients = useMemo(() =>
        quantity && multiplier ? calculatedFoodDetails(selectedProduct, quantity, multiplier) :
            {
                calories: selectedProduct.calories,
                protein: selectedProduct.macronutrients.protein,
                fat: selectedProduct.macronutrients.fat,
                carbs: selectedProduct.macronutrients.carbs,
            },
        [selectedProduct, quantity, multiplier]);
    const macroProcentage = useMemo(() => getMacroProcentages({ protein: macronutrients.protein, fat: macronutrients.fat, carbs: macronutrients.carbs }), [selectedProduct])


    const chartData = [
        { name: "Protein", value: selectedProduct.macronutrients.protein, fill: "var(--color-protein)" },
        { name: "Fat", value: selectedProduct.macronutrients.fat, fill: "var(--color-fat)" },
        { name: "Carbs", value: selectedProduct.macronutrients.carbs, fill: "var(--color-carbs)" },
    ];

    const chartConfig = {
        protein: {
            label: "Protein",
            color: "hsl(var(--chart-1))",
        },
        fat: {
            label: "Fat",
            color: "hsl(var(--chart-5))",
        },
        carbs: {
            label: "Carbs",
            color: "hsl(var(--chart-2))",
        },
    } satisfies ChartConfig;

    return (
        <Card>
            <CardHeader className="flex items-center justify-between">
                <CardTitle>{selectedProduct.name}</CardTitle>
                <CardDescription>{quantity && multiplier ? `values / ${quantity * multiplier} ${selectedProduct.servingSizes[0].name}` : `values / 100 ${selectedProduct.servingSizes[0].name}`}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex gap-6 align-center justify-center">
                    {/* Pie chart */}
                    <div className="w-40 flex justify-end">
                        <div className="w-28 h-28 relative">
                            <div className="flex flex-col items-center justify-center absolute w-full h-full">
                                <div className="text-sm font-semibold translate-y-0.5">{displayValue(macronutrients.calories)}</div>
                                <div className="text-sm font-semibold -translate-y-0.5">kcal</div>
                            </div>
                            <ChartContainer config={chartConfig} className="w-full h-full">
                                <PieChart>
                                    <Pie
                                        data={chartData}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={30}
                                        outerRadius={50}
                                        fill="#8884d8"
                                        paddingAngle={4}
                                    />
                                </PieChart>
                            </ChartContainer>
                        </div>
                    </div>

                    <div className="w-48">
                        <div className="flex flex-col gap-2 align-baseline justify-center h-full">
                            <div className="flex gap-2 align-center w-full">
                                <div className="w-2 h-2 bg-macro-protein rounded-full self-center"></div>
                                <div className="flex gap-2 align-center w-full">
                                    <p className="text-sm font-semibold">Protein: {displayValue(macronutrients.protein)} g</p>
                                    <p className="text-sm font-semibold text-macro-protein">({macroProcentage.protein}%)</p>
                                </div>
                            </div>
                            <div className="flex gap-2 align-center">
                                <div className="w-2 h-2 bg-macro-fat rounded-full self-center"></div>
                                <div className="flex gap-1.5 align-center">
                                    <p className="text-sm font-semibold">Fat: {displayValue(macronutrients.fat)} g</p>
                                    <p className="text-sm font-semibold text-macro-fat">({macroProcentage.fat}%)</p>
                                </div>
                            </div>
                            <div className="flex gap-2 align-center">
                                <div className="w-2 h-2 bg-macro-carbs rounded-full self-center"></div>
                                <div className="flex gap-1.5 align-center">
                                    <p className="text-sm font-semibold">Carbs: {displayValue(macronutrients.carbs)} g</p>
                                    <p className="text-sm font-semibold text-macro-carbs">({macroProcentage.carbs}%)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
