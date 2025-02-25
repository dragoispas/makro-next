'use client';

import { DiaryTable } from "@/components/diary/diary-drawer/dary-table/data-table";
import { mockFoodEntries } from "../mockData";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MacroBreakdown from "@/components/diary/macro-breakdown";
import WeightTracker from "@/components/diary/weight-tracker";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DiaryDrawer } from "@/components/diary/diary-drawer/diary-drawer";
import { DiaryDatePicker } from "@/components/diary/diary-date-picker";

const DiaryPage = () => {
    const [date, setDate] = React.useState<Date>(new Date());

    return (
        <div className="container mx-auto py-10 px-4 flex flex-col gap-4">

            <div className="flex justify-between items-center">
                <DiaryDatePicker date={date} setDate={setDate} />
                <div className="flex gap-4">
                    <DiaryDrawer />

                    <Button>
                        <Plus /> Add note
                    </Button>
                </div>
            </div>

            <div className="flex gap-4">
                <MacroBreakdown
                    calories={1000}
                    protein={60}
                    fat={30}
                    carbs={120}
                />

                <WeightTracker currentWeight={69} previousWeight={79.9} goalWeight={80} />
            </div>

            <DiaryTable data={mockFoodEntries} />

            <Card>
                <CardHeader><CardTitle>Note</CardTitle></CardHeader>
                <CardContent>This is a note</CardContent>
            </Card>
        </div>
    );
}

export default DiaryPage;
