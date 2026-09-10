"use client";

import { Check } from "lucide-react";

type ResultProps = {
    wpm: number;
    accuracy: number;
    time: number;
    errors: number;
    onRestart: () => void;
};

export default function Result({
    wpm,
    accuracy,
    time,
    errors,
    onRestart,
}: ResultProps) {
    return (
        <div className="flex min-h-[400px] items-center justify-center">
            <div className="w-full max-w-3xl text-center">
                <Check
                    className="mx-auto mb-5 size-10 text-primary"
                    strokeWidth={2}
                />

                <h1 className="text-3xl font-semibold tracking-tight">
                    Test complete
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Here are your results.
                </p>

                <div className="mt-12 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
                    <ResultStat
                        label="WPM"
                        value={wpm}
                    />

                    <ResultStat
                        label="Accuracy"
                        value={`${ accuracy }%`}
                    />

                    <ResultStat
                        label="Time"
                        value={`${ time }s`}
                    />

                    <ResultStat
                        label="Errors"
                        value={errors}
                    />
                </div>

                <button
                    type="button"
                    onClick={onRestart}
                    className="mt-12 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                    Try again
                </button>
            </div>
        </div>
    );
}

type ResultStatProps = {
    label: string;
    value: string | number;
};

function ResultStat({ label, value }: ResultStatProps) {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {label}
            </span>

            <span className="text-3xl font-semibold tabular-nums">
                {value}
            </span>
        </div>
    );
}