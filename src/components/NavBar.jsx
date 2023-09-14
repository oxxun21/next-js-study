import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <style jsx global>{`
        nav {
          color: tomato;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .active {
          color: ${(props) => (props ? props.color : "")};
        }
      `}</style>
    </nav>
  );
}
