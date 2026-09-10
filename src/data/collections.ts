import { classicWords } from "@/data/words/classic";
import { devWords } from "./code/dev";
import { codeWords } from "./code/general";
import { javascriptWords } from "./code/javascript";
import { codeSnippets } from "./code/snippets";
import { webWords } from "./code/web";
import { dockerCommands } from "./commands/docker";
import { gitCommands } from "./commands/git";
import { nextCommands } from "./commands/next";
import { npmCommands } from "./commands/npm";
import { pnpmCommands } from "./commands/pnpm";
import { prismaCommands } from "./commands/prisma";
import { shellCommands } from "./commands/shell";
import { commandSnippets } from "./commands/snippets";
import { basicSymbols } from "./symbols/basic";
import { brackets } from "./symbols/brackets";
import { shellSymbols } from "./symbols/shell";
import { quotes } from "./symbols/quotes";
import { symbolCombinations } from "./symbols/common";
import { codeSymbols } from "./symbols/code";


export const typingCollections = {
    classic: classicWords,

    code: [
        ...devWords,
        ...codeWords,
        ...javascriptWords,
        ...codeSnippets,
        ...webWords,
    ],

    commands: [
        ...dockerCommands,
        ...gitCommands,
        ...nextCommands,
        ...npmCommands,
        ...pnpmCommands,
        ...prismaCommands,
        ...shellCommands,
        ...commandSnippets,
    ],

    symbols: [
        ...basicSymbols,
        ...brackets,
        ...codeSymbols,
        ...symbolCombinations,
        ...quotes,
        ...shellSymbols,
    ],
};