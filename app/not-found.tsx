import { TextLink } from "@/components/site/shared";
export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>A different direction.</h1>
      <p>The page you’re looking for isn’t here.</p>
      <TextLink href="/">Return to the portfolio</TextLink>
    </section>
  );
}
