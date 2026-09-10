import { TimeOption, timeOptions } from "@/types/typing";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

type timeSelectorProps = {
    time: TimeOption;
    onTimeChange: (time: TimeOption) => void
}
export default function TimeSelector({
    time,
    onTimeChange
}: timeSelectorProps) {
    return (
        <Tabs
            value={String(time)}
            onValueChange={(value) => onTimeChange(Number(value) as TimeOption)}
        >
            <TabsList>
                {timeOptions.map((option) => (
                    <TabsTrigger value={String(option)} key={option}>{option}s</TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
}