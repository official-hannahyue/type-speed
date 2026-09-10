# TypeSpeed

A modern typing practice application built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. TypeRush provides a focused environment for improving typing speed and accuracy through different typing modes, text lengths, real-time progress tracking, and session results.

TypeRush is free to use and open source.

## Getting Started

Follow the steps below to run the project locally.

### Prerequisites

Make sure you have the following installed:

* Node.js 20+
* npm

### 1. Clone the repository

```bash
git clone https://github.com/your-username/type-speed.git
cd type-speed
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

### Available Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Start the production server  |
| `npm run lint`  | Run ESLint                   |

## Features

### Typing Practice

* Real-time typing experience
* Live typing progress
* Typing speed measurement
* Accuracy tracking
* Session results
* Restart sessions
* Varied typing content

### Typing Modes

TypeRush includes multiple typing modes for different types of practice.

#### Classic

Practice with regular words and sentences designed for everyday typing.

#### Code

Practice programming syntax, keywords, operators, and code-like text.

#### Commands

Practice terminal commands and command-line syntax.

#### Symbols

Practice punctuation, special characters, and symbols to improve familiarity with less frequently typed characters.

### Text Lengths

Choose the length of your typing session:

* Short
* Medium
* Long

### Session Controls

* Start a typing session
* Restart the current session
* Change typing mode
* Change text length
* View results after finishing

## Tech Stack

| Technology   | Purpose               |
| ------------ | --------------------- |
| Next.js      | React framework       |
| TypeScript   | Type-safe development |
| Tailwind CSS | Styling               |
| shadcn/ui    | UI components         |
| Tabler Icons | Interface icons       |

## Architecture

```text
                    TypeRush Application
                           |
             +-------------+-------------+
             |                           |
             v                           v
       Typing Interface             Configuration
             |                    Mode / Length
             |                           |
             v                           v
       Typing Engine              Text Collections
             |
             v
       Session Results
```

## Project Structure

```text
src/
├── app/
├── components/
├── data/
├── lib/
└── types/
```

### `app`

Contains application routes, layouts, and pages.

### `components`

Contains reusable UI components used throughout the application.

### `data`

Contains typing content organized by typing mode and text length.

### `lib`

Contains shared application logic and utility functions.

### `types`

Contains shared TypeScript types and application-specific type definitions.


## Contributing

Contributions, suggestions, and improvements are welcome.

If you find a bug or have an idea for a new feature, feel free to open an issue or submit a pull request.

Before submitting a pull request, make sure the project builds successfully and that your changes follow the existing project structure and coding style.

## License

TypeRush is free and open-source software licensed under the MIT License.
