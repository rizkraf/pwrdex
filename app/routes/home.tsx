import type { Route } from "./+types/home";
import PasswordGenerator from "~/password-generator";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pwrdex | Free Password Generator" },
    { name: "description", content: "Free Password Generator" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <PasswordGenerator />;
}
