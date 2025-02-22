import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowDown, ArrowUp, Minus, PlusCircle } from "lucide-react";

interface WeightTrackerProps {
    currentWeight?: number;
    goalWeight?: number;
    previousWeight?: number;
}

export default function WeightTracker({
    currentWeight,
    goalWeight,
    previousWeight,
}: WeightTrackerProps) {
    const weightChange = previousWeight && currentWeight ? currentWeight - previousWeight : 0;

    const isProgress = goalWeight !== undefined && currentWeight !== undefined
        ? Math.abs(goalWeight - currentWeight) < Math.abs(goalWeight - (previousWeight || currentWeight))
        : false;

    const getChangeIndicator = () => {
        if (weightChange === 0) {
            return (
                <div className="flex items-center text-muted-foreground">
                    <Minus className="w-4 h-4" />
                    <span className="ml-1">No change</span>
                </div>
            );
        }

        return (
            <div className={`flex items-center ${isProgress ? 'text-green-500' : 'text-red-500'}`}>
                {weightChange < 0 ? <ArrowDown className="w-4 h-4" /> : <ArrowUp className="w-4 h-4" />}
                <span className="ml-1">{Math.abs(weightChange).toFixed(1)} kg</span>
            </div>
        );
    };

    return (
        <Card className="w-full max-w-md p-4">
            <CardHeader>
                {currentWeight ? (
                    <>
                        <CardTitle className="text-2xl font-bold text-center">{currentWeight} kg</CardTitle>
                        <p className="text-muted-foreground text-center">Current Weight</p>
                    </>
                ) : (
                    <div className="flex flex-col items-center text-muted-foreground">
                        <PlusCircle className="w-8 h-8 mb-2" />
                        <p className="text-center">No weight recorded. Add your current weight to get started.</p>
                    </div>
                )}
            </CardHeader>

            {currentWeight && (
                <>
                    <Separator className="my-4" />
                    <CardContent className="space-y-4">
                        {goalWeight && (
                            <div className="flex justify-between">
                                <span className="font-medium">Goal Weight</span>
                                <span className="text-muted-foreground">{goalWeight} kg</span>
                            </div>
                        )}

                        {previousWeight !== undefined && (
                            <div className="flex justify-between items-center">
                                <span className="font-medium">Change</span>
                                {getChangeIndicator()}
                            </div>
                        )}
                    </CardContent>
                </>
            )}
        </Card>
    );
}
