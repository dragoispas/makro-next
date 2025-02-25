import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

interface MacroBreakdownProps {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    proteinGoal?: number;
    fatGoal?: number;
    carbsGoal?: number;
}

export default function MacroBreakdown({
    calories,
    protein,
    fat,
    carbs,
    proteinGoal = 100,
    fatGoal = 70,
    carbsGoal = 250,
}: MacroBreakdownProps) {
    return (
        <Card className="w-full p-4">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">{calories} kcal</CardTitle>
                <p className="text-muted-foreground text-center">Total Calories Consumed</p>
            </CardHeader>
            <Separator className="my-4" />
            <CardContent className="space-y-4">
                <MacroItem label="Protein" value={protein} goal={proteinGoal} />
                <MacroItem label="Fat" value={fat} goal={fatGoal} />
                <MacroItem label="Carbs" value={carbs} goal={carbsGoal} />
            </CardContent>
        </Card>
    );
}

interface MacroItemProps {
    label: string;
    value: number;
    goal: number;
}

function MacroItem({ label, value, goal }: MacroItemProps) {
    const percentage = Math.min((value / goal) * 100, 100);

    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="font-medium">{label}</span>
                <span className="text-muted-foreground">{value}g / {goal}g</span>
            </div>
            <Progress value={percentage} className="h-2" />
        </div>
    );
}
