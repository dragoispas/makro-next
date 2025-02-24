import { Product } from "@/app/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";

interface Props {
    selectedProduct: Product;
}

export const ProductCard = ({ selectedProduct }: Props) => {
    const macronutrients = selectedProduct.macronutrients;

    // Calculate the data for Pie chart
    const chartData = [
        { name: "Protein", value: macronutrients.protein, fill: "var(--color-protein)" },
        { name: "Fat", value: macronutrients.fat, fill: "var(--color-fat)" },
        { name: "Carbs", value: macronutrients.carbs, fill: "var(--color-carbs)" },
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
    } satisfies ChartConfig

    // Define the colors for the chart sections
    const COLORS = ["rgb(200,25,25)", "rgb(230,180,0)", "rgb(0,155,155)"];

    return (
        <Card>
            <CardHeader className="flex items-center justify-between">
                <CardTitle>{selectedProduct.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex gap-6 align-center justify-center">
                    {/* Pie chart */}
                    <div className="w-28 h-28 relative">
                        <div className="flex flex-col items-center justify-center absolute w-full h-full">
                            <div className="text-sm font-semibold translate-y-0.5">{selectedProduct.calories}</div>
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
                                >
                                    {/* {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} />
                                ))} */}
                                </Pie>
                            </PieChart>
                        </ChartContainer>
                    </div>

                    <div className="flex flex-col gap-2 align-center justify-center">
                        <div className="flex gap-2 align-center justify-center">
                            <div className="w-2 h-2 bg-macro-protein rounded-full self-center"></div>
                            <p className="text-sm font-semibold">Protein: {selectedProduct.macronutrients.protein} g</p>
                            <p className="text-sm font-semibold text-macro-protein">(12%)</p>
                        </div>
                        <div className="flex gap-2 align-center">
                            <div className="w-2 h-2 bg-macro-fat rounded-full self-center"></div>
                            <p className="text-sm font-semibold">Fat: {selectedProduct.macronutrients.fat} g</p>
                            <p className="text-sm font-semibold text-macro-fat">(12%)</p>
                        </div>
                        <div className="flex gap-2 align-center">
                            <div className="w-2 h-2 bg-macro-carbs rounded-full self-center"></div>
                            <p className="text-sm font-semibold">Carbs: {selectedProduct.macronutrients.carbs} g</p>
                            <p className="text-sm font-semibold text-macro-carbs">(12%)</p>
                        </div>
                    </div>

                </div>
            </CardContent>
        </Card>
    );
};
