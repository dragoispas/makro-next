import { addDays, format, isToday } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
}

export const DiaryDatePicker = ({ date, setDate }: Props) => {
    const handlePrevDay = () => setDate((prev) => addDays(prev, -1));
    const handleNextDay = () => setDate((prev) => addDays(prev, 1));
    return (

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

    )
}