import { typingCollections } from "@/data/collections";
import { TypingMode } from "@/types/typing";

function shuffle(items: string[]): string[] {
    return [...items]?.sort(() => Math.random() - 0.5);
};

export function generateText(
    mode: TypingMode,
    amount: number
): string {
    const collection = typingCollections[mode];
    if (!collection) {
        return ""
    };
    const shuffled = shuffle(collection);
    if (!shuffled) {
        return ""
    }
    return shuffled.slice(0, amount).join(" ");
}