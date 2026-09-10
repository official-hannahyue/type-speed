"use client";

import { useEffect, useState } from "react";
import { TimeOption, TypeStatus } from "@/types/typing";

type TimerProps = {
    time: TimeOption;
    status: TypeStatus;
    onFinish: () => void;
};

export default function Timer({
    time,
    status,
    onFinish,
}: TimerProps) {
    const [timeLeft, setTimeLeft] = useState<number>(time);

    useEffect(() => {
        if (status === "idle") {
            setTimeLeft(time);
            return;
        }

        if (status !== "running") {
            return;
        }

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    onFinish();
                    return 0;
                }

                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [status, time, onFinish]);

    return (
        <h1 className="text-primary text-2xl font-mono tabular-nums">
            {timeLeft}s
        </h1>
    );
}