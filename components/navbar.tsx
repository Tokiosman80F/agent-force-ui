import React from "react";
import Logo from "./logo";
import Container from "./container";
import Link from "next/link";
import Button from "./button";

function Navbar() {
  const navLinks = [
    {
      title: "Features",
      href: "#features",
    },
    {
      title: "Products",
      href: "#products",
    },
    {
      title: "Pricing",
      href: "#pricing",
    },
    {
      title: "FAQ",
      href: "#faq",
    },
  ];
  return (
    <div className="border-y border-neutral-200 dark:border-neutral-800 ">
      <Container className="flex items-center justify-between py-4">
        <Logo />
        <div className="flex items-center gap-6">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Button href="/login" variant="secondary" className="text-sm">
            Login
          </Button>
          <Button href="/signup" variant="primary" className="text-sm">
            Signup
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
