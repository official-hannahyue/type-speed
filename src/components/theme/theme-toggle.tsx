"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="lg"
                className="rounded-full"
                aria-label="Toggle theme"
            />
        );
    }

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <Button
            variant="ghost"
            size="lg"
            className="rounded-full"
            onClick={handleTheme}
            aria-label="Toggle theme"
        >
            {theme === "light" ? <Moon strokeWidth={2}/> : <Sun strokeWidth={2}/>}
        </Button>
    );
}