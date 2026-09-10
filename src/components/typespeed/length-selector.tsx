import { TextLength, textLengths } from "@/types/typing";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

type lengthSelectorProps = {
    length: TextLength;
    onLengthChange: (length: TextLength) => void
}
export default function LengthSelector({
    length,
    onLengthChange
}: lengthSelectorProps) {
    return (
        <Tabs
            value={String(length)}
            onValueChange={(value) => onLengthChange(Number(value) as TextLength)}
        >
            <TabsList>
                {textLengths.map((option) => (
                    <TabsTrigger key={option.value} value={String(option.value)}>{option.label}</TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
}