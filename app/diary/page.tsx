'use client';

import { DiaryTable } from "@/components/data-table-demo/data-table";
import { mockFoodEntries } from "../mockData";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MacroBreakdown from "@/components/macro-breakdown";
import WeightTracker from "@/components/weight-tracker";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MailOpen, Plus } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format, isToday, addDays } from "date-fns";

const DiaryPage = () => {
    const [date, setDate] = React.useState<Date>(new Date());

    const handlePrevDay = () => setDate((prev) => addDays(prev, -1));
    const handleNextDay = () => setDate((prev) => addDays(prev, 1));

    return (
        <div className="container mx-auto py-10 flex flex-col gap-4">

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" onClick={handlePrevDay}>
                        <ChevronLeft className="w-6 h-6" />
                    </Button>

                    <Popover>
                        <PopoverTrigger asChild>
                            <div className="cursor-pointer flex flex-col items-center">

                                <span className="text-xl font-bold">
                                    {isToday(date) ? 'Today' : format(date, 'dd MMM yyyy')}
                                </span>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(selectedDate) => {
                                    if (selectedDate) setDate(selectedDate);
                                }}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>

                    <Button variant="ghost" onClick={handleNextDay}>
                        <ChevronRight className="w-6 h-6" />
                    </Button>
                </div>
                <div className="flex gap-4">
                    <Button>
                        <Plus /> Add food to diary
                    </Button>
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

                <WeightTracker currentWeight={79.5} previousWeight={79.9} goalWeight={80} />
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
