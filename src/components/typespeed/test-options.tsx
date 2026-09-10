"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import {
    TextLength,
    TimeOption,
    TypingMode,
} from "@/types/typing";
import { cn } from "cn";

type TestOptionsProps = {
    length: TextLength;
    time: TimeOption;
    mode: TypingMode;

    onLengthChange: (length: TextLength) => void;
    onTimeChange: (time: TimeOption) => void;
    onModeChange: (mode: TypingMode) => void;
};

const timeOptions: TimeOption[] = [15, 30, 60, 120];

const lengthOptions: TextLength[] = [25, 50, 100];

const modeOptions: TypingMode[] = [
    "classic",
    "code",
    "commands",
    "symbols",
];
const dropdownTriggerClass = cn(
    "inline-flex h-7 items-center justify-center rounded-sm px-3",
    "text-sm font-normal whitespace-nowrap",
    "text-muted-foreground transition-colors",
    "hover:bg-transparent hover:text-foreground",
    "focus-visible:outline-none focus-visible:ring-0"
);
export default function TestOptions({
    length,
    time,
    mode,
    onLengthChange,
    onTimeChange,
    onModeChange,
}: TestOptionsProps) {
    return (
        <div className="inline-flex w-fit items-center justify-center rounded-lg bg-muted p-[3px]">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className={dropdownTriggerClass}
                    >
                        {time}s
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    {timeOptions.map((option) => (
                        <DropdownMenuItem
                            key={option}
                            onClick={() => onTimeChange(option)}
                        >
                            {option}s
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className={dropdownTriggerClass}
                    >
                        {length} words
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    {lengthOptions.map((option) => (
                        <DropdownMenuItem
                            key={option}
                            onClick={() => onLengthChange(option)}
                        >
                            {option} words
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className={dropdownTriggerClass}
                    >
                        <span className="capitalize">{mode}</span>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    {modeOptions.map((option) => (
                        <DropdownMenuItem
                            key={option}
                            onClick={() => onModeChange(option)}
                        >
                            <span className="capitalize">{option}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}