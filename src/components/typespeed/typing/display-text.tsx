"use client";

import { useEffect, useRef, useState } from "react";

type DisplayTextProps = {
    text: string;
    typedText: string;
};

export default function DisplayText({
    text,
    typedText,
}: DisplayTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const characterRefs = useRef<(HTMLSpanElement | null)[]>([]);

    const [cursorPosition, setCursorPosition] = useState({
        left: 0,
        top: 0,
        height: 0,
    });

    useEffect(() => {
        const character = characterRefs.current[typedText.length];

        if (!character || !containerRef.current) {
            return;
        }

        const characterRect = character.getBoundingClientRect();
        const containerRect =
            containerRef.current.getBoundingClientRect();

        setCursorPosition({
            left: characterRect.left - containerRect.left,
            top: characterRect.top - containerRect.top,
            height: characterRect.height,
        });
    }, [typedText, text]);

    return (
        <div
            ref={containerRef}
            className="relative font-mono text-2xl leading-relaxed"
        >
            {text.split("").map((character, index) => {
                const typedCharacter = typedText[index];

                let className = "text-muted-foreground";

                if (typedCharacter === character) {
                    className = "text-foreground";
                } else if (typedCharacter !== undefined) {
                    className = "text-destructive";
                }

                return (
                    <span
                        key={index}
                        ref={(element) => {
                            characterRefs.current[index] = element;
                        }}
                        className={className}
                    >
                        {character}
                    </span>
                );
            })}

            <span
                className="
                    absolute
                    w-0.5
                    rounded-full
                    bg-primary
                    transition-all
                    duration-100
                    ease-out
                    animate-pulse
                "
                style={{
                    left: cursorPosition.left,
                    top: cursorPosition.top,
                    height: cursorPosition.height,
                }}
            />
        </div>
    );
}