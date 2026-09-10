import { IconBrandGithub, IconBrandGmail, IconBrandLinkedin, IconBrandMailgun, IconGlobe } from "@tabler/icons-react";
import { Container } from "./container";
import { Globe } from "lucide-react";

export default function Footer() {
    return (
        <Container className="flex sm:justify-between py-4 flex-wrap justify-center gap-2">
            <div className="social flex items-center gap-4">
                <a href="https://github.com/official-hannahyue" className="text-xs text-muted-foreground font-light flex items-center gap-1">
                    <IconBrandGithub stroke={2} size={16} />
                    Github
                </a>
                <a href="mailto:https://www.gmail.com" className="text-xs text-muted-foreground font-light flex items-center gap-1">
                    <IconBrandMailgun stroke={2} size={16} />
                    Email
                </a>
                <a href="https://www.linkedin.com/in/thehannah-yue" className="text-xs text-muted-foreground font-light flex items-center gap-1">
                    <IconBrandLinkedin stroke={2} size={16} />
                    Linkedin
                </a>
                <a href="https://www.hannahyue.com" className="text-xs text-muted-foreground font-light flex items-center gap-1">
                    <Globe strokeWidth={2} size={16} />
                    Website
                </a>
            </div>
            <p className="text-xs text-muted-foreground">Made By @Hannah Yue</p>
        </Container>
    );
}