import { Container } from "@/components/layout/container";
import TypeSpeed from "@/components/typespeed/typespeed";

export default function Main() {
  return (
    <Container className="flex-1 flex flex-col items-center justify-center">
      <TypeSpeed/>
    </Container>
  );
}