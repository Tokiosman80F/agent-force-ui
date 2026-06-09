import Link from "next/link";
import Button from "./button";
import Container from "./container";
import Heading from "./heading";
import Subheading from "./subheading";

export default function Hero() {
  return (
    <div className="pt-10 md:pt-20 lg:pt-32">
      <Container>
        <Heading as="h1">
          Agents that do the work <br /> Approvals that keep you safe.
        </Heading>

        <Subheading className="py-8">
          Deploy AI agents that plan, act through your tools, and report
          outcomes—without changing how your teams work.
        </Subheading>

        <div className="flex gap-4">
          <Button variant="primary" className="shadow-brand">
            <Link href="/free-trail">Start you free trail</Link>
          </Button>
          <Button variant="secondary">
            <Link href="/role-base">View role based demos</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
