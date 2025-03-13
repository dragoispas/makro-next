
import { DiaryTable } from "@/components/diary/dary-table/data-table";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MacroBreakdown from "@/components/diary/macro-breakdown";
import WeightTracker from "@/components/diary/weight-tracker";
import { DiaryDrawer } from "@/components/diary/diary-drawer/drawer";
import { DiaryDatePicker } from "@/components/diary/diary-date-picker";
import { NotesDrawer } from "@/components/diary/notes-drawer/drawer";
import { mockFoodEntries } from "@/app/mockData";

const DiaryPage = async () => {
    const res = await fetch("http://localhost:3000/api/food-entries");
    const foodEntries = await res.json();

    // const [date, setDate] = React.useState<Date>(new Date()); // make this ssr

    return (
        <div className="container mx-auto py-10 px-4 flex flex-col gap-4">

            <div className="flex justify-between items-center">
                <div></div>
                {/* <DiaryDatePicker date={date} setDate={setDate} /> */}
                <div className="flex gap-4">
                    <DiaryDrawer />

                    <NotesDrawer />
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

            <DiaryTable data={foodEntries} />

            <Card>
                <CardHeader><CardTitle>Note</CardTitle></CardHeader>
                <CardContent>This is a note</CardContent>
            </Card>
        </div>
    );
}

export default DiaryPage;
