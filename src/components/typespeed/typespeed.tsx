"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import LengthSelector from "./length-selector";
import ModeSelector from "./mode-selector";
import { TypingMode, TextLength, TimeOption, TypeStatus, TestResult } from "@/types/typing";
import { Container } from "../layout/container";
import TimeSelector from "./time-selector";
import Timer from "./typing/timer";
import { generateText } from "@/lib/typing/generate-text";
import DisplayText from "./typing/display-text";
import TypingInput from "./typing/typing-input";
import Result from "./result/result";
import { calculateResult } from "@/lib/typing/calculate-result";
import TestOptions from "./test-options";


//options
const timeOptions: TimeOption[] = [15, 30, 60, 120];

const lengthOptions: TextLength[] = [25, 50, 100];

const modeOptions: TypingMode[] = [
    "classic",
    "code",
    "commands",
    "symbols",
];


export default function TypeSpeed() {
    const [length, setLength] = useState<TextLength>(25);
    const [mode, setMode] = useState<TypingMode>("classic");
    const [time, setTime] = useState<TimeOption>(15);
    const [status, setStatus] = useState<TypeStatus>("idle");
    const [result, setResult] = useState<TestResult | null>(null)
    const [text, setText] = useState("");
    const [typedText, setTypedText] = useState("");
    const restartTest = (
        nextMode = mode,
        nextLength = length,
    ) => {
        setStatus("idle");
        setTypedText("");
        setText(generateText(nextMode, nextLength));

        inputRef.current?.focus();
    };
    const textRef = useRef(text);
    const typedTextRef = useRef(typedText);
    useEffect(() => {
        textRef.current = text;
    }, [text]);

    useEffect(() => {
        typedTextRef.current = typedText;
    }, [typedText]);
    const handleFinish = useCallback(() => {
        const finishedResult = calculateResult({
            text: textRef.current,
            typedText: typedTextRef.current,
            time,
        });

        setResult(finishedResult);
        setStatus("finished");
    }, [time]);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        setText(generateText(mode, length))
    }, [length, mode]);
    const handleInput = (value: string) => {
        if (status === "idle" && value.length > 0) {
            setStatus("running");
        }

        setTypedText(value);
    };
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Tab") {
                event.preventDefault();
                restartTest();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [mode, length]);
    if (status === "finished" && result) {
        return (
            <Container className="max-w-7xl">
                <Result
                    {...result}
                    onRestart={restartTest}
                />
            </Container>
        );
    }
    return (
        <Container className="max-w-6xl flex flex-col gap-16">
            <div className="md:flex justify-center items-center gap-8 flex-wrap hidden">
                <LengthSelector
                    length={length}
                    onLengthChange={(newLength) => {
                        setLength(newLength);
                        restartTest(mode, newLength);
                    }}
                />
                <TimeSelector
                    time={time}
                    onTimeChange={(newTime) => {
                        setTime(newTime);
                        restartTest();
                    }}
                />
                <ModeSelector
                    mode={mode}
                    onModeChange={(newMode) => {
                        setMode(newMode);
                        restartTest(newMode, length);
                    }}
                />
            </div>
            <div className="flex justify-center md:hidden">
                <TestOptions
                    length={length}
                    time={time}
                    mode={mode}
                    onLengthChange={(newLength) => {
                        setLength(newLength);
                        restartTest(mode, newLength);
                    }}
                    onTimeChange={(newTime) => {
                        setTime(newTime);
                        restartTest();
                    }}
                    onModeChange={(newMode) => {
                        setMode(newMode);
                        restartTest(newMode, length);
                    }}
                />
            </div>
            <div className="flex flex-col max-h-50 overflow-clip min-h-40 justify-baseline gap-4"
                onClick={() => inputRef.current?.focus()}>
                <Timer
                    time={time}
                    status={status}
                    onFinish={handleFinish}
                />
                <TypingInput
                    value={typedText}
                    inputRef={inputRef}
                    onChange={handleInput}
                />
                <DisplayText text={text} typedText={typedText} />
            </div>
            <div className="flex items-center justify-center">
                <p className="text-xs text-muted-foreground"><span className="border py-1 px-4 rounded-sm mr-1.5">Tab</span>To restart</p>
            </div>
        </Container>
    );
}