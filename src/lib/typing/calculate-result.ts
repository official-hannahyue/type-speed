import { TestResult } from "@/types/typing";

type CalculateResultProps = {
    text: string;
    typedText: string;
    time: number;
};

export function calculateResult({
    text,
    typedText,
    time
}: CalculateResultProps): TestResult {
    let correctCharacters = 0;
    let errors = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === text[i]) {
            correctCharacters++
        } else {
            errors++
        }
    };
    const accuracy = typedText.length > 0 ? Number(((correctCharacters / typedText.length) * 100).toString().slice(0,5)) : 0;
    const minutes = time / 60;
    const wpm = minutes > 0 ? Math.round(correctCharacters / 5 / minutes) : 0;
    return {
        wpm,
        accuracy,
        errors,
        time
    }
}