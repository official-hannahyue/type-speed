"use client";

import { RefObject } from "react";

type TypingInputProps = {
    inputRef: RefObject<HTMLInputElement | null>;
    value: string;
    onChange: (value: string) => void;
};

export default function TypingInput({
    inputRef,
    value,
    onChange,
}: TypingInputProps) {
    return (
        <input
            ref={inputRef}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="fixed -left-[9999px]"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
        />
    );
}