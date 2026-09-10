import ThemeToggle from "../theme/theme-toggle";
import { Container } from "./container";

export default function Header() {
    return (
        <Container className="flex items-center justify-between py-4">
            <h1 className="text-xl font-semiBold">TypeRush</h1>
            <ThemeToggle/>
        </Container>
    );
}