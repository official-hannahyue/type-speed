"use client";

import { TypingMode, typingModes } from "@/types/typing";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

type ModeSelectorProps = {
    mode: TypingMode;
    onModeChange: (mode: TypingMode) => void;
};

export default function ModeSelector({
    mode,
    onModeChange,
}: ModeSelectorProps) {
    return (
        <Tabs
            value={mode}
            onValueChange={(value) =>
                onModeChange(value as TypingMode)
            }
        >
            <TabsList>
                {typingModes.map((option) => (
                    <TabsTrigger
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
}