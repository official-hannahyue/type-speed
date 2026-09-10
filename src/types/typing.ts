export const typingModes = [
    {
        label: "Classic",
        value: "classic",
    },
    {
        label: "Code",
        value: "code",
    },
    {
        label: "Commands",
        value: "commands",
    },
    {
        label: "Symbols",
        value: "symbols",
    },
] as const;

export type TypingMode = (typeof typingModes)[number]["value"];

export const typeStatuses = [
    "idle",
    "running",
    "finished",
] as const;

export type TypeStatus = (typeof typeStatuses)[number];

export type Word = string;

export interface TypingTest {
    mode: TypingMode;
    length: TextLength;
    status: TypeStatus;
    text: string;
    typedText: string;
    timeLeft: number;
    startTime: number | null;
}

export const textLengths = [
    {
        label: "Short",
        value: 25,
    },
    {
        label: "Medium",
        value: 50,
    },
    {
        label: "Long",
        value: 100,
    },
] as const;

export type TextLength = (typeof textLengths)[number]["value"];

export const timeOptions = [
    15,
    30,
    60,
    120,
] as const;

export type TimeOption = (typeof timeOptions)[number];

export type TestResult = {
    wpm: number;
    accuracy: number;
    errors: number;
    time: number;
};