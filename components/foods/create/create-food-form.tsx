import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus, Trash } from "lucide-react";

export type ServingSize = {
    name: string;
    multiplier: number;
};

export default function CreateFoodForm() {
    const [foodName, setFoodName] = useState("");
    const [calories, setCalories] = useState("");
    const [protein, setProtein] = useState("");
    const [carbs, setCarbs] = useState("");
    const [fat, setFat] = useState("");
    const [fiber, setFiber] = useState("");
    const [servingSizes, setServingSizes] = useState<ServingSize[]>([]);
    const [newServing, setNewServing] = useState({ name: "", multiplier: "" });

    const addServingSize = () => {
        if (newServing.name && newServing.multiplier) {
            setServingSizes([...servingSizes, { name: newServing.name, multiplier: parseFloat(newServing.multiplier) }]);
            setNewServing({ name: "", multiplier: "" });
        }
    };

    const removeServingSize = (index: number) => {
        setServingSizes(servingSizes.filter((_, i) => i !== index));
    };

    const handleSubmit = () => {
        const foodData = {
            foodName,
            calories: parseFloat(calories),
            protein: parseFloat(protein),
            carbs: parseFloat(carbs),
            fat: parseFloat(fat),
            fiber: parseFloat(fiber),
            servingSizes,
        };
        console.log("Food Submitted", foodData);
    };

    return (
        <Card className="max-w-lg mx-auto p-4">
            <CardHeader>
                <CardTitle>Add Food</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <Label>Name</Label>
                    <Input value={foodName} onChange={(e) => setFoodName(e.target.value)} placeholder="Food Name" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label>Calories</Label>
                        <Input value={calories} onChange={(e) => setCalories(e.target.value)} placeholder="kcal" />
                    </div>
                    <div>
                        <Label>Protein (g)</Label>
                        <Input value={protein} onChange={(e) => setProtein(e.target.value)} placeholder="g" />
                    </div>
                    <div>
                        <Label>Carbs (g)</Label>
                        <Input value={carbs} onChange={(e) => setCarbs(e.target.value)} placeholder="g" />
                    </div>
                    <div>
                        <Label>Fat (g)</Label>
                        <Input value={fat} onChange={(e) => setFat(e.target.value)} placeholder="g" />
                    </div>
                    <div>
                        <Label>Fiber (g)</Label>
                        <Input value={fiber} onChange={(e) => setFiber(e.target.value)} placeholder="g" />
                    </div>
                </div>
                <div>
                    <Label>Serving Sizes</Label>
                    {servingSizes.map((serving, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span>{serving.name} - {serving.multiplier}g</span>
                            <Button variant="ghost" size="icon" onClick={() => removeServingSize(index)}>
                                <Trash className="w-4 h-4 text-red-500" />
                            </Button>
                        </div>
                    ))}
                    <div className="flex gap-2 mt-2">
                        <Input value={newServing.name} onChange={(e) => setNewServing({ ...newServing, name: e.target.value })} placeholder="Unit (e.g. Cup)" />
                        <Input value={newServing.multiplier} onChange={(e) => setNewServing({ ...newServing, multiplier: e.target.value })} placeholder="Grams" />
                        <Button onClick={addServingSize}><Plus className="w-4 h-4" /></Button>
                    </div>
                </div>
                <Button onClick={handleSubmit} className="w-full">Submit</Button>
            </CardContent>
        </Card>
    );
}
